// 离线渲染：用无界面 Chrome（GPU）逐帧渲染 3D 场景，交给 ffmpeg 编码为首尾无缝循环的视频
// 用法：
//   node render.js                                   -> flower-sea.mp4（1920x1080，30fps，默认配置）
//   node render.js --config flower-sea.config.json   （网页设置面板导出的配置）
//   node render.js --hour 17.5 --weather fog         （覆盖时间 / 天气：clear partly overcast fog rain）
//   node render.js --timelapse --duration 60         （一个循环走完一整天）
//   node render.js --width 3840 --height 2160 --fps 60 --out flower-sea-4k.mp4
//   node render.js --still 3 --out poster.png        （只渲染第 3 秒的静帧）
//   node render.js --timeout 120                     （编码无进展超时，单位秒，默认 60）
//   --chrome <路径>  指定 Chrome / Edge 可执行文件
// 说明：宽高会自动向下取偶（H.264 要求偶数），上限 7680x4320；--fps 取整并限制在 1..120；
//       视频会显式写入 BT.709 / TV range 色彩标签，PNG 静帧保持 RGB（pc/gbr）不变。
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer-core');

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : def; };
const has = (name) => args.includes('--' + name);

function die(msg) { console.error(msg); process.exit(1); }

const cfgPath = opt('config', null);
let cfg = {};
if (cfgPath) {
  try { cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8')); }
  catch (e) { die(`读取配置文件失败：${cfgPath}（${e.message}）`); }
}
if (!cfg || typeof cfg !== 'object' || Array.isArray(cfg)) die(`配置文件内容必须是 JSON 对象：${cfgPath}`);
if (opt('duration', null) !== null) cfg.period = +opt('duration');
if (opt('hour', null) !== null) { cfg.hour = +opt('hour'); if (cfg.timeMode !== 'timelapse') cfg.timeMode = 'fixed'; }
if (opt('weather', null) !== null) cfg.weather = opt('weather');
if (opt('quality', null) !== null) cfg.quality = opt('quality');
if (has('timelapse')) cfg.timeMode = 'timelapse';
if (has('no-skyline')) cfg.skyline = false;
if (!cfg.timeMode || cfg.timeMode === 'clock') { // 视频需要固定时间：默认取傍晚黄金时刻
  cfg.timeMode = 'fixed';
  if (cfg.hour === undefined) cfg.hour = 17.9;
}
if (!cfg.weather || cfg.weather === 'auto') cfg.weather = 'clear';

const MAX_W = 7680, MAX_H = 4320, MAX_FPS = 120;
// 显式指定 BT.709 + TV range，保证转码矩阵与写入的标签一致（避免播放器按 601/full 解释造成色偏）
const COLOR_META_ARGS = ['-colorspace', 'bt709', '-color_primaries', 'bt709', '-color_trc', 'bt709', '-color_range', 'tv'];
const VIDEO_FILTER = 'vflip,scale=out_color_matrix=bt709:out_range=tv';

function parseEvenSize(flag, raw, max) {
  const n = +raw;
  if (raw === undefined || raw === null || !Number.isFinite(n) || n < 2) {
    die(`--${flag} 必须是 ≥2 的数字，当前值：${raw}`);
  }
  const v = Math.floor(n / 2) * 2;
  if (v > max) die(`--${flag} 超过上限 ${max}，当前值：${raw}`);
  if (v !== n) console.log(`[提示] --${flag} ${n} 不是偶数，已向下调整为 ${v}（H.264 要求宽高为偶数）`);
  return v;
}
const W = parseEvenSize('width', opt('width', cfg.width || 1920), MAX_W);
const H = parseEvenSize('height', opt('height', cfg.height || 1080), MAX_H);

const fpsRaw = +opt('fps', cfg.fps || 30);
if (!Number.isFinite(fpsRaw) || fpsRaw < 1 || fpsRaw > MAX_FPS) {
  die(`--fps 必须在 1..${MAX_FPS} 之间，当前值：${opt('fps', cfg.fps || 30)}`);
}
const fps = Math.round(fpsRaw);
if (fps !== fpsRaw) console.log(`[提示] --fps ${fpsRaw} 已取整为 ${fps}`);

const stillRaw = opt('still', null);
let still = null;
if (stillRaw !== null) {
  const n = +stillRaw;
  if (!Number.isFinite(n) || n < 0) die(`--still 必须是非负数字（单位：秒），当前值：${stillRaw}`);
  still = n;
}
const out = opt('out', stillRaw !== null ? 'poster.png' : 'flower-sea.mp4');

// 编码无进展超时（写入 stdin / 等待 ffmpeg 收尾）：默认 60s，可用 --timeout <秒> 覆盖
const timeoutRaw = opt('timeout', 60);
const timeoutSec = +timeoutRaw;
if (!Number.isFinite(timeoutSec) || timeoutSec <= 0) die(`--timeout 必须是正数（秒），当前值：${timeoutRaw}`);
const stallMs = Math.round(timeoutSec * 1000);

function findChrome() {
  const p = opt('chrome', process.env.CHROME_PATH);
  if (p) return p;
  const list = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser',
  ];
  const f = list.find((x) => fs.existsSync(x));
  if (!f) throw new Error('找不到 Chrome / Edge，请用 --chrome <路径> 指定');
  return f;
}

// ---------------- ffmpeg 进程管理 ----------------
// 关键点：ffmpeg 可能在任意时刻失败退出（参数非法、输出目录不存在、磁盘满等），
// 此时必须立刻让 await 链失败、杀掉进程并清理半成品，绝不能无限等待 'drain' / 'close'。
class EncoderError extends Error {
  constructor(message, hint) { super(message); this.name = 'EncoderError'; this.hint = hint; }
}

function withTimeout(promise, ms, makeError) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(makeError()), ms);
    if (timer.unref) timer.unref();
    promise.then(
      (v) => { clearTimeout(timer); resolve(v); },
      (e) => { clearTimeout(timer); reject(e); },
    );
  });
}

function startEncoder(outArgs, filter = 'vflip') {
  const proc = spawn('ffmpeg', [
    '-y', '-loglevel', 'error',
    '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${W}x${H}`, '-r', String(fps),
    '-i', '-', '-vf', filter, ...outArgs,
  ], { stdio: ['pipe', 'inherit', 'inherit'] });

  let spawnError = null;   // spawn 本身失败（如 ffmpeg 不在 PATH）
  let stdinError = null;   // 管道写入错误（如 ffmpeg 已退出）
  let closedInfo = null;   // { code, signal }，进程 close 后写入
  let aborted = false;

  const closed = new Promise((resolve) => {
    proc.once('error', (err) => { spawnError = err; });
    proc.once('exit', (code, signal) => { if (!closedInfo) closedInfo = { code, signal }; });
    proc.once('close', (code, signal) => { closedInfo = { code, signal }; resolve(closedInfo); });
  });
  // 吞掉管道错误，统一通过 close / 状态判断失败原因（避免未捕获的 EPIPE 使进程崩溃）
  proc.stdin.on('error', (err) => { stdinError = err; });

  function exitDetail() {
    if (!closedInfo) return '';
    let code = closedInfo.code;
    // Windows 上 ffmpeg 被异常终止时 Node 可能给出无符号的大数，这里转成有符号 32 位便于阅读
    if (typeof code === 'number' && code > 0x7fffffff) code |= 0;
    const parts = [`退出码 ${code === null ? 'null' : code}`];
    if (closedInfo.signal) parts.push(`信号 ${closedInfo.signal}`);
    return parts.join('，');
  }

  function spawnHint() {
    if (spawnError && spawnError.code === 'ENOENT') {
      return '无法启动 ffmpeg：请确认 ffmpeg 已安装并在 PATH 中（可运行 ffmpeg -version 验证）。';
    }
    return null;
  }

  function failureError() {
    if (spawnError) return new EncoderError(`无法启动 ffmpeg（${spawnError.code || '未知错误'}：${spawnError.message}）`, spawnHint());
    const detail = exitDetail();
    return new EncoderError(
      `ffmpeg 异常退出${detail ? '（' + detail + '）' : ''}`,
      '详见上方 ffmpeg 错误输出；常见原因：输出目录不存在、磁盘空间不足、分辨率不是偶数。',
    );
  }

  function ensureRunning() {
    if (spawnError) throw failureError();
    if (aborted) throw new EncoderError('ffmpeg 进程已被中止');
    if (closedInfo) throw failureError();
    if (stdinError) throw new EncoderError(`写入 ffmpeg 失败：${stdinError.message}`, 'ffmpeg 可能已退出，详见上方错误输出。');
  }

  async function write(buf) {
    ensureRunning();
    let accepted;
    try {
      accepted = proc.stdin.write(buf);
    } catch (e) {
      throw new EncoderError(`写入 ffmpeg 失败：${e.message}`, 'ffmpeg 可能已退出，详见上方错误输出。');
    }
    if (accepted) return;

    await new Promise((resolve, reject) => {
      let timer = null;
      const cleanup = () => {
        if (timer) clearTimeout(timer);
        proc.stdin.removeListener('drain', onDrain);
        proc.stdin.removeListener('error', onStdinError);
        proc.removeListener('close', onClose);
      };
      const onDrain = () => { cleanup(); resolve(); };
      const onStdinError = (err) => { cleanup(); reject(new EncoderError(`写入 ffmpeg 失败：${err.message}`, 'ffmpeg 可能已退出，详见上方错误输出。')); };
      const onClose = () => { cleanup(); reject(failureError()); };
      proc.stdin.on('drain', onDrain);
      proc.stdin.on('error', onStdinError);
      proc.on('close', onClose);
      timer = setTimeout(() => {
        cleanup();
        reject(new EncoderError(`写入 ffmpeg 超过 ${timeoutSec}s 无进展`, `渲染/编码可能卡死；可用 --timeout <秒> 调整超时（当前 ${timeoutSec}s）。`));
      }, stallMs);
      if (timer.unref) timer.unref();
    });
  }

  async function finish() {
    if (aborted) throw new EncoderError('ffmpeg 进程已被中止');
    try { proc.stdin.end(); } catch (e) { /* ffmpeg 可能已提前退出，忽略 */ }
    await withTimeout(closed, stallMs, () => new EncoderError(
      `等待 ffmpeg 结束超过 ${timeoutSec}s`,
      `编码可能卡死；可用 --timeout <秒> 调整超时（当前 ${timeoutSec}s）。`,
    ));
    if (spawnError) throw failureError();
    if (closedInfo && closedInfo.code !== 0) throw failureError();
    return closedInfo;
  }

  function abort() {
    aborted = true;
    try { proc.stdin.destroy(); } catch (e) { /* ignore */ }
    try { proc.kill('SIGKILL'); } catch (e) { /* ignore */ }
  }

  return { write, finish, abort };
}

function removePartialOutput(file) {
  try {
    if (!fs.existsSync(file)) return;
    if (!fs.statSync(file).isFile()) return;
    fs.rmSync(file, { force: true });
    console.error('已清理未完成的输出文件：' + file);
  } catch (e) {
    console.error('清理未完成的输出文件失败：' + e.message);
  }
}

// ---------------- 主流程 ----------------
let browser = null;
let encoder = null;

async function main() {
  const chrome = findChrome();
  browser = await puppeteer.launch({
    executablePath: chrome, headless: 'new',
    args: ['--ignore-gpu-blocklist', '--enable-gpu-rasterization', '--disable-background-timer-throttling', '--allow-file-access-from-files'],
    protocolTimeout: 600000,
  });
  const page = await browser.newPage();
  page.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warning') console.log('[页面]', m.text()); });
  page.on('pageerror', (e) => console.log('[页面错误]', e.message));
  await page.setViewport({ width: 640, height: 360 });
  await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href + '?export=1&ui=0');
  await page.waitForFunction(() => window.FlowerSea);
  const t0 = Date.now();
  const info = await page.evaluate((c, w, h) => window.FlowerSea.init(c, w, h), cfg, W, H);
  const period = info.period;
  console.log(`场景就绪 ${Date.now() - t0}ms：草丛 ${info.counts.grass}，花 ${info.counts.flowers}，花苞 ${info.counts.buds}；${cfg.timeMode === 'timelapse' ? '全天延时' : '时间 ' + cfg.hour}，天气 ${cfg.weather}`);
  const frame = async (t) => Buffer.from(await page.evaluate((x) => window.FlowerSea.renderAt(x), t), 'base64');

  if (still !== null) {
    encoder = startEncoder(['-frames:v', '1', out]);
    await encoder.write(await frame(+still));
    await encoder.finish();
    console.log('已写入', out);
  } else {
    const frames = Math.round(period * fps);
    // ipratio/pbratio=1 让关键帧与其余帧画质一致，避免循环接缝处画质跳变
    // ipratio/pbratio=1 让关键帧与其余帧画质一致，避免循环接缝处画质跳变
    // x264 同步写入 BT.709 的 colorprim/transfer/colormatrix（部分 ffmpeg 版本不会从 CLI 标签自动写入 SPS VUI）
    encoder = startEncoder(['-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-tune', 'film',
      '-x264-params', `keyint=${fps * 5}:scenecut=0:ipratio=1.0:pbratio=1.0:colorprim=bt709:transfer=bt709:colormatrix=bt709`,
      '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
      ...COLOR_META_ARGS, out], VIDEO_FILTER);
    const start = Date.now();
    // 第 frames 帧 == 第 0 帧，因此只输出 [0, frames)，循环播放时无缝衔接
    for (let i = 0; i < frames; i++) {
      await encoder.write(await frame(i / fps));
      if (i % fps === 0) process.stdout.write(`\r第 ${i}/${frames} 帧  ${((Date.now() - start) / (i + 1)).toFixed(0)}ms/帧`);
    }
    await encoder.finish();
    console.log(`\n完成 -> ${out}，用时 ${((Date.now() - start) / 1000).toFixed(1)}s`);
  }
}

(async () => {
  try {
    await main();
  } catch (e) {
    const message = e && e.message ? e.message : String(e);
    console.error(`\n导出失败：${message}`);
    if (e && e.hint) console.error(`提示：${e.hint}`);
    process.exitCode = 1;
    if (encoder) {
      encoder.abort();
      removePartialOutput(out);
    }
  } finally {
    if (encoder) encoder.abort(); // 成功时进程已退出，此处安全且可确保失败时不留 ffmpeg
    if (browser) {
      try { await browser.close(); }
      catch (e) { console.error('关闭浏览器失败：' + e.message); }
    }
  }
})();

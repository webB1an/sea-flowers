// 离线渲染：用无界面 Chrome（GPU）逐帧渲染 3D 场景，交给 ffmpeg 编码为首尾无缝循环的视频
// 用法：
//   node render.js                                   -> flower-sea.mp4（1920x1080，30fps，默认配置）
//   node render.js --config flower-sea.config.json   （网页设置面板导出的配置）
//   node render.js --hour 17.5 --weather fog         （覆盖时间 / 天气：clear partly overcast fog rain）
//   node render.js --timelapse --duration 60         （一个循环走完一整天）
//   node render.js --width 3840 --height 2160 --fps 60 --out flower-sea-4k.mp4
//   node render.js --still 3 --out poster.png        （只渲染第 3 秒的静帧）
//   --chrome <路径>  指定 Chrome / Edge 可执行文件
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { pathToFileURL } = require('url');
const puppeteer = require('puppeteer-core');

const args = process.argv.slice(2);
const opt = (name, def) => { const i = args.indexOf('--' + name); return i >= 0 ? args[i + 1] : def; };
const has = (name) => args.includes('--' + name);

const cfgPath = opt('config', null);
const cfg = cfgPath ? JSON.parse(fs.readFileSync(cfgPath, 'utf8')) : {};
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

const W = +opt('width', cfg.width || 1920), H = +opt('height', cfg.height || 1080);
const fps = +opt('fps', cfg.fps || 30);
const still = opt('still', null);
const out = opt('out', still !== null ? 'poster.png' : 'flower-sea.mp4');

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

function ffmpeg(outArgs) {
  return spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${W}x${H}`, '-r', String(fps), '-i', '-', '-vf', 'vflip', ...outArgs],
    { stdio: ['pipe', 'inherit', 'inherit'] });
}
const write = (proc, buf) => new Promise((res) => (proc.stdin.write(buf) ? res() : proc.stdin.once('drain', res)));
const done = (proc) => new Promise((res) => { proc.on('close', res); proc.stdin.end(); });

(async () => {
  const browser = await puppeteer.launch({
    executablePath: findChrome(), headless: 'new',
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
    const ff = ffmpeg(['-frames:v', '1', out]);
    await write(ff, await frame(+still));
    await done(ff);
    console.log('已写入', out);
  } else {
    const frames = Math.round(period * fps);
    // ipratio/pbratio=1 让关键帧与其余帧画质一致，避免循环接缝处画质跳变
    const ff = ffmpeg(['-c:v', 'libx264', '-preset', 'slow', '-crf', '17', '-tune', 'film',
      '-x264-params', `keyint=${fps * 5}:scenecut=0:ipratio=1.0:pbratio=1.0`, '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out]);
    const start = Date.now();
    // 第 frames 帧 == 第 0 帧，因此只输出 [0, frames)，循环播放时无缝衔接
    for (let i = 0; i < frames; i++) {
      await write(ff, await frame(i / fps));
      if (i % fps === 0) process.stdout.write(`\r第 ${i}/${frames} 帧  ${((Date.now() - start) / (i + 1)).toFixed(0)}ms/帧`);
    }
    await done(ff);
    console.log(`\n完成 -> ${out}，用时 ${((Date.now() - start) / 1000).toFixed(1)}s`);
  }
  await browser.close();
})().catch((e) => { console.error(e); process.exit(1); });

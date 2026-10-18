// 用法：
//   node render.js                       -> flower-sea.mp4 (1920x1080, 30fps, 15s)
//   node render.js --width 3840 --height 2160 --fps 60 --out flower-sea-4k.mp4
//   node render.js --still 0 --out poster.png   (只渲染某一时刻的静帧)
//   node render.js --no-skyline           (去掉远处城市剪影)
//   node render.js --config flower-sea.config.json   (使用网页设置面板导出的配置)
//   node render.js --duration 20          (循环时长，秒)
const { createCanvas } = require('@napi-rs/canvas');
const { spawn } = require('child_process');
const fs = require('fs');
const { createScene } = require('./scene.js');

const args = process.argv.slice(2);
const opt = (name, def) => {
  const i = args.indexOf('--' + name);
  return i >= 0 ? args[i + 1] : def;
};
// 网页设置面板"导出配置"得到的 JSON，可用 --config 读入；命令行参数优先
const cfgPath = opt('config', null);
const cfg = cfgPath ? JSON.parse(fs.readFileSync(cfgPath, 'utf8')) : {};
if (opt('duration', null) !== null) cfg.period = +opt('duration');
if (args.includes('--no-skyline')) cfg.skyline = false;

const W = +opt('width', cfg.width || 1920), H = +opt('height', cfg.height || 1080);
const fps = +opt('fps', cfg.fps || 30);
const still = opt('still', null);
const out = opt('out', still !== null ? 'poster.png' : 'flower-sea.mp4');

const t0 = Date.now();
const scene = createScene({
  ...cfg, width: W, height: H,
  makeCanvas: (w, h) => createCanvas(Math.max(1, Math.ceil(w)), Math.max(1, Math.ceil(h))),
});
const period = scene.period;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');
console.log(`scene built in ${Date.now() - t0}ms`);

if (still !== null) {
  scene.draw(ctx, +still);
  fs.writeFileSync(out, canvas.toBuffer('image/png'));
  console.log('wrote', out);
  process.exit(0);
}

const frames = Math.round(period * fps);
const ff = spawn('ffmpeg', [
  '-y', '-loglevel', 'error',
  '-f', 'rawvideo', '-pix_fmt', 'rgba', '-s', `${W}x${H}`, '-r', String(fps), '-i', '-',
  // ipratio/pbratio=1 让关键帧与其余帧画质一致，避免循环接缝处出现画质跳变
  '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-tune', 'film',
  '-x264-params', `keyint=${Math.round(fps * 5)}:scenecut=0:ipratio=1.0:pbratio=1.0`,
  '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out,
], { stdio: ['pipe', 'inherit', 'inherit'] });

(async () => {
  const start = Date.now();
  // 第 frames 帧 == 第 0 帧，因此只输出 [0, frames)，循环播放时无缝衔接
  for (let i = 0; i < frames; i++) {
    scene.draw(ctx, (i / fps));
    const buf = Buffer.from(ctx.getImageData(0, 0, W, H).data.buffer);
    if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once('drain', r));
    if (i % fps === 0) process.stdout.write(`\rframe ${i}/${frames}  ${((Date.now() - start) / (i + 1)).toFixed(0)}ms/frame`);
  }
  ff.stdin.end();
  ff.on('close', (code) => {
    console.log(`\ndone (${code === 0 ? 'ok' : 'ffmpeg exit ' + code}) -> ${out} in ${((Date.now() - start) / 1000).toFixed(1)}s`);
  });
})();

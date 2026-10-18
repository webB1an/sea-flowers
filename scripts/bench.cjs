// 强制渲染基准：不走 rAF、不整帧回读；每帧 1px readPixels 同步 GPU 后统计 frame time。
// 用法：node scripts/bench.cjs --tag baseline [--width 1920] [--height 1080] [--frames 120]
//       node scripts/bench.cjs --tag high-1080 --quality high --hour 17.9 --weather clear
// 输出：.review/realism/bench-<tag>.json，并打印摘要
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { launch, gpuInfo } = require('./lib/chrome.cjs');

const ROOT = path.resolve(__dirname, '..');
const OUT_ROOT = path.join(ROOT, '.review', 'realism');
const URL = 'file:///' + path.join(ROOT, 'index.html').replace(/\\/g, '/') + '?export=1&ui=0';

function arg(name, def = null) { const i = process.argv.indexOf('--' + name); return i >= 0 ? process.argv[i + 1] : def; }
function gitCommit() { try { return execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim(); } catch (e) { return null; } }

(async () => {
  const width = +arg('width', 1920), height = +arg('height', 1080);
  const frames = +arg('frames', 120);
  const tag = arg('tag', 'baseline');
  const cfg = {
    seed: 1011, quality: arg('quality', 'high'), heroes: true,
    timeMode: 'fixed', hour: +arg('hour', 17.9), weather: arg('weather', 'clear'),
  };
  const { browser, executablePath } = await launch();
  try {
    const page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
    await page.waitForFunction(() => window.FlowerSea, { timeout: 30000 });
    const info = await page.evaluate((c, w, h) => window.FlowerSea.init(c, w, h), cfg, width, height);
    const gpu = await gpuInfo(page);
    const result = await page.evaluate((n) => window.FlowerSea.bench(n, 1 / 60), frames);
    const out = {
      tag, commit: gitCommit(), chrome: executablePath, gpu, time: new Date().toISOString(),
      config: { width, height, frames, ...cfg }, counts: info.counts, result,
    };
    fs.mkdirSync(OUT_ROOT, { recursive: true });
    const file = path.join(OUT_ROOT, `bench-${tag}.json`);
    fs.writeFileSync(file, JSON.stringify(out, null, 2));
    console.log(JSON.stringify({
      tag, gpu, size: `${width}x${height}`, quality: cfg.quality, frames,
      avgMs: result.avgMs, p95Ms: result.p95Ms, fps: result.fps,
      triangles: result.render.triangles, calls: result.render.calls,
      programs: result.programs, textures: result.memory.textures, geometries: result.memory.geometries,
      counts: result.counts, file,
    }, null, 2));
    console.log(`[bench] -> ${file}`);
  } finally {
    await browser.close();
  }
})().catch((e) => { console.error('FATAL', e && e.stack || e); process.exit(1); });

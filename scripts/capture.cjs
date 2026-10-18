// 固定场景截图 + A/B 对比（真实感大改验收工具）
//
// 用法：
//   node scripts/capture.cjs --tag baseline                 # 生成 6 场景固定截图
//   node scripts/capture.cjs --tag m1 --width 1920 --height 1080
//   node scripts/capture.cjs --compare baseline m1          # 逐像素/并排图对比
//
// 输出：.review/realism/<tag>/<scene>.png、golden-hero.png、city-band.png、meta.json
//      .review/realism/compare/<tagA>__<tagB>/<name>_ab.png（compare 模式）
'use strict';
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { createCanvas, loadImage } = require('@napi-rs/canvas');
const { launch, gpuInfo } = require('./lib/chrome.cjs');

const ROOT = path.resolve(__dirname, '..');
const OUT_ROOT = path.join(ROOT, '.review', 'realism');
const URL = 'file:///' + path.join(ROOT, 'index.html').replace(/\\/g, '/') + '?export=1&ui=0';
const T = 3.0; // 固定动画时刻（秒）

const SCENES = [
  { name: 'golden', cfg: { timeMode: 'fixed', hour: 17.9, weather: 'clear' } },
  { name: 'noon', cfg: { timeMode: 'fixed', hour: 12.5, weather: 'clear' } },
  { name: 'overcast', cfg: { timeMode: 'fixed', hour: 10.5, weather: 'overcast' } },
  { name: 'rain', cfg: { timeMode: 'fixed', hour: 15.5, weather: 'rain' } },
  { name: 'night', cfg: { timeMode: 'fixed', hour: 22, weather: 'clear' } },
  { name: 'city', cfg: { timeMode: 'fixed', hour: 16.8, weather: 'clear', skyline: true } },
];
const BASE_CFG = { seed: 1011, quality: 'high', heroes: true };
const CROPS = [
  { src: 'golden', name: 'golden-hero', rect: [0.53, 0.27, 0.42, 0.64] },
  { src: 'city', name: 'city-band', rect: [0.0, 0.1, 1.0, 0.34] },
];

function arg(name, def = null) {
  const i = process.argv.indexOf('--' + name);
  return i >= 0 ? process.argv[i + 1] : def;
}
function has(name) { return process.argv.includes('--' + name); }
function gitCommit() { try { return execSync('git rev-parse --short HEAD', { cwd: ROOT }).toString().trim(); } catch (e) { return null; } }
function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function rawToPng(base64, width, height, outFile) {
  const raw = Buffer.from(base64, 'base64');
  if (raw.length !== width * height * 4) throw new Error(`像素长度不符：${raw.length} != ${width * height * 4}`);
  const cv = createCanvas(width, height);
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(width, height);
  for (let y = 0; y < height; y++) {           // readPixels 为 bottom-up，翻转为 top-down
    const src = (height - 1 - y) * width * 4;
    raw.copy(img.data, y * width * 4, src, src + width * 4);
  }
  ctx.putImageData(img, 0, 0);
  fs.writeFileSync(outFile, cv.toBuffer('image/png'));
  return cv;
}

async function capture({ tag, width, height, outDir }) {
  const { browser, executablePath } = await launch();
  ensureDir(outDir);
  const meta = { tag, width, height, commit: gitCommit(), chrome: executablePath, time: new Date().toISOString(), scenes: {} };
  try {
    for (const scene of SCENES) {
      const page = await browser.newPage();
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.goto(URL, { waitUntil: 'load', timeout: 60000 });
      await page.waitForFunction(() => window.FlowerSea, { timeout: 30000 });
      const cfg = { ...BASE_CFG, ...scene.cfg };
      const info = await page.evaluate((c, w, h) => window.FlowerSea.init(c, w, h), cfg, width, height);
      const b64 = await page.evaluate((t) => window.FlowerSea.renderAt(t), T);
      const shot = path.join(outDir, scene.name + '.png');
      rawToPng(b64, width, height, shot);
      meta.scenes[scene.name] = { cfg, counts: info.counts, gpu: await gpuInfo(page), file: path.relative(outDir, shot) };
      console.log(`[capture] ${scene.name} ${width}x${height} -> ${shot}`);
      await page.close();
    }
    // 固定裁切（花/城市）用于快速评审
    for (const c of CROPS) {
      const srcFile = path.join(outDir, c.src + '.png');
      const img = await loadImage(fs.readFileSync(srcFile));
      const [fx, fy, fw, fh] = c.rect;
      const x = Math.round(fx * img.width), y = Math.round(fy * img.height);
      const w = Math.round(fw * img.width), h = Math.round(fh * img.height);
      const cv = createCanvas(w, h);
      cv.getContext('2d').drawImage(img, x, y, w, h, 0, 0, w, h);
      fs.writeFileSync(path.join(outDir, c.name + '.png'), cv.toBuffer('image/png'));
      console.log(`[capture] crop ${c.name} -> ${path.join(outDir, c.name + '.png')}`);
    }
    meta.finishedAt = new Date().toISOString();
    fs.writeFileSync(path.join(outDir, 'meta.json'), JSON.stringify(meta, null, 2));
  } finally {
    await browser.close();
  }
}

async function compare(dirA, dirB) {
  if (!fs.existsSync(dirA) || !fs.existsSync(dirB)) throw new Error('compare 目录不存在');
  const names = fs.readdirSync(dirA).filter((f) => f.endsWith('.png'));
  const outDir = path.join(OUT_ROOT, 'compare', `${path.basename(dirA)}__${path.basename(dirB)}`);
  ensureDir(outDir);
  const rows = [];
  for (const name of names) {
    const fB = path.join(dirB, name);
    if (!fs.existsSync(fB)) { rows.push({ name, missing: true }); continue; }
    const a = await loadImage(fs.readFileSync(path.join(dirA, name)));
    const b = await loadImage(fs.readFileSync(fB));
    const W = Math.min(a.width, b.width), H = Math.min(a.height, b.height);
    const ca = createCanvas(W, H), cb = createCanvas(W, H);
    const xa = ca.getContext('2d'), xb = cb.getContext('2d');
    xa.drawImage(a, 0, 0); xb.drawImage(b, 0, 0);
    const da = xa.getImageData(0, 0, W, H).data, db = xb.getImageData(0, 0, W, H).data;
    let sum = 0, n = 0, max = 0, over2 = 0;
    for (let i = 0; i < da.length; i += 4) {
      for (let k = 0; k < 3; k++) {
        const d = Math.abs(da[i + k] - db[i + k]);
        sum += d; n++; if (d > max) max = d; if (d > 2) over2++;
      }
    }
    // 并排 A/B 图
    const ab = createCanvas(W * 2 + 8, H);
    const xab = ab.getContext('2d');
    xab.drawImage(a, 0, 0);
    xab.drawImage(b, W + 8, 0);
    fs.writeFileSync(path.join(outDir, name.replace('.png', '_ab.png')), ab.toBuffer('image/png'));
    rows.push({ name, meanAbsDiff: +(sum / n).toFixed(4), maxDiff: max, pctOver2: +((over2 / n) * 100).toFixed(4), size: [a.width, a.height, b.width, b.height] });
  }
  fs.writeFileSync(path.join(outDir, 'diff.json'), JSON.stringify(rows, null, 2));
  console.log(JSON.stringify(rows, null, 2));
  const bad = rows.filter((r) => r.missing || (r.meanAbsDiff > 0.5) || (r.maxDiff > 8));
  console.log(`[compare] ${rows.length} 张，${bad.length} 张超过阈值 (mean>0.5 或 max>8) -> ${outDir}`);
  if (bad.length) process.exitCode = 1;
  return rows;
}

(async () => {
  const width = +arg('width', 1920), height = +arg('height', 1080);
  const compareA = arg('compare', null);
  if (compareA) {
    const b = process.argv[process.argv.indexOf('--compare') + 2];
    if (!b) throw new Error('用法：--compare <tagA> <tagB>');
    await compare(path.join(OUT_ROOT, compareA), path.join(OUT_ROOT, b));
    return;
  }
  const tag = arg('tag', 'baseline');
  const outDir = arg('out', path.join(OUT_ROOT, tag));
  await capture({ tag, width, height, outDir });
})().catch((e) => { console.error('FATAL', e && e.stack || e); process.exit(1); });

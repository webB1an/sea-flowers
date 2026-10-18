// 启动时用 2D canvas 程序生成的贴图：羽状叶图集、花瓣、蝴蝶翅膀
import * as THREE from 'three';
import { mulberry32 } from './config.js';

function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

function toTexture(c, { mips = true } = {}) {
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.NoColorSpace;
  t.generateMipmaps = mips;
  t.minFilter = mips ? THREE.LinearMipmapLinearFilter : THREE.LinearFilter;
  t.magFilter = THREE.LinearFilter;
  t.wrapS = t.wrapT = THREE.ClampToEdgeWrapping;
  t.anisotropy = 4;
  t.needsUpdate = true;
  return t;
}

// 波斯菊羽状细裂叶：RGB 存明暗（叶尖亮、茎暗），A 存覆盖
function drawFoliage(g, r, w, h) {
  const bx = w / 2, by = h;
  const stems = 6 + Math.floor(r() * 4);
  const lw = h * 0.0052;
  g.lineCap = 'round';
  for (let s = 0; s < stems; s++) {
    const ang = (r() - 0.5) * 1.05;
    const len = h * (0.55 + 0.42 * r());
    const tx = bx + Math.sin(ang) * len * 0.85 * (w / h), ty = by - Math.cos(ang) * len;
    const cx = bx + Math.sin(ang) * len * 0.2 + (r() - 0.5) * len * 0.12, cy = by - len * 0.55;
    const shade = (v) => { const c = Math.round(255 * Math.min(1, v)); return `rgb(${c},${c},${c})`; };
    g.strokeStyle = shade(0.42); g.lineWidth = lw * 1.5;
    g.beginPath(); g.moveTo(bx, by); g.quadraticCurveTo(cx, cy, tx, ty); g.stroke();
    const nodes = 7 + Math.floor(r() * 6);
    for (let k = 1; k <= nodes; k++) {
      const p = k / (nodes + 0.5), ip = 1 - p;
      const px = ip * ip * bx + 2 * ip * p * cx + p * p * tx;
      const py = ip * ip * by + 2 * ip * p * cy + p * p * ty;
      const dx = 2 * ip * (cx - bx) + 2 * p * (tx - cx), dy = 2 * ip * (cy - by) + 2 * p * (ty - cy);
      const ta = Math.atan2(dx, -dy);
      for (const side of [-1, 1]) {
        if (r() > 0.88) continue;
        const L = len * (0.14 + 0.18 * r()) * (1 - 0.5 * p);
        const a = ta + side * (0.4 + 0.6 * r());
        const ex = px + Math.sin(a) * L, ey = py - Math.cos(a) * L;
        const mx = px + Math.sin(a - side * 0.3) * L * 0.55, my = py - Math.cos(a - side * 0.3) * L * 0.55;
        g.strokeStyle = shade(0.5 + 0.5 * p + (r() - 0.5) * 0.25);
        g.lineWidth = lw;
        g.beginPath(); g.moveTo(px, py); g.quadraticCurveTo(mx, my, ex, ey); g.stroke();
        const forks = 2 + Math.floor(r() * 2);
        for (let f = 0; f < forks; f++) {
          const q = 0.3 + r() * 0.5;
          const fx = px + (ex - px) * q, fy = py + (ey - py) * q;
          const fa = a + (r() < 0.5 ? -1 : 1) * (0.35 + r() * 0.45);
          const fl = L * (0.3 + r() * 0.35);
          g.lineWidth = lw * 0.8;
          g.beginPath(); g.moveTo(fx, fy); g.lineTo(fx + Math.sin(fa) * fl, fy - Math.cos(fa) * fl); g.stroke();
        }
      }
    }
  }
}

export function makeFoliageAtlas(variants = 4, size = 512) {
  const c = canvas(size * variants, size);
  const g = c.getContext('2d');
  for (let v = 0; v < variants; v++) {
    g.save();
    g.beginPath(); g.rect(v * size, 0, size, size); g.clip();
    g.translate(v * size, 0);
    drawFoliage(g, mulberry32(4242 + v * 97), size, size);
    g.restore();
  }
  return toTexture(c);
}

// 花瓣：A 为带三齿的倒卵形轮廓，R 为纵向沟纹明暗，G 为离边缘的距离（用于边缘加深）
export function makePetalTexture() {
  const W = 256, H = 512;
  const c = canvas(W, H);
  const g = c.getContext('2d');
  const r = mulberry32(77);
  const len = H * 0.985, wt = W * 0.47, w0 = W * 0.05;
  const shape = new Path2D();
  shape.moveTo(-w0, 0);
  shape.bezierCurveTo(-W * 0.2, -len * 0.3, -wt * 1.05, -len * 0.62, -wt, -len * 0.88);
  for (let k = 0; k < 3; k++) {
    const x0 = -wt + (2 * wt * k) / 3, x1 = -wt + (2 * wt * (k + 1)) / 3, xm = (x0 + x1) / 2, q = (x1 - x0) * 0.2;
    const peak = -len * (0.955 + (k === 1 ? 0.045 : 0.01 * r()));
    const valley = k === 2 ? -len * 0.88 : -len * (0.87 + 0.02 * r());
    shape.quadraticCurveTo(xm - q, peak, xm, peak);
    shape.quadraticCurveTo(xm + q, peak, x1, valley);
  }
  shape.bezierCurveTo(wt * 1.05, -len * 0.62, W * 0.2, -len * 0.3, w0, 0);
  shape.closePath();
  g.translate(W / 2, H);
  g.fillStyle = '#fff';
  g.fill(shape);
  // 纵向沟纹：从花瓣基部放射到齿尖
  g.save(); g.clip(shape);
  for (let v = -9; v <= 9; v++) {
    const k = v / 9;
    g.strokeStyle = `rgba(90,90,90,${0.28 + r() * 0.22 + (v % 3 === 0 ? 0.15 : 0)})`;
    g.lineWidth = v % 3 === 0 ? 2.2 : 1.3;
    g.beginPath();
    g.moveTo(k * w0 * 0.8, -6);
    g.bezierCurveTo(k * wt * 0.3, -len * 0.35, k * wt * 0.85, -len * 0.65, k * wt * 0.93, -len * (0.86 + r() * 0.06));
    g.stroke();
  }
  // 基部一抹暗色（与花心相接处）
  const gr = g.createLinearGradient(0, 0, 0, -len * 0.25);
  gr.addColorStop(0, 'rgba(60,60,60,0.55)'); gr.addColorStop(1, 'rgba(60,60,60,0)');
  g.fillStyle = gr; g.fillRect(-W, -len * 0.25, W * 2, len * 0.25);
  g.restore();
  // G 通道：轮廓模糊后的值，越靠近边缘越小
  const blur = canvas(W, H), bg = blur.getContext('2d');
  bg.filter = 'blur(7px)';
  bg.drawImage(c, 0, 0);
  const src = g.getImageData(0, 0, W, H), bl = bg.getImageData(0, 0, W, H);
  for (let i = 0; i < src.data.length; i += 4) src.data[i + 1] = bl.data[i + 3];
  g.setTransform(1, 0, 0, 1, 0, 0);
  g.putImageData(src, 0, 0);
  return toTexture(c);
}

// 菜粉蝶翅膀（单侧）：前翅 + 后翅，前翅尖端灰黑
export function makeWingTexture() {
  const S = 128;
  const c = canvas(S, S);
  const g = c.getContext('2d');
  g.fillStyle = '#f7f6ee';
  g.beginPath(); g.ellipse(S * 0.55, S * 0.36, S * 0.42, S * 0.3, -0.45, 0, Math.PI * 2); g.fill();
  g.beginPath(); g.ellipse(S * 0.4, S * 0.72, S * 0.3, S * 0.24, 0.5, 0, Math.PI * 2); g.fill();
  g.globalCompositeOperation = 'source-atop';
  g.fillStyle = '#4a4a46';
  g.beginPath(); g.ellipse(S * 0.9, S * 0.12, S * 0.2, S * 0.14, -0.45, 0, Math.PI * 2); g.fill();
  g.fillStyle = 'rgba(60,60,60,0.75)';
  g.beginPath(); g.arc(S * 0.6, S * 0.36, S * 0.05, 0, Math.PI * 2); g.fill();
  const gr = g.createLinearGradient(0, 0, S * 0.5, 0);
  gr.addColorStop(0, 'rgba(180,180,150,0.5)'); gr.addColorStop(1, 'rgba(180,180,150,0)');
  g.fillStyle = gr; g.fillRect(0, 0, S, S);
  return toTexture(c);
}

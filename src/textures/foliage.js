// 羽状叶图集（草/树线共用）：RGB 存明暗（叶尖亮、茎暗），A 存覆盖。
import { mulberry32 } from '../config.js';
import { canvas, toTexture } from './canvas.js';

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
    // 主脉高光：近景草叶的一条亮脊
    g.strokeStyle = shade(0.82); g.lineWidth = lw * 0.55;
    g.beginPath(); g.moveTo(bx, by); g.quadraticCurveTo(cx + 1, cy, tx, ty); g.stroke();
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

export function makeFoliageAtlas(variants = 6, size = 512) {
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

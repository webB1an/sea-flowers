// 花瓣贴图：A 为带三齿的倒卵形轮廓，R 为纵向沟纹明暗，G 为离边缘的距离（用于边缘加深）。
import { mulberry32 } from '../config.js';
import { canvas, toTexture } from './canvas.js';

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

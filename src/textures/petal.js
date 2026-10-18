// 花瓣图集：2×2 四种变体（形状/脉纹/厚度不同），每格 256×512。
// 通道约定（与 FLOWER_FS 对应）：
//   R = 纵向脉纹明暗（1=亮，<1=沟纹）
//   G = 到边缘的距离（模糊 alpha，边缘加深/勾轮廓）
//   B = 厚度（1=基部厚，越小越薄 → 透光越强）
//   A = 花瓣轮廓（含边缘磨损）
import { mulberry32 } from '../config.js';
import { canvas, toTexture } from './canvas.js';

const TW = 256, TH = 512, COLS = 2, ROWS = 2;

function drawPetal(g, r, variant) {
  const W = TW, H = TH;
  const len = H * (0.975 + 0.02 * r());
  const wt = W * (0.44 + 0.05 * r());
  const w0 = W * 0.045;
  const teeth = 3 + (variant === 3 ? 1 : 0);
  const shape = new Path2D();
  shape.moveTo(-w0, 0);
  shape.bezierCurveTo(-W * 0.2, -len * 0.3, -wt * 1.05, -len * 0.62, -wt, -len * 0.88);
  for (let k = 0; k < teeth; k++) {
    const x0 = -wt + (2 * wt * k) / teeth, x1 = -wt + (2 * wt * (k + 1)) / teeth;
    const xm = (x0 + x1) / 2, q = (x1 - x0) * (0.18 + 0.08 * r());
    const peak = -len * (0.94 + 0.045 * r() + (k === Math.floor(teeth / 2) ? 0.02 : 0));
    const valley = k === teeth - 1 ? -len * 0.86 : -len * (0.85 + 0.035 * r());
    shape.quadraticCurveTo(xm - q, peak, xm, peak);
    shape.quadraticCurveTo(xm + q, peak, x1, valley);
  }
  shape.bezierCurveTo(wt * 1.05, -len * 0.62, W * 0.2, -len * 0.3, w0, 0);
  shape.closePath();

  g.save();
  g.translate(W / 2, H);
  // 轮廓
  g.fillStyle = '#fff';
  g.fill(shape);
  g.clip(shape);
  // 纵向脉纹（写入 R 通道；这里先画灰阶）
  for (let v = -11; v <= 11; v++) {
    const k = v / 11;
    const major = Math.abs(v) % 3 === 0;
    g.strokeStyle = `rgba(60,60,60,${(major ? 0.42 : 0.24) + r() * 0.2})`;
    g.lineWidth = major ? 2.4 : 1.2;
    g.beginPath();
    g.moveTo(k * w0 * 0.8, -6);
    g.bezierCurveTo(k * wt * 0.3, -len * 0.35, k * wt * 0.85, -len * 0.65, k * wt * (0.75 + 0.2 * r()), -len * (0.82 + 0.1 * r()));
    g.stroke();
  }
  // 二级脉（横向小纹）
  for (let i = 0; i < 26; i++) {
    const t = 0.15 + r() * 0.75;
    const y = -len * t;
    const x = (r() - 0.5) * wt * 1.5 * (0.3 + t);
    g.strokeStyle = `rgba(90,90,90,${0.12 + r() * 0.12})`;
    g.lineWidth = 0.8;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (r() - 0.5) * 26, y - 6 - r() * 10);
    g.stroke();
  }
  // 基部暗色（与花心相接处）
  const gr = g.createLinearGradient(0, 0, 0, -len * 0.3);
  gr.addColorStop(0, 'rgba(40,40,40,0.65)'); gr.addColorStop(1, 'rgba(40,40,40,0)');
  g.fillStyle = gr; g.fillRect(-W, -len * 0.3, W * 2, len * 0.3);
  g.restore();
  return { shape, len };
}

function makeVariant(variant) {
  const r = mulberry32(9100 + variant * 137);
  const alpha = canvas(TW, TH);
  const ag = alpha.getContext('2d');
  const { shape, len } = drawPetal(ag, r, variant);

  // 边缘磨损：在轮廓附近抠掉一些极小碎口
  const wear = canvas(TW, TH);
  const wg = wear.getContext('2d');
  wg.drawImage(alpha, 0, 0);
  wg.globalCompositeOperation = 'destination-out';
  for (let i = 0; i < 26; i++) {
    const t = 0.3 + r() * 0.68;
    const y = TH - len * t;
    const x = TW / 2 + (r() - 0.5) * TW * 0.9 * t;
    wg.beginPath();
    wg.arc(x, y, 0.7 + r() * 2.0, 0, Math.PI * 2);
    wg.fill();
  }
  wg.globalCompositeOperation = 'source-over';

  // 灰度/脉纹层：在白底上画脉纹，用于 R 通道
  const veins = canvas(TW, TH);
  const vg = veins.getContext('2d');
  vg.fillStyle = '#fff'; vg.fillRect(0, 0, TW, TH);
  vg.save(); vg.translate(TW / 2, TH); vg.clip(shape);
  for (let v = -11; v <= 11; v++) {
    const k = v / 11;
    const major = Math.abs(v) % 3 === 0;
    vg.strokeStyle = `rgba(70,70,70,${(major ? 0.4 : 0.22) + r() * 0.18})`;
    vg.lineWidth = major ? 2.2 : 1.2;
    vg.beginPath();
    vg.moveTo(k * TW * 0.036, -6);
    vg.bezierCurveTo(k * TW * 0.14, -len * 0.35, k * TW * 0.4, -len * 0.65, k * TW * 0.44, -len * 0.85);
    vg.stroke();
  }
  vg.restore();

  // 边缘距离：模糊 alpha
  const blur = canvas(TW, TH);
  const bg = blur.getContext('2d');
  bg.filter = 'blur(7px)';
  bg.drawImage(alpha, 0, 0);

  const ad = ag.getImageData(0, 0, TW, TH).data;
  const wd = wg.getImageData(0, 0, TW, TH).data;
  const vd = vg.getImageData(0, 0, TW, TH).data;
  const bd = bg.getImageData(0, 0, TW, TH).data;

  const out = new ImageData(TW, TH);
  const od = out.data;
  for (let y = 0; y < TH; y++) {
    const t = 1 - y / TH;                    // 0=基部（画布底部），1=叶尖
    const thickBase = 0.92 - 0.62 * t;       // 基部厚、尖端薄
    for (let x = 0; x < TW; x++) {
      const i = (y * TW + x) * 4;
      const along = Math.min(1, Math.max(0, t));
      // B：厚度（越靠边/越靠尖越薄）
      const edgeNorm = bd[i + 3] / 255;
      const thick = Math.min(1, Math.max(0.12, thickBase * (0.55 + 0.45 * Math.min(1, edgeNorm * 1.6)) + (r() - 0.5) * 0.04));
      od[i] = vd[i];                          // R 脉纹
      od[i + 1] = bd[i + 3];                  // G 边缘距离
      od[i + 2] = Math.round(255 * thick);    // B 厚度
      od[i + 3] = wd[i + 3];                  // A 轮廓（含磨损）
    }
  }
  return out;
}

export function makePetalTexture() {
  const atlas = canvas(TW * COLS, TH * ROWS);
  const g = atlas.getContext('2d');
  for (let v = 0; v < COLS * ROWS; v++) {
    const img = makeVariant(v);
    // 变体 0/1 画在画布下半（flipY 后对应纹理 v=0..0.5），2/3 画在上半
    const col = v % COLS, row = v < 2 ? 1 : 0;
    g.putImageData(img, col * TW, row * TH);
  }
  return toTexture(atlas);
}

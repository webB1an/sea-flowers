// 菜粉蝶翅膀（单侧）：前翅 + 后翅，前翅尖端灰黑。
import { canvas, toTexture } from './canvas.js';

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

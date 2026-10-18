// 自动画质：启动时按 GPU 型号 + 渲染分辨率选择档位；运行时提供低帧率降档决策。
// 纯逻辑函数，便于在 Node/无头浏览器中单测，不依赖 DOM / WebGL。
export const TIERS = ['low', 'medium', 'high', 'ultra'];

// GPU 字符串来自 WEBGL_debug_renderer_info（ANGLE 包装后的名称，Windows/macOS/Linux 均适用）
const SOFTWARE = /swiftshader|llvmpipe|softpipe|software|basic render|microsoft basic/i;
const STRONG = /(rtx\s?\d|geforce\s?(gtx\s?1[6-9]|rtx)|radeon\s?(rx\s?[5-9]\d{3}|pro)|apple\s?m[1-9]|arc\s?a\d+|quadro|tesla|firepro)/i;
const MID = /(intel|iris|uhd|vega|geforce\s?(mx|gtx\s?(9|10|1[0-5]))|radeon\s?(rx\s?[3-4]\d{2}|vega)|mali|adreno|powervr)/i;

// 返回 'low' | 'medium' | 'high' | 'ultra'（auto 不会选择 ultra：默认更看重功耗/流畅度）
export function detectQuality(gpu, width, height) {
  const name = String(gpu || '');
  const w = Math.max(1, Math.floor(+width || 0));
  const h = Math.max(1, Math.floor(+height || 0));
  const px = w * h;
  if (SOFTWARE.test(name)) return 'low';           // 软件渲染（SwiftShader 等）直接最低档
  const strong = STRONG.test(name);
  const mid = MID.test(name);
  if (px >= 3840 * 2160 * 0.9) return strong ? 'medium' : 'low';        // 4K：强卡 medium，其余 low
  if (px >= 2560 * 1440 * 0.9) return strong ? 'high' : (mid ? 'low' : 'medium');
  return strong ? 'high' : 'medium';               // 1080p 及以下：强卡 high，其余 medium
}

// 低帧率降档监视器：每渲染帧喂入 (dt 秒, 当前档位)，返回要降到的档位或 null。
// 连续 minSeconds 秒平均 FPS 低于 threshold 才降一档；降档后进入 cooldownSeconds 冷却，避免抖动。
export function createAutoQualityMonitor({ threshold = 24, minSeconds = 4, cooldownSeconds = 10 } = {}) {
  let frames = 0;
  let elapsed = 0;
  let cooldown = 0;
  return function update(dt, tier) {
    const i = TIERS.indexOf(tier);
    if (!(dt > 0) || i < 0 || i === 0) return null;
    if (cooldown > 0) {
      cooldown -= dt;
      if (cooldown <= 0) { frames = 0; elapsed = 0; }
      return null;
    }
    frames += 1;
    elapsed += dt;
    if (elapsed < minSeconds) return null;
    const fps = frames / elapsed;
    frames = 0;
    elapsed = 0;
    if (fps < threshold) {
      cooldown = cooldownSeconds;
      return TIERS[i - 1];
    }
    return null;
  };
}

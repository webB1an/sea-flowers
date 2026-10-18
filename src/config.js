// 所有可配置项及默认值（设置面板、导出配置、render.js 共用）
export const DEFAULTS = {
  period: 15,            // 循环时长（秒）
  seed: 1011,            // 布局种子
  timeMode: 'clock',     // clock 跟随时钟 | fixed 固定时间 | timelapse 一个循环走完一整天
  hour: 17.9,            // 固定时间 / 延时起点（0–24）
  weather: 'clear',      // clear 晴 | partly 多云 | overcast 阴 | fog 雾 | rain 小雨 | auto 自动
  wind: 1,               // 风力
  windSpeed: 1,          // 风速（阵风频率）
  grassDensity: 1,       // 草丛密度
  flowerDensity: 1,      // 花朵密度
  flowerSize: 1,         // 花朵大小
  heroes: true,          // 前景大花
  heroSize: 1,           // 前景大花尺寸
  colors: { white: '#f6eff1', pink: '#ee9fc3', magenta: '#d6127a', crimson: '#8a0a34' },
  colorWeights: { white: 0.38, pink: 0.27, magenta: 0.22, crimson: 0.13 },
  skyline: true,         // 城市背景
  horizon: 0.385,        // 地平线高度（占画面比例，从上往下）
  haze: 1,               // 空气雾感
  dof: 1,                // 景深（0 = 全景清晰）
  bloom: 1,              // 光晕
  exposure: 0,           // 曝光补偿（EV）
  grain: 1,              // 胶片颗粒
  butterflies: 2,        // 蝴蝶
  petals: 8,             // 飘落花瓣
  pollen: 1,             // 光点 / 绒絮
  fireflies: 1,          // 萤火虫（夜晚）
  quality: 'high',       // low | medium | high | ultra
};

export const QUALITY = {
  low: { grass: 26000, flowers: 0.5, samples: 0, dofTaps: 16, treeline: 700, shadow: 0, ibl: 0, ao: 0 },
  medium: { grass: 48000, flowers: 0.75, samples: 4, dofTaps: 24, treeline: 1000, shadow: 1024, ibl: 32, ao: 1 },
  high: { grass: 80000, flowers: 1, samples: 4, dofTaps: 36, treeline: 1400, shadow: 2048, ibl: 64, ao: 1 },
  ultra: { grass: 130000, flowers: 1.3, samples: 8, dofTaps: 48, treeline: 1800, shadow: 2048, ibl: 128, ao: 1 },
};

export const WEATHERS = ['clear', 'partly', 'overcast', 'fog', 'rain'];

const clone = (o) => JSON.parse(JSON.stringify(o));

const TIME_MODES = ['clock', 'fixed', 'timelapse'];
const WEATHER_MODES = [...WEATHERS, 'auto'];
const QUALITY_MODES = [...Object.keys(QUALITY), 'auto'];   // auto：按 GPU/分辨率自动选档
const HEX6 = /^#[0-9a-f]{6}$/i;
// [最小值, 最大值]：非法/越界值会被钳制（与设置面板滑块范围一致）
const CLAMPS = {
  period: [2, 600], wind: [0, 3], windSpeed: [0.25, 3], grassDensity: [0.3, 1.6],
  flowerDensity: [0, 4], flowerSize: [0.5, 2], heroSize: [0.5, 1.6], haze: [0, 3],
  dof: [0, 2], bloom: [0, 2.5], exposure: [-2, 2], grain: [0, 2],
  butterflies: [0, 8], petals: [0, 30], pollen: [0, 3], fireflies: [0, 3],
};
const clampNum = (v, [lo, hi], def) => {
  const n = +v;
  return Number.isFinite(n) ? Math.min(hi, Math.max(lo, n)) : def;
};

// 白名单/范围校验：坏配置（手改、旧版导出、导入出错）不能导致 NaN/黑屏/UI 下拉框空白
export function resolveConfig(o = {}) {
  const src = o && typeof o === 'object' ? o : {};
  const c = { ...clone(DEFAULTS), ...src };
  c.colors = { ...DEFAULTS.colors, ...(src.colors && typeof src.colors === 'object' ? src.colors : {}) };
  c.colorWeights = { ...DEFAULTS.colorWeights, ...(src.colorWeights && typeof src.colorWeights === 'object' ? src.colorWeights : {}) };
  for (const k of Object.keys(c)) if (!(k in DEFAULTS)) delete c[k];   // 丢弃未知键，避免污染配置
  if (!TIME_MODES.includes(c.timeMode)) c.timeMode = DEFAULTS.timeMode;
  if (!WEATHER_MODES.includes(c.weather)) c.weather = DEFAULTS.weather;
  if (!QUALITY_MODES.includes(c.quality)) c.quality = DEFAULTS.quality;
  c.hour = Number.isFinite(+c.hour) ? (((+c.hour % 24) + 24) % 24) : DEFAULTS.hour;
  for (const [k, range] of Object.entries(CLAMPS)) c[k] = clampNum(c[k], range, DEFAULTS[k]);
  c.seed = Math.max(0, Math.floor(+c.seed) || 0);
  for (const k of ['heroes', 'skyline']) c[k] = !!c[k];
  for (const k of Object.keys(DEFAULTS.colors)) {
    if (!HEX6.test(String(c.colors[k] || ''))) c.colors[k] = DEFAULTS.colors[k];
  }
  for (const k of Object.keys(DEFAULTS.colorWeights)) {
    const w = +c.colorWeights[k];
    c.colorWeights[k] = Number.isFinite(w) ? Math.min(1, Math.max(0, w)) : DEFAULTS.colorWeights[k];
  }
  return c;
}

// 改变这些项需要重新生成场景；其余项只改 uniform，即时生效
export const STRUCTURAL_KEYS = [
  'period', 'seed', 'grassDensity', 'flowerDensity', 'flowerSize', 'heroes', 'heroSize', 'colorWeights',
  'skyline', 'horizon', 'butterflies', 'petals', 'pollen', 'fireflies', 'quality',
];

export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

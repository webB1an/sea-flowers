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
  low: { grass: 26000, flowers: 0.5, samples: 0, dofTaps: 16, treeline: 700 },
  medium: { grass: 48000, flowers: 0.75, samples: 4, dofTaps: 24, treeline: 1000 },
  high: { grass: 80000, flowers: 1, samples: 4, dofTaps: 36, treeline: 1400 },
  ultra: { grass: 130000, flowers: 1.3, samples: 8, dofTaps: 48, treeline: 1800 },
};

export const WEATHERS = ['clear', 'partly', 'overcast', 'fog', 'rain'];

const clone = (o) => JSON.parse(JSON.stringify(o));

export function resolveConfig(o = {}) {
  const c = { ...clone(DEFAULTS), ...o };
  c.colors = { ...DEFAULTS.colors, ...(o.colors || {}) };
  c.colorWeights = { ...DEFAULTS.colorWeights, ...(o.colorWeights || {}) };
  for (const k of Object.keys(c)) if (!(k in DEFAULTS)) delete c[k];
  c.period = Math.max(2, +c.period || DEFAULTS.period);
  if (!QUALITY[c.quality]) c.quality = DEFAULTS.quality;
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

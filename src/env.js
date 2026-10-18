// 时间 + 天气 → 光照、天空、雾、调色参数
import * as THREE from 'three';
import { WEATHERS } from './config.js';

const lin = (hex) => { const c = new THREE.Color(hex); return [c.r, c.g, c.b]; };
const lerp = (a, b, k) => a + (b - a) * k;
const lerp3 = (a, b, k) => [lerp(a[0], b[0], k), lerp(a[1], b[1], k), lerp(a[2], b[2], k)];
const mul3 = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const lum = (c) => 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
const grey = (c, k) => lerp3(c, [lum(c), lum(c), lum(c)], k);
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

// 晴天下，按太阳高度角（度）插值的关键帧
const KEYS = [
  { e: -26, zen: '#010207', hor: '#070b18', glow: '#000000', glowI: 0, sun: '#000000', sunI: 0, amb: 1.0, sat: 0.72, tint: [0.9, 0.96, 1.08], ex: 2.3 },
  { e: -11, zen: '#040a1e', hor: '#1b2645', glow: '#3a3466', glowI: 0.25, sun: '#000000', sunI: 0, amb: 1.6, sat: 0.78, tint: [0.92, 0.96, 1.06], ex: 2.0 },
  { e: -4.5, zen: '#14275a', hor: '#a26c74', glow: '#ff8c5a', glowI: 0.9, sun: '#ff6a30', sunI: 0, amb: 2.2, sat: 0.95, tint: [1.0, 0.96, 1.0], ex: 1.5 },
  { e: 0, zen: '#1f3d7e', hor: '#f0965e', glow: '#ff8a40', glowI: 1.5, sun: '#ff7a36', sunI: 1.1, amb: 1.5, sat: 1.08, tint: [1.05, 0.97, 0.92], ex: 1.15 },
  { e: 5, zen: '#3b73a8', hor: '#f5b77a', glow: '#ffa95a', glowI: 1.0, sun: '#ffa65a', sunI: 2.5, amb: 0.9, sat: 1.1, tint: [1.03, 1.0, 0.95], ex: 1.0 },
  { e: 14, zen: '#336fb8', hor: '#d6dbdc', glow: '#ffd7a6', glowI: 0.75, sun: '#ffd8a8', sunI: 2.9, amb: 1.0, sat: 1.06, tint: [1.04, 1.0, 0.95], ex: 1.0 },
  { e: 40, zen: '#2c68c2', hor: '#bad2e8', glow: '#fff6ea', glowI: 0.6, sun: '#fff6ec', sunI: 3.3, amb: 1.0, sat: 1.0, tint: [1.0, 1.0, 1.0], ex: 1.0 },
].map((k) => ({ ...k, zen: lin(k.zen), hor: lin(k.hor), glow: lin(k.glow), sun: lin(k.sun) }));

function keyAt(e) {
  if (e <= KEYS[0].e) return KEYS[0];
  for (let i = 0; i < KEYS.length - 1; i++) {
    const a = KEYS[i], b = KEYS[i + 1];
    if (e <= b.e) {
      const k = smooth(0, 1, (e - a.e) / (b.e - a.e));
      const o = {};
      for (const f of Object.keys(a)) o[f] = Array.isArray(a[f]) ? lerp3(a[f], b[f], k) : lerp(a[f], b[f], k);
      return o;
    }
  }
  return KEYS[KEYS.length - 1];
}

// 日出 6:00、日落 18:30。镜头朝 -Z：早上太阳在身后，正午在右侧高处，傍晚在正前方偏左（逆光）
export function sunDirection(hour) {
  let h = ((hour % 24) + 24) % 24;
  let a, elev;
  if (h >= 6 && h <= 18.5) {
    const d = (h - 6) / 12.5;
    a = d * Math.PI;
    elev = Math.sin(d * Math.PI) * 62;
  } else {
    const n = ((h - 18.5 + 24) % 24) / 11.5;
    a = Math.PI + n * Math.PI;
    elev = -Math.sin(n * Math.PI) * 42;
  }
  const hx = Math.sin(a) - 0.32 * Math.pow(Math.sin(a / 2), 2), hz = Math.cos(a);
  const hl = Math.hypot(hx, hz) || 1;
  const er = (elev * Math.PI) / 180;
  return { dir: new THREE.Vector3((hx / hl) * Math.cos(er), Math.sin(er), (hz / hl) * Math.cos(er)), elev };
}

const MOON_DIR = new THREE.Vector3(-0.42, 0.42, -0.8).normalize();

function clearEnv(hour) {
  const { dir, elev } = sunDirection(hour);
  const k = keyAt(elev);
  const night = smooth(-2, -9, elev);
  const sunUp = smooth(-1.5, 3, elev);
  const moonCol = lin('#b4c2f0');
  const lightDir = new THREE.Vector3().copy(dir).lerp(MOON_DIR, night).normalize();
  const lightCol = add3(mul3(k.sun, k.sunI * sunUp), mul3(moonCol, 0.16 * night));
  const skyAmb = add3(mul3(lerp3(k.hor, k.zen, 0.55), 0.9 * k.amb), mul3(lin('#1e2a44'), 0.6 * night));
  return {
    sunDir: dir, elev, lightDir,
    lightCol, zen: k.zen, hor: k.hor,
    glow: mul3(k.glow, k.glowI), sunDisc: mul3(k.sun, 30 * sunUp + 4 * smooth(-3, 0, elev)),
    skyAmb, groundAmb: add3(mul3(skyAmb, 0.32), mul3(lin('#2f4a1c'), 0.12 * sunUp)),
    fogMul: 1, cloudCover: 0.07, cloudShadow: 0.65, sunVis: 1,
    cloudLit: add3(mul3(k.sun, k.sunI * 0.28 * sunUp), mul3(skyAmb, 1.15)),
    cloudDark: add3(mul3(skyAmb, 0.55), mul3(k.hor, 0.25)),
    stars: smooth(-7, -15, elev), moon: smooth(-3, -10, elev),
    cityLights: smooth(4, -6, elev),
    sat: k.sat, tint: k.tint, contrast: 1.05, ex: k.ex, bloom: 1,
    rain: 0, wet: 0, pollen: sunUp, butterflies: smooth(4, 12, elev), fireflies: smooth(-3, -9, elev),
  };
}

function applyWeather(env, w) {
  const e = { ...env };
  const dim = (c, s, g) => mul3(grey(c, g), s);
  if (w === 'clear') return e;
  if (w === 'partly') {
    e.cloudCover = 0.52; e.cloudShadow = 0.72; e.lightCol = mul3(e.lightCol, 0.95);
    return e;
  }
  if (w === 'overcast') {
    e.cloudCover = 0.97; e.cloudShadow = 0.15;
    e.zen = dim(e.zen, 0.78, 0.82); e.hor = dim(e.hor, 0.85, 0.8);
    e.skyAmb = mul3(grey(e.skyAmb, 0.6), 1.25); e.groundAmb = mul3(e.groundAmb, 1.15);
    e.lightCol = mul3(e.lightCol, 0.12); e.glow = mul3(e.glow, 0.25); e.sunVis = 0;
    e.cloudLit = dim(e.cloudLit, 0.85, 0.75); e.cloudDark = dim(e.cloudDark, 0.8, 0.7);
    e.sat *= 0.86; e.contrast = 0.97; e.stars = 0; e.moon = 0;
    e.pollen *= 0.3; e.butterflies *= 0.4; e.cityLights = Math.max(e.cityLights, 0.08);
    return e;
  }
  if (w === 'fog') {
    e.fogMul = 9; e.cloudCover = 0.75; e.cloudShadow = 0.1;
    const fogTone = lerp3(e.hor, [lum(e.hor) * 1.05, lum(e.hor) * 1.06, lum(e.hor) * 1.08], 0.6);
    e.hor = lerp3(e.hor, fogTone, 0.7); e.zen = lerp3(e.zen, e.hor, 0.65);
    e.skyAmb = mul3(lerp3(e.skyAmb, e.hor, 0.5), 1.25);
    e.lightCol = mul3(e.lightCol, 0.4); e.glow = mul3(e.glow, 1.4); e.sunVis = 0.35;
    e.sat *= 0.82; e.contrast = 0.95; e.stars = 0; e.moon *= 0.2; e.bloom = 1.4;
    e.butterflies *= 0.3;
    return e;
  }
  if (w === 'rain') {
    e.cloudCover = 1; e.cloudShadow = 0.05; e.fogMul = 3.5;
    e.zen = dim(e.zen, 0.5, 0.85); e.hor = dim(e.hor, 0.62, 0.8);
    e.skyAmb = mul3(grey(e.skyAmb, 0.65), 0.95); e.groundAmb = mul3(e.groundAmb, 0.9);
    e.lightCol = mul3(e.lightCol, 0.03); e.glow = mul3(e.glow, 0.15); e.sunVis = 0;
    e.cloudLit = dim(e.cloudLit, 0.55, 0.85); e.cloudDark = dim(e.cloudDark, 0.5, 0.8);
    e.sat *= 0.86; e.contrast = 0.98; e.stars = 0; e.moon = 0;
    e.rain = 1; e.wet = 1; e.pollen = 0; e.butterflies = 0; e.fireflies = 0;
    e.cityLights = Math.max(e.cityLights, 0.15);
    return e;
  }
  return e;
}

function blendEnvs(list) {
  const out = {};
  const total = list.reduce((s, [, w]) => s + w, 0) || 1;
  for (const [env, w] of list) {
    const k = w / total;
    for (const f of Object.keys(env)) {
      const v = env[f];
      if (v instanceof THREE.Vector3) { out[f] = out[f] || new THREE.Vector3(); out[f].addScaledVector(v, k); }
      else if (Array.isArray(v)) { out[f] = out[f] ? add3(out[f], mul3(v, k)) : mul3(v, k); }
      else out[f] = (out[f] || 0) + v * k;
    }
  }
  out.lightDir.normalize(); out.sunDir.normalize();
  return out;
}

// weights: { clear: 1 } 或 { clear: 0.3, rain: 0.7 }（天气切换时平滑过渡）
export function computeEnv(hour, weights) {
  const base = clearEnv(hour);
  const list = WEATHERS.filter((w) => (weights[w] || 0) > 0.001).map((w) => [applyWeather(base, w), weights[w]]);
  return blendEnvs(list.length ? list : [[base, 1]]);
}

// 自动天气：按日期和时段确定性地选取，每 3 小时可能变化
const AUTO_TABLE = [['clear', 0.42], ['partly', 0.26], ['overcast', 0.12], ['fog', 0.08], ['rain', 0.12]];
function hashInt(n) { let h = Math.imul(n ^ 0x9e3779b9, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16; return (h >>> 0) / 4294967296; }
function pickAuto(slot) {
  let x = hashInt(slot);
  for (const [w, p] of AUTO_TABLE) { if ((x -= p) <= 0) return w; }
  return 'clear';
}
export function autoWeather(date = new Date()) {
  const dayIndex = Math.floor((date.getTime() - date.getTimezoneOffset() * 60000) / 86400000);
  const h = date.getHours() + date.getMinutes() / 60;
  const slot = dayIndex * 8 + Math.floor(h / 3);
  const cur = pickAuto(slot), prev = pickAuto(slot - 1);
  const k = smooth(0, 0.5, h % 3); // 每个时段开头半小时内渐变
  const w = {};
  w[prev] = (w[prev] || 0) + (1 - k);
  w[cur] = (w[cur] || 0) + k;
  // 状态栏显示“当前主导天气”，过渡期前 15 分钟实际是 prev 占优
  return { weights: w, name: k >= 0.5 ? cur : prev };
}

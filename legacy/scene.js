// 波斯菊花海 —— 程序化场景。所有运动都是周期 T 的整数倍频率，保证首尾帧无缝循环。
// 浏览器与 Node（@napi-rs/canvas）共用同一份绘制代码。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.FlowerScene = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  const TAU = Math.PI * 2;

  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6d2b79f5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function hash2(i, j, s) {
    let h = Math.imul(i, 374761393) + Math.imul(j, 668265263) + Math.imul(s, 1442695041);
    h = Math.imul(h ^ (h >>> 13), 1274126177);
    h ^= h >>> 16;
    return (h >>> 0) / 4294967296;
  }

  // 值噪声，可选 x 方向周期（用于可平铺纹理）
  function vnoise(x, y, s, px) {
    const xi = Math.floor(x), yi = Math.floor(y);
    const xf = x - xi, yf = y - yi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
    const wx = (a) => (px ? ((a % px) + px) % px : a);
    const a = hash2(wx(xi), yi, s), b = hash2(wx(xi + 1), yi, s);
    const c = hash2(wx(xi), yi + 1, s), d = hash2(wx(xi + 1), yi + 1, s);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }

  function fbm(x, y, s, px, oct = 4) {
    let sum = 0, amp = 0.5, norm = 0;
    for (let o = 0; o < oct; o++) {
      sum += amp * vnoise(x, y, s + o * 17, px);
      norm += amp; amp *= 0.5; x *= 2; y *= 2; if (px) px *= 2;
    }
    return sum / norm;
  }

  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const mix = (a, b, k) => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];
  const rgb = (c, a = 1) => `rgba(${c[0] | 0},${c[1] | 0},${c[2] | 0},${a})`;
  const wrap01 = (x) => x - Math.floor(x);

  const FLOWER_COLORS = {
    magenta: { base: '#9e0050', mid: '#d6127a', tip: '#ea3a93', vein: 'rgba(110,0,55,0.16)', edge: 'rgba(90,0,45,0.35)' },
    crimson: { base: '#4f031c', mid: '#8a0a34', tip: '#a8164a', vein: 'rgba(40,0,15,0.18)', edge: 'rgba(40,0,12,0.38)' },
    pink: { base: '#c64886', mid: '#ee9fc3', tip: '#f8cfe0', vein: 'rgba(170,50,105,0.13)', edge: 'rgba(160,50,100,0.30)' },
    white: { base: '#e2b3c8', mid: '#f6eff1', tip: '#ffffff', vein: 'rgba(160,130,145,0.16)', edge: 'rgba(130,110,120,0.32)' },
  };

  // 所有可配置项及默认值（网页设置面板与 render.js --config 共用）
  const DEFAULTS = {
    period: 15,          // 循环时长（秒）
    seed: 1011,          // 随机种子：决定花草布局
    wind: 1,             // 风力（摆动幅度）
    windSpeed: 1,        // 风速（阵风频率）
    grassDensity: 1,     // 草丛密度
    flowerDensity: 1,    // 花朵密度
    flowerSize: 1,       // 花田花朵大小
    heroes: true,        // 前景大花
    heroSize: 1,         // 前景大花大小
    colors: { white: '#f6eff1', pink: '#ee9fc3', magenta: '#d6127a', crimson: '#8a0a34' },
    colorWeights: { white: 0.38, pink: 0.27, magenta: 0.22, crimson: 0.13 },
    skyline: true,       // 城市背景
    horizon: 0.385,      // 地平线高度（占画面比例）
    haze: 1,             // 远处雾气
    clouds: true,        // 天空薄云
    cloudShadows: true,  // 花田云影
    foreground: true,    // 前景虚化草
    butterflies: 2,      // 蝴蝶数量
    petals: 5,           // 飘落花瓣数量
    pollen: 1,           // 光点 / 绒絮密度
  };

  function resolveConfig(opts) {
    const c = { ...DEFAULTS, ...opts };
    c.colors = { ...DEFAULTS.colors, ...(opts && opts.colors) };
    c.colorWeights = { ...DEFAULTS.colorWeights, ...(opts && opts.colorWeights) };
    c.period = Math.max(1, +c.period || DEFAULTS.period);
    return c;
  }

  // 由主色推导花瓣渐变；未改动的颜色沿用手调色板
  function flowerPalette(name, mainHex) {
    if (mainHex.toLowerCase() === DEFAULTS.colors[name]) return FLOWER_COLORS[name];
    const m = hex(mainHex);
    const lum = (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) / 255;
    const base = lum > 0.8 ? mix(m, [200, 140, 170], 0.55) : mix(m, [0, 0, 0], 0.42);
    const dark = mix(m, [0, 0, 0], 0.6);
    return {
      base: rgb(base), mid: rgb(m), tip: rgb(mix(m, [255, 255, 255], 0.28)),
      vein: rgb(dark, 0.16), edge: rgb(dark, 0.34),
    };
  }

  const TUFT_PALETTES = [
    { dark: hex('#1d3a14'), mid: hex('#30561f'), light: hex('#4c772d') }, // 背光
    { dark: hex('#2a4d1b'), mid: hex('#4c7d2e'), light: hex('#7cad48') }, // 普通
    { dark: hex('#3a6424'), mid: hex('#6a9c3d'), light: hex('#a8d266') }, // 受光
  ];

  function createScene(opts) {
    const W = opts.width, H = opts.height;
    const makeCanvas = opts.makeCanvas;
    const cfg = resolveConfig(opts);
    const T = cfg.period;
    const seed = Math.floor(+cfg.seed) || 0;
    const showSkyline = !!cfg.skyline;
    const S = Math.min(H / 1080, W / 1920 * 1.25);
    const rng = mulberry32(seed);
    const hz = Math.min(0.7, Math.max(0.15, +cfg.horizon));
    const horizonY = Math.round(H * hz);
    const fieldH = H - horizonY;
    // 原始构图按地平线 0.385 设计；把花田内的纵向位置映射到当前地平线
    const mapY = (f) => hz + ((f - 0.385) / 0.615) * (1 - hz);

    // 动作原本按 15 秒设计（每 15 秒 n 次）；换算成"每个循环整数次"，任何时长都首尾无缝
    const cyc = (n) => Math.max(1, Math.round((n * T) / 15));
    const windCyc = [1, 2, 3].map((n) => Math.max(1, Math.round((n * T * cfg.windSpeed) / 15)));

    const PAL = {};
    for (const name of Object.keys(FLOWER_COLORS)) PAL[name] = flowerPalette(name, cfg.colors[name]);
    const weights = Object.keys(FLOWER_COLORS).map((n) => [n, Math.max(0, +cfg.colorWeights[n] || 0)]);
    const wSum = weights.reduce((s, [, w]) => s + w, 0);
    const pickColor = (r) => {
      if (wSum <= 0) return 'white';
      let x = r() * wSum;
      for (const [name, w] of weights) { if ((x -= w) <= 0 && w > 0) return name; }
      return weights.filter(([, w]) => w > 0).pop()[0];
    };

    // 风：向右传播的行波叠加，时间频率均为 1/T 的整数倍
    const wind = (x, t) => {
      const u = x / W, p = TAU * t / T;
      return 0.55 * Math.sin(windCyc[0] * p - u * TAU * 1.1)
        + 0.30 * Math.sin(windCyc[1] * p - u * TAU * 2.3 + 1.3)
        + 0.15 * Math.sin(windCyc[2] * p - u * TAU * 3.7 + 2.1);
    };
    const WS = Math.max(0, +cfg.wind);

    // ---------- 天空 ----------
    const sky = makeCanvas(W, horizonY + Math.ceil(H * 0.06));
    {
      const g = sky.getContext('2d');
      let gr = g.createLinearGradient(0, 0, 0, sky.height);
      gr.addColorStop(0, '#93b6d0');
      gr.addColorStop(0.5, '#c4d6e1');
      gr.addColorStop(1, '#e6ece9');
      g.fillStyle = gr; g.fillRect(0, 0, W, sky.height);
      const sx = W * 0.8, sy = -H * 0.06;
      gr = g.createRadialGradient(sx, sy, 0, sx, sy, W * 0.75);
      gr.addColorStop(0, 'rgba(255,249,232,0.85)');
      gr.addColorStop(0.35, 'rgba(255,247,228,0.35)');
      gr.addColorStop(1, 'rgba(255,247,228,0)');
      g.fillStyle = gr; g.fillRect(0, 0, W, sky.height);
    }

    // 可平铺的薄云带，随时间整体右移一个屏宽
    const clouds = makeCanvas(W, horizonY);
    {
      const g = clouds.getContext('2d');
      const r = mulberry32(seed + 3);
      for (let i = 0; i < 46; i++) {
        const x = r() * W, y = horizonY * (0.05 + r() * 0.7);
        const rx = S * (90 + r() * 260), ry = rx * (0.18 + r() * 0.16);
        const a = 0.06 + r() * 0.12;
        for (const ox of [-W, 0, W]) {
          g.save();
          g.translate(x + ox, y); g.scale(1, ry / rx);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, rx);
          gr.addColorStop(0, `rgba(255,255,255,${a})`);
          gr.addColorStop(1, 'rgba(255,255,255,0)');
          g.fillStyle = gr; g.fillRect(-rx, -rx, rx * 2, rx * 2);
          g.restore();
        }
      }
    }

    // ---------- 远景（城市剪影、树线）与地面底色 ----------
    const land = makeCanvas(W, H);
    {
      const g = land.getContext('2d');
      const r = mulberry32(seed + 5);
      if (showSkyline) {
        const layers = [
          { col: hex('#cbd6dc'), hMin: 0.02, hMax: 0.19, shift: 0 },
          { col: hex('#b4c3cb'), hMin: 0.015, hMax: 0.12, shift: 9 },
        ];
        layers.forEach((L, li) => {
          let x = -S * 20;
          while (x < W + S * 20) {
            const bw = S * (14 + r() * 50);
            const cluster = 0.2 + 0.8 * fbm(x / W * 3 + L.shift, li * 5, seed + 40, 0, 3);
            const bh = H * (L.hMin + (L.hMax - L.hMin) * Math.pow(r(), 1.8) * cluster);
            const top = horizonY - bh;
            const col = mix(L.col, hex('#dfe6e9'), r() * 0.35);
            g.fillStyle = rgb(col);
            g.fillRect(x, top, bw, bh + 4);
            g.fillStyle = 'rgba(255,255,255,0.08)';
            g.fillRect(x, top, bw * 0.38, bh + 4);
            if (bh > H * 0.05) { // 楼层纹理
              g.fillStyle = 'rgba(120,135,145,0.07)';
              for (let fy = top + S * 5; fy < horizonY; fy += S * 5) g.fillRect(x + S * 2, fy, bw - S * 4, Math.max(1, S));
            }
            if (bh > H * 0.12 && r() < 0.25) { // 尖顶
              g.fillStyle = rgb(L.col);
              g.beginPath(); g.moveTo(x + bw * 0.2, top); g.lineTo(x + bw * 0.5, top - bw * 0.7); g.lineTo(x + bw * 0.8, top); g.fill();
            }
            x += bw + (r() < 0.3 ? S * r() * 34 : -S * r() * 6);
          }
        });
        const mg = g.createLinearGradient(0, horizonY - H * 0.16, 0, horizonY);
        mg.addColorStop(0, 'rgba(226,232,230,0)');
        mg.addColorStop(1, 'rgba(226,232,230,0.85)');
        g.fillStyle = mg; g.fillRect(0, horizonY - H * 0.16, W, H * 0.16);
      }
      // 树线 / 芦苇
      [[hex('#9aa89b'), 30], [hex('#7d8f7d'), 20], [hex('#66796a'), 9]].forEach(([col, hgt], li) => {
        for (let x = -20 * S; x < W + 20 * S; x += S * (2 + r() * 4)) {
          const n = fbm(x / W * 9 + li * 4, li * 3, seed + 60, 0, 4);
          const hh = S * hgt * Math.pow(Math.max(0, n * 1.5 - 0.35), 1.5) * (0.6 + 0.6 * r());
          if (hh < S) continue;
          g.fillStyle = rgb(mix(col, hex('#c9d3cf'), r() * 0.2));
          const rr = S * (3 + r() * 5);
          g.beginPath(); g.ellipse(x, horizonY + S * 3 - hh, rr, rr * (0.8 + r() * 0.5), 0, 0, TAU); g.fill();
          g.fillRect(x - rr, horizonY + S * 3 - hh, rr * 2, hh);
        }
      });
      const gg = g.createLinearGradient(0, horizonY, 0, H);
      gg.addColorStop(0, '#7f9871');
      gg.addColorStop(0.12, '#5f8443');
      gg.addColorStop(0.5, '#3d6a28');
      gg.addColorStop(1, '#27461a');
      g.fillStyle = gg; g.fillRect(0, horizonY + S * 4, W, H - horizonY);
    }

    // ---------- 羽状叶草丛精灵 ----------
    function drawTuft(g, r, w, h, pal, lwMin) {
      const bx = w / 2, by = h;
      const lw = Math.max(lwMin, h * 0.0075);
      const stems = 4 + Math.floor(r() * 4);
      for (let s = 0; s < stems; s++) {
        const ang = (r() - 0.5) * 1.0;
        const len = h * (0.5 + 0.47 * r());
        const tx = bx + Math.sin(ang) * len * 0.9, ty = by - Math.cos(ang) * len;
        const cx = bx + Math.sin(ang) * len * 0.2 + (r() - 0.5) * len * 0.15, cy = by - len * 0.55;
        g.strokeStyle = rgb(mix(pal.dark, pal.mid, 0.4));
        g.lineWidth = lw * 1.4; g.lineCap = 'round';
        g.beginPath(); g.moveTo(bx, by); g.quadraticCurveTo(cx, cy, tx, ty); g.stroke();
        const nodes = 5 + Math.floor(r() * 5);
        for (let k = 1; k <= nodes; k++) {
          const p = k / (nodes + 0.6);
          const ip = 1 - p;
          const px = ip * ip * bx + 2 * ip * p * cx + p * p * tx;
          const py = ip * ip * by + 2 * ip * p * cy + p * p * ty;
          const dx = 2 * ip * (cx - bx) + 2 * p * (tx - cx), dy = 2 * ip * (cy - by) + 2 * p * (ty - cy);
          const ta = Math.atan2(dx, -dy); // 与竖直向上的夹角
          for (const side of [-1, 1]) {
            if (r() > 0.85) continue;
            const L = len * (0.16 + 0.2 * r()) * (1 - 0.45 * p);
            const a = ta + side * (0.45 + 0.55 * r());
            const ex = px + Math.sin(a) * L, ey = py - Math.cos(a) * L;
            const mx = px + Math.sin(a - side * 0.25) * L * 0.55, my = py - Math.cos(a - side * 0.25) * L * 0.55;
            const lk = Math.min(1, p * 0.9 + r() * 0.35);
            g.strokeStyle = rgb(lk < 0.5 ? mix(pal.dark, pal.mid, lk * 2) : mix(pal.mid, pal.light, (lk - 0.5) * 2));
            g.lineWidth = lw;
            g.beginPath(); g.moveTo(px, py); g.quadraticCurveTo(mx, my, ex, ey); g.stroke();
            // 细分叉
            const forks = 1 + Math.floor(r() * 2);
            for (let f = 0; f < forks; f++) {
              const q = 0.35 + r() * 0.4;
              const fx = px + (ex - px) * q, fy = py + (ey - py) * q;
              const fa = a + (r() < 0.5 ? -1 : 1) * (0.35 + r() * 0.4);
              const fl = L * (0.35 + r() * 0.3);
              g.lineWidth = lw * 0.85;
              g.beginPath(); g.moveTo(fx, fy); g.lineTo(fx + Math.sin(fa) * fl, fy - Math.cos(fa) * fl); g.stroke();
            }
          }
        }
      }
    }

    const BAND_H = [12, 22, 38, 64, 105, 165, 260, 380].map((v) => Math.ceil(v * S));
    const SHAPES = 5;
    const tuftSprites = BAND_H.map((bh, bi) => TUFT_PALETTES.map((pal, pi) => {
      const arr = [];
      for (let s = 0; s < SHAPES; s++) {
        const r = mulberry32(seed + 1000 + bi * 100 + pi * 10 + s);
        const w = Math.ceil(bh * 1.5), h = bh;
        const c = makeCanvas(w, h);
        drawTuft(c.getContext('2d'), r, w, h, pal, 0.55);
        arr.push(c);
      }
      return arr;
    }));

    // ---------- 花朵与花苞精灵 ----------
    function petalPath(g, len, wt, r) {
      const w0 = len * 0.05;
      g.beginPath();
      g.moveTo(-w0, 0);
      g.bezierCurveTo(-len * 0.2, -len * 0.3, -wt * 1.1, -len * 0.62, -wt, -len * 0.9);
      const teeth = 3;
      for (let k = 0; k < teeth; k++) {
        const x0 = -wt + (2 * wt * k) / teeth, x1 = -wt + (2 * wt * (k + 1)) / teeth, xm = (x0 + x1) / 2, q = (x1 - x0) * 0.22;
        const peak = -len * (0.96 + (k === 1 ? 0.04 : 0) + r() * 0.03);
        const valley = k === teeth - 1 ? -len * 0.9 : -len * (0.89 + r() * 0.03);
        g.quadraticCurveTo(xm - q, peak, xm, peak);
        g.quadraticCurveTo(xm + q, peak, x1, valley);
      }
      g.bezierCurveTo(wt * 1.1, -len * 0.62, len * 0.2, -len * 0.3, w0, 0);
      g.closePath();
    }

    function makeFlower(R, colName, r) {
      const C = PAL[colName];
      const size = Math.ceil(R * 2.3) + 2;
      const c = makeCanvas(size, size);
      const g = c.getContext('2d');
      g.translate(size / 2, size / 2);
      const n = 8, base = r() * TAU;
      // 交替绘制先后层，形成花瓣互相压叠的层次
      const order = [0, 2, 4, 6, 1, 3, 5, 7];
      for (const i of order) {
        const a = base + (i * TAU) / n + (r() - 0.5) * 0.18;
        const len = R * (0.84 + 0.16 * r());
        const wt = len * (0.27 + 0.05 * r());
        g.save(); g.rotate(a);
        petalPath(g, len, wt, r);
        if (R > 10) { g.shadowColor = 'rgba(40,0,20,0.28)'; g.shadowBlur = R * 0.06; }
        const gr = g.createLinearGradient(0, 0, 0, -len);
        gr.addColorStop(0, C.base); gr.addColorStop(0.3, C.mid); gr.addColorStop(1, C.tip);
        g.fillStyle = gr; g.fill();
        g.shadowColor = 'rgba(0,0,0,0)'; g.shadowBlur = 0;
        // 中脉高光
        const hl = g.createLinearGradient(-wt, 0, wt, 0);
        hl.addColorStop(0, 'rgba(255,255,255,0)'); hl.addColorStop(0.45, 'rgba(255,255,255,0.10)'); hl.addColorStop(1, 'rgba(0,0,0,0.06)');
        g.fillStyle = hl; g.fill();
        g.strokeStyle = C.edge; g.lineWidth = Math.max(0.4, R * 0.01); g.stroke();
        if (R > 14) {
          g.strokeStyle = C.vein; g.lineWidth = Math.max(0.35, R * 0.005);
          for (let v = -3; v <= 3; v++) {
            g.beginPath();
            g.moveTo(v * R * 0.006, -R * 0.14);
            g.quadraticCurveTo(v * wt * 0.22, -len * 0.5, v * wt * 0.26, -len * (0.8 + r() * 0.06));
            g.stroke();
          }
        }
        g.restore();
      }
      const cr = R * 0.18;
      const gr = g.createRadialGradient(-cr * 0.2, -cr * 0.2, 0, 0, 0, cr);
      gr.addColorStop(0, '#ffe24a'); gr.addColorStop(0.65, '#f4bb0c'); gr.addColorStop(1, '#c98800');
      g.fillStyle = gr; g.beginPath(); g.arc(0, 0, cr, 0, TAU); g.fill();
      if (R > 10) {
        const dots = Math.min(70, Math.floor(R * 0.9));
        for (let k = 0; k < dots; k++) {
          const a = r() * TAU, d = cr * (0.15 + 0.8 * Math.sqrt(r()));
          g.fillStyle = r() < 0.7 ? '#ffe55c' : '#e8a400';
          g.beginPath(); g.arc(Math.cos(a) * d, Math.sin(a) * d, cr * 0.09, 0, TAU); g.fill();
        }
        for (let k = 0; k < dots * 0.45; k++) {
          const a = r() * TAU, d = cr * (0.55 + 0.45 * r());
          g.fillStyle = '#3a2508';
          g.beginPath(); g.arc(Math.cos(a) * d, Math.sin(a) * d, cr * 0.055, 0, TAU); g.fill();
        }
      }
      return c;
    }

    const BUD_TYPES = {
      crimson: ['#c2386b', '#5c0a27'],
      green: ['#d3e09a', '#6a8a3c'],
      blush: ['#fdeee4', '#d8a596'],
    };
    function makeBud(R, type, r) {
      const [hi, lo] = BUD_TYPES[type];
      const w = Math.ceil(R * 2.4), h = Math.ceil(R * 2.4);
      const c = makeCanvas(w, h);
      const g = c.getContext('2d');
      g.translate(w / 2, h * 0.82); // 锚点：花苞底部
      g.fillStyle = '#6f9a43';
      for (let k = 0; k < 8; k++) { // 萼片
        const a = (k / 8) * TAU * 0.5 + Math.PI * 0.75 + (r() - 0.5) * 0.2 - Math.PI * 0.25;
        const L = R * (0.7 + 0.4 * r());
        g.beginPath();
        g.moveTo(-R * 0.08, 0); g.lineTo(Math.cos(a) * L, Math.sin(a) * L - R * 0.2); g.lineTo(R * 0.08, 0);
        g.fill();
      }
      const gr = g.createRadialGradient(-R * 0.2, -R * 0.75, R * 0.05, 0, -R * 0.45, R * 0.6);
      gr.addColorStop(0, hi); gr.addColorStop(1, lo);
      g.fillStyle = gr;
      g.beginPath(); g.ellipse(0, -R * 0.45, R * 0.42, R * 0.5, 0, 0, TAU); g.fill();
      g.strokeStyle = 'rgba(0,0,0,0.14)'; g.lineWidth = Math.max(0.5, R * 0.03);
      for (let k = -2; k <= 2; k++) {
        g.beginPath(); g.moveTo(k * R * 0.06, -R * 0.02); g.quadraticCurveTo(k * R * 0.22, -R * 0.45, k * R * 0.05, -R * 0.93); g.stroke();
      }
      return { canvas: c, ax: w / 2, ay: h * 0.82 };
    }

    const FLOWER_MIPS = [6, 16, 40, 100].map((v) => Math.ceil(v * S));
    const flowerSprites = {};
    for (const name of Object.keys(FLOWER_COLORS)) {
      flowerSprites[name] = FLOWER_MIPS.map((R, mi) => [0, 1, 2].map((v) => ({
        canvas: makeFlower(R, name, mulberry32(seed + 5000 + mi * 31 + v * 7 + name.length * 101)),
        R,
      })));
    }
    const budSprites = {};
    for (const type of Object.keys(BUD_TYPES)) {
      budSprites[type] = [8, 24].map((R, i) => ({ ...makeBud(Math.ceil(R * S), type, mulberry32(seed + 7000 + i)), R: Math.ceil(R * S) }));
    }

    // ---------- 花田布局 ----------
    const tuftH = (v) => S * (7 + 250 * Math.pow(v, 1.1));
    const items = [];
    {
      const gd = Math.min(2.5, Math.max(0.3, +cfg.grassDensity));
      const fd = Math.max(0, +cfg.flowerDensity);
      const fs = Math.max(0.1, +cfg.flowerSize);
      let v = 0.004;
      while (v < 1.12) {
        const hRow = tuftH(Math.min(v, 1.05));
        const yRow = horizonY + v * fieldH;
        let x = -hRow * rng();
        while (x < W + hRow) {
          const h = hRow * (0.8 + 0.4 * rng());
          const y = yRow + (rng() - 0.5) * hRow * 0.12;
          const n = fbm(x / W * 2.6, v * 3.2, seed + 90, 0, 3);
          const li = Math.max(0, Math.min(2, Math.floor(n * 3.4 - 0.2 + (rng() - 0.5) * 0.9)));
          let bi = 0;
          while (bi < BAND_H.length - 1 && BAND_H[bi] < h) bi++;
          items.push({
            kind: 'tuft', x, y, h, bi, li, sh: Math.floor(rng() * SHAPES), flip: rng() < 0.5 ? -1 : 1,
            fl: cyc(3 + Math.floor(rng() * 6)), fp: rng() * TAU,
          });
          // 每丛草上开花的期望数量 = 0.045 × 花朵密度
          const pf = 0.045 * fd;
          const nf = Math.floor(pf) + (rng() < pf - Math.floor(pf) ? 1 : 0);
          for (let k = 0; k < nf; k++) {
            const r = h * 0.13 * fs * (0.8 + 0.45 * rng());
            items.push({
              kind: 'flower', x: x + (rng() - 0.5) * h * (0.5 + 0.3 * k), y: y + 0.5, h, r, col: pickColor(rng), var: Math.floor(rng() * 3),
              ls: h * (0.95 + 0.4 * rng()), rot: (rng() - 0.5) * 0.9, sq: 0.45 + 0.55 * rng(),
              fl: cyc(3 + Math.floor(rng() * 5)), fp: rng() * TAU,
            });
          }
          if (nf === 0 && v > 0.22 && rng() < 0.03 * Math.min(fd, 2)) {
            const types = ['crimson', 'green', 'green', 'blush'];
            items.push({
              kind: 'bud', x: x + (rng() - 0.5) * h * 0.5, y: y + 0.5, h, r: h * 0.05 * fs * (0.8 + 0.4 * rng()),
              type: types[Math.floor(rng() * 4)], ls: h * (0.9 + 0.35 * rng()), rot: (rng() - 0.5) * 0.4,
              fl: cyc(3 + Math.floor(rng() * 5)), fp: rng() * TAU,
            });
          }
          x += (h * (0.3 + 0.28 * rng())) / gd;
        }
        v += (hRow * (0.15 + 0.06 * rng())) / fieldH / gd;
      }
      items.sort((a, b) => a.y - b.y);
    }

    // ---------- 前景主角花 ----------
    const heroes = [
      { col: 'crimson', R: 0.076, hx: 0.805, hy: 0.585, bx: 0.79, rot: 0.28, sq: 0.72, bend: 0.03, ph: 1.1 },
      { col: 'magenta', R: 0.102, hx: 0.70, hy: 0.50, bx: 0.69, rot: -0.14, sq: 0.86, bend: -0.025, ph: 0.0 },
      { col: 'pink', R: 0.058, hx: 0.585, hy: 0.655, bx: 0.60, rot: 0.12, sq: 0.9, bend: 0.02, ph: 2.3 },
    ].filter(() => cfg.heroes).map((hd, i) => {
      const R = Math.max(4, Math.round(hd.R * H * cfg.heroSize));
      return {
        ...hd, R, hy: mapY(hd.hy), sprite: makeFlower(R, hd.col, mulberry32(seed + 9000 + i)),
        leaves: [0.25, 0.42, 0.6].map((p, k) => ({ p, side: k % 2 ? 1 : -1, L: R * (0.9 - 0.15 * k) })),
      };
    });
    const heroBuds = [
      { type: 'crimson', R: 0.026, hx: 0.758, hy: 0.465, bx: 0.745, rot: 0.1, bend: 0.02, ph: 0.6 },
      { type: 'green', R: 0.02, hx: 0.645, hy: 0.735, bx: 0.65, rot: -0.2, bend: -0.015, ph: 1.7 },
      { type: 'blush', R: 0.022, hx: 0.862, hy: 0.705, bx: 0.855, rot: 0.15, bend: 0.02, ph: 2.9 },
    ].filter(() => cfg.heroes).map((b, i) => {
      const R = Math.max(3, Math.round(b.R * H * cfg.heroSize));
      return { ...b, R, hy: mapY(b.hy), sprite: makeBud(R, b.type, mulberry32(seed + 9500 + i)) };
    });

    // ---------- 前景虚化草 ----------
    const foreBlades = [
      { x: 0.015, h: 0.62, blur: 9, ph: 0.4, li: 1, flip: 1 },
      { x: 0.975, h: 0.55, blur: 10, ph: 2.0, li: 2, flip: -1 },
      { x: 0.40, h: 0.30, blur: 12, ph: 1.2, li: 2, flip: 1 },
    ].filter(() => cfg.foreground).map((f, i) => {
      const h = Math.round(f.h * H), w = Math.round(h * 1.5);
      const sharp = makeCanvas(w, h);
      drawTuft(sharp.getContext('2d'), mulberry32(seed + 9900 + i), w, h, TUFT_PALETTES[f.li], 1);
      const pad = Math.ceil(f.blur * S * 3);
      const c = makeCanvas(w + pad * 2, h + pad);
      const g = c.getContext('2d');
      g.filter = `blur(${f.blur * S}px)`;
      g.globalAlpha = 0.92;
      g.drawImage(sharp, pad, pad);
      return { ...f, canvas: c, pad, hpx: h };
    });

    // ---------- 云影纹理（x 方向可平铺） ----------
    const shadow = makeCanvas(192, 64);
    {
      const g = shadow.getContext('2d');
      const img = g.createImageData(192, 64);
      for (let y = 0; y < 64; y++) for (let x = 0; x < 192; x++) {
        const n = fbm((x / 192) * 4, (y / 64) * 2.2, seed + 300, 4, 4);
        const s = Math.max(0, Math.min(1, (n - 0.45) * 3.2));
        const val = 255 * (1 - 0.2 * s);
        const i = (y * 192 + x) * 4;
        img.data[i] = val; img.data[i + 1] = val; img.data[i + 2] = Math.min(255, val + 4); img.data[i + 3] = 255;
      }
      g.putImageData(img, 0, 0);
    }

    // ---------- 柔光点精灵 ----------
    const glow = makeCanvas(64, 64);
    {
      const g = glow.getContext('2d');
      const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      gr.addColorStop(0, 'rgba(255,253,235,1)');
      gr.addColorStop(0.35, 'rgba(255,250,220,0.5)');
      gr.addColorStop(1, 'rgba(255,250,220,0)');
      g.fillStyle = gr; g.fillRect(0, 0, 64, 64);
    }

    const pollen = Math.max(0, +cfg.pollen);
    const pr = mulberry32(seed + 12345);
    const motes = Array.from({ length: Math.round(46 * pollen) }, () => ({
      x: pr(), y: mapY(0.3 + pr() * 0.6), ax: S * (12 + pr() * 40), ay: S * (6 + pr() * 22),
      fx: cyc(1 + Math.floor(pr() * 2)), fy: cyc(1 + Math.floor(pr() * 3)), p1: pr() * TAU, p2: pr() * TAU,
      size: S * (2 + pr() * 4), tw: cyc(2 + Math.floor(pr() * 4)), tp: pr() * TAU,
    }));
    const fluff = Array.from({ length: Math.round(18 * pollen) }, () => ({
      x0: pr(), y: mapY(0.25 + pr() * 0.6), ay: S * (15 + pr() * 40), fy: cyc(2 + Math.floor(pr() * 3)), p: pr() * TAU,
      size: S * (3 + pr() * 4), bokeh: false,
    })).concat(Array.from({ length: Math.round(6 * pollen) }, () => ({
      x0: pr(), y: mapY(0.35 + pr() * 0.55), ay: S * (20 + pr() * 40), fy: cyc(1 + Math.floor(pr() * 2)), p: pr() * TAU,
      size: S * (18 + pr() * 22), bokeh: true,
    })));
    const nPetals = Math.max(0, Math.round(+cfg.petals));
    const petals = Array.from({ length: nPetals }, (_, i) => {
      const col = pickColor(pr);
      return {
        x0: i / nPetals + pr() * 0.1, y: mapY(0.3 + pr() * 0.45), ay: S * (30 + pr() * 50), fy: cyc(1 + Math.floor(pr() * 2)), p: pr() * TAU,
        rot: cyc(2 + Math.floor(pr() * 3)), flip: cyc(5 + Math.floor(pr() * 4)), size: S * (9 + pr() * 6),
        col: rgb(mix(hex(cfg.colors[col]), [255, 255, 255], pr() * 0.3)),
      };
    });
    const br = mulberry32(seed + 777);
    const butterflies = Array.from({ length: Math.max(0, Math.round(+cfg.butterflies)) }, (_, i) => {
      const preset = [
        { cx: 0.34, cy: 0.56, ax: 0.07, ay: 0.05, size: 20, flap: 36, ph: 0 },
        { cx: 0.5, cy: 0.47, ax: 0.05, ay: 0.03, size: 12, flap: 40, ph: 2.1 },
      ][i];
      const b = preset || {
        cx: 0.1 + br() * 0.8, cy: 0.45 + br() * 0.3, ax: 0.03 + br() * 0.05, ay: 0.02 + br() * 0.035,
        size: 9 + br() * 12, flap: 34 + Math.floor(br() * 10), ph: br() * TAU,
      };
      return { ...b, cy: mapY(b.cy), flap: cyc(b.flap), f: [1, 3, 2, 5].map(cyc) };
    });

    // ---------- 最终调色叠层 ----------
    const grade = makeCanvas(W, H);
    {
      const g = grade.getContext('2d');
      let gr = g.createRadialGradient(W * 0.82, -H * 0.1, 0, W * 0.82, -H * 0.1, W * 0.9);
      gr.addColorStop(0, 'rgba(255,236,190,0.22)');
      gr.addColorStop(1, 'rgba(255,236,190,0)');
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
      gr = g.createRadialGradient(W / 2, H * 0.48, Math.min(W, H) * 0.35, W / 2, H * 0.48, Math.hypot(W, H) * 0.62);
      gr.addColorStop(0, 'rgba(10,25,10,0)');
      gr.addColorStop(1, 'rgba(10,25,10,0.32)');
      g.fillStyle = gr; g.fillRect(0, 0, W, H);
    }

    // ---------- 绘制辅助 ----------
    function drawStem(ctx, x0, y0, x1, y1, bend, lw, col) {
      ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.moveTo(x0, y0);
      ctx.quadraticCurveTo(x0 + (x1 - x0) * 0.2 + bend, y0 + (y1 - y0) * 0.55, x1, y1);
      ctx.stroke();
    }

    function flowerSprite(name, v, r) {
      const mips = flowerSprites[name];
      let mi = 0;
      while (mi < mips.length - 1 && mips[mi][0].R < r) mi++;
      return mips[mi][v];
    }

    function drawSprite(ctx, img, ax, ay, x, y, scale, rot, sq) {
      const c = Math.cos(rot), s = Math.sin(rot);
      ctx.setTransform(c * scale, s * scale, -s * scale * sq, c * scale * sq, x, y);
      ctx.drawImage(img, -ax, -ay);
    }

    function drawButterfly(ctx, b, t) {
      const p = TAU * t / T;
      const [f1, f3, f2, f5] = b.f;
      const x = W * (b.cx + b.ax * Math.sin(f1 * p + b.ph) + b.ax * 0.35 * Math.sin(f3 * p + b.ph * 2));
      const y = H * (b.cy + b.ay * Math.sin(f2 * p + b.ph) + b.ay * 0.4 * Math.sin(f5 * p));
      const vx = b.ax * (f1 * Math.cos(f1 * p + b.ph) + 0.35 * f3 * Math.cos(f3 * p + b.ph * 2));
      const dir = vx >= 0 ? 1 : -1;
      const flapP = Math.sin(TAU * b.flap * t / T + b.ph);
      const open = 0.15 + 0.85 * (0.5 + 0.5 * flapP);
      const bob = S * 2 * flapP;
      const sz = b.size * S;
      ctx.setTransform(dir, 0, 0, 1, x, y + bob);
      ctx.rotate(-0.15);
      for (const side of [-1, 1]) {
        ctx.save();
        ctx.scale(side * open, 1);
        ctx.fillStyle = 'rgba(250,250,244,0.95)';
        ctx.beginPath(); ctx.ellipse(sz * 0.55, -sz * 0.35, sz * 0.62, sz * 0.48, -0.5, 0, TAU); ctx.fill();
        ctx.beginPath(); ctx.ellipse(sz * 0.42, sz * 0.25, sz * 0.4, sz * 0.36, 0.4, 0, TAU); ctx.fill();
        ctx.fillStyle = 'rgba(70,70,70,0.75)';
        ctx.beginPath(); ctx.ellipse(sz * 0.95, -sz * 0.62, sz * 0.18, sz * 0.12, -0.5, 0, TAU); ctx.fill();
        ctx.fillStyle = 'rgba(90,90,90,0.5)';
        ctx.beginPath(); ctx.arc(sz * 0.55, -sz * 0.3, sz * 0.07, 0, TAU); ctx.fill();
        ctx.restore();
      }
      ctx.fillStyle = '#3b3a35';
      ctx.beginPath(); ctx.ellipse(0, 0, sz * 0.08, sz * 0.42, 0, 0, TAU); ctx.fill();
    }

    function drawPetal(ctx, pt, t) {
      const p = TAU * t / T;
      const x = wrap01(pt.x0 + drift * t / T) * (W + 200 * S) - 100 * S;
      const y = H * pt.y + pt.ay * Math.sin(pt.fy * p + pt.p);
      const rot = pt.rot * p + pt.p;
      const fl = Math.cos(pt.flip * p + pt.p);
      const s = pt.size;
      ctx.setTransform(Math.cos(rot) * fl, Math.sin(rot) * fl, -Math.sin(rot), Math.cos(rot), x, y);
      ctx.fillStyle = pt.col;
      ctx.globalAlpha = 0.92;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.5);
      ctx.bezierCurveTo(-s * 0.45, s * 0.2, -s * 0.4, -s * 0.4, -s * 0.15, -s * 0.5);
      ctx.lineTo(0, -s * 0.42); ctx.lineTo(s * 0.15, -s * 0.5);
      ctx.bezierCurveTo(s * 0.4, -s * 0.4, s * 0.45, s * 0.2, 0, s * 0.5);
      ctx.fill();
      ctx.globalAlpha = 1;
    }

    // ---------- 每帧绘制 ----------
    const drift = cyc(1); // 云、云影、花瓣、绒絮每个循环横穿画面的次数
    const [c3, c4, c7] = [cyc(3), cyc(4), cyc(7)];
    const hazeK = Math.max(0, +cfg.haze);

    // still=true 时按无风静止姿态绘制（用于远景缓存）
    function drawField(ctx, list, t, still) {
      const P = TAU * t / T;
      for (let i = 0; i < list.length; i++) {
        const it = list[i];
        const wv = still ? 0 : wind(it.x, t);
        const fl = still ? 0 : Math.sin(it.fl * P + it.fp);
        if (it.kind === 'tuft') {
          const img = tuftSprites[it.bi][it.li][it.sh];
          const k = it.h / img.height;
          const sway = WS * it.h * (0.07 * wv + 0.03 + 0.018 * fl);
          ctx.setTransform(k * it.flip, 0, -sway / img.height, k, it.x, it.y);
          ctx.drawImage(img, -img.width / 2, -img.height);
        } else {
          const sway = WS * it.ls * (0.09 * wv + 0.035 + 0.025 * fl);
          const hx = it.x + sway, hy = it.y - it.ls * (1 - 0.02 * Math.min(1, WS) * Math.abs(wv));
          if (it.r > 1.4) {
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            drawStem(ctx, it.x, it.y, hx, hy, -sway * 0.3, Math.max(0.6, it.r * 0.1), '#4a7330');
          }
          if (it.kind === 'flower') {
            const spr = flowerSprite(it.col, it.var, it.r);
            drawSprite(ctx, spr.canvas, spr.canvas.width / 2, spr.canvas.height / 2, hx, hy, it.r / spr.R, it.rot + sway / it.ls * 0.8, it.sq);
          } else {
            const spr = it.r < budSprites[it.type][0].R ? budSprites[it.type][0] : budSprites[it.type][1];
            drawSprite(ctx, spr.canvas, spr.ax, spr.ay, hx, hy, it.r / spr.R, it.rot + sway / it.ls, 1);
          }
        }
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }

    // 地平线附近的草丛只有不到 2px 的摆动，却占了一大半绘制量：预先画成静态层
    const farCutY = horizonY + fieldH * 0.05;
    const nearItems = items.filter((it) => it.y >= farCutY);
    const farField = makeCanvas(W, H);
    drawField(farField.getContext('2d'), items.filter((it) => it.y < farCutY), 0, true);

    function draw(ctx, tIn) {
      const t = ((tIn % T) + T) % T;
      const P = TAU * t / T;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
      ctx.imageSmoothingEnabled = true;

      ctx.drawImage(sky, 0, 0);
      if (cfg.clouds) {
        const cx = wrap01(drift * t / T) * W;
        ctx.drawImage(clouds, cx - W, 0);
        ctx.drawImage(clouds, cx, 0);
      }
      ctx.drawImage(land, 0, 0);

      // 花田：远处静态缓存层 + 近处逐帧摆动
      ctx.drawImage(farField, 0, 0);
      drawField(ctx, nearItems, t, false);
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // 流动云影
      if (cfg.cloudShadows) {
        ctx.globalCompositeOperation = 'multiply';
        const sx = wrap01(drift * t / T) * W;
        ctx.drawImage(shadow, sx - W, horizonY, W, fieldH);
        ctx.drawImage(shadow, sx, horizonY, W, fieldH);
        ctx.globalCompositeOperation = 'source-over';
      }

      // 远处雾气
      if (hazeK > 0) {
        const hg = ctx.createLinearGradient(0, horizonY - 2, 0, horizonY + fieldH * 0.42);
        hg.addColorStop(0, `rgba(206,216,212,${Math.min(0.95, 0.72 * hazeK)})`);
        hg.addColorStop(0.35, `rgba(206,216,212,${Math.min(0.6, 0.25 * hazeK)})`);
        hg.addColorStop(1, 'rgba(206,216,212,0)');
        ctx.fillStyle = hg; ctx.fillRect(0, horizonY - 2, W, fieldH * 0.42 + 2);
      }

      // 主角花
      const stemList = [...heroBuds.map((b) => ({ b, bud: true })), ...heroes.map((b) => ({ b, bud: false }))];
      for (const { b, bud } of stemList) {
        const bx = b.bx * W, by = H + 20 * S;
        const hx0 = b.hx * W, hy0 = b.hy * H;
        const Ls = by - hy0;
        const sway = WS * Ls * (0.018 * wind(hx0, t) + 0.006 * Math.sin(c3 * P + b.ph) + 0.003 * Math.sin(c7 * P + b.ph * 2));
        const hx = hx0 + sway, hy = hy0 + Math.abs(sway) * 0.05;
        const bend = b.bend * W;
        const lw = Math.max(2, b.R * (bud ? 0.16 : 0.07));
        drawStem(ctx, bx, by, hx, hy, bend, lw, '#3e6325');
        ctx.strokeStyle = 'rgba(160,200,110,0.35)'; ctx.lineWidth = lw * 0.35;
        ctx.beginPath(); ctx.moveTo(bx - lw * 0.2, by);
        ctx.quadraticCurveTo(bx + (hx - bx) * 0.2 + bend - lw * 0.2, by + (hy - by) * 0.55, hx - lw * 0.2, hy); ctx.stroke();
        if (!bud) {
          for (const lf of b.leaves) { // 茎上的丝状叶
            const p = lf.p, ip = 1 - p;
            const qx = bx + (hx - bx) * 0.2 + bend, qy = by + (hy - by) * 0.55;
            const px = ip * ip * bx + 2 * ip * p * qx + p * p * hx, py = ip * ip * by + 2 * ip * p * qy + p * p * hy;
            ctx.strokeStyle = '#5e8d39'; ctx.lineWidth = Math.max(1.2, b.R * 0.022);
            for (let k = 0; k < 3; k++) {
              const a = lf.side * (0.55 + k * 0.35) + sway / Ls * 2;
              const L = lf.L * (1 - k * 0.2);
              ctx.beginPath(); ctx.moveTo(px, py);
              ctx.quadraticCurveTo(px + Math.sin(a) * L * 0.5, py - Math.cos(a) * L * 0.6, px + Math.sin(a + lf.side * 0.3) * L, py - Math.cos(a + lf.side * 0.3) * L * 0.85);
              ctx.stroke();
            }
          }
          ctx.save();
          drawSprite(ctx, b.sprite, b.sprite.width / 2, b.sprite.height / 2, hx, hy, 1, b.rot + sway / Ls * 1.5, b.sq);
          ctx.restore();
        } else {
          ctx.save();
          drawSprite(ctx, b.sprite.canvas, b.sprite.ax, b.sprite.ay, hx, hy, 1, b.rot + sway / Ls * 1.5, 1);
          ctx.restore();
        }
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      // 蝴蝶
      for (const b of butterflies) { ctx.save(); drawButterfly(ctx, b, t); ctx.restore(); }
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      // 漂浮的花瓣、绒絮、光点
      for (const pt of petals) drawPetal(ctx, pt, t);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = 'screen';
      for (const m of motes) {
        const x = W * m.x + m.ax * Math.sin(m.fx * P + m.p1);
        const y = H * m.y + m.ay * Math.sin(m.fy * P + m.p2);
        const a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(m.tw * P + m.tp));
        ctx.globalAlpha = a;
        ctx.drawImage(glow, x - m.size, y - m.size, m.size * 2, m.size * 2);
      }
      for (const f of fluff) {
        const x = wrap01(f.x0 + drift * t / T) * (W + 120 * S) - 60 * S;
        const y = H * f.y + f.ay * Math.sin(f.fy * P + f.p);
        ctx.globalAlpha = f.bokeh ? 0.14 : 0.6;
        ctx.drawImage(glow, x - f.size, y - f.size, f.size * 2, f.size * 2);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';

      // 前景虚化草
      for (const f of foreBlades) {
        const img = f.canvas;
        const sway = WS * f.hpx * (0.03 * wind(f.x * W, t) + 0.012 * Math.sin(c4 * P + f.ph));
        ctx.setTransform(f.flip, 0, -sway / img.height, 1, f.x * W, H + f.pad * 0.5);
        ctx.drawImage(img, -img.width / 2, -img.height);
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.drawImage(grade, 0, 0);
    }

    return { width: W, height: H, period: T, config: cfg, draw };
  }

  return { createScene, DEFAULTS, resolveConfig };
});

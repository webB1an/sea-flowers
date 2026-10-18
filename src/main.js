// 波斯菊花海 3D 动态壁纸：入口
import * as THREE from 'three';
import { resolveConfig, QUALITY, STRUCTURAL_KEYS, WEATHERS, mulberry32 } from './config.js';
import { sharedUniforms } from './glsl.js';
import { computeEnv, autoWeather } from './env.js';
import { makeFoliageAtlas, makePetalTexture, makeWingTexture } from './textures.js';
import { createField } from './field.js';
import { createSky, createCity } from './sky.js';
import { createParticles } from './particles.js';
import { Post } from './post.js';
import { initUI } from './ui.js';

const lin = (hex) => new THREE.Color(hex);
const MOON_DIR = new THREE.Vector3(-0.42, 0.42, -0.8).normalize();

const PALETTES = { // 默认颜色使用手调的三段渐变
  white: ['#e2b3c8', '#f6eff1', '#ffffff'], pink: ['#c64886', '#ee9fc3', '#f8cfe0'],
  magenta: ['#9e0050', '#d6127a', '#ea3a93'], crimson: ['#4f031c', '#8a0a34', '#a8164a'],
};
const DEFAULT_MAIN = { white: '#f6eff1', pink: '#ee9fc3', magenta: '#d6127a', crimson: '#8a0a34' };
function palette(name, main) {
  if (main.toLowerCase() === DEFAULT_MAIN[name]) return PALETTES[name].map(lin);
  const m = lin(main);
  const l = 0.2126 * m.r + 0.7152 * m.g + 0.0722 * m.b;
  const base = l > 0.6 ? m.clone().lerp(lin('#c88aa6'), 0.55) : m.clone().multiplyScalar(0.35);
  return [base, m, m.clone().lerp(new THREE.Color(1, 1, 1), 0.3)];
}

export class App {
  constructor(canvas, { exportMode = false } = {}) {
    this.exportMode = exportMode;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: false, powerPreference: 'high-performance', preserveDrawingBuffer: exportMode });
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
    this.renderer.setPixelRatio(1);
    this.renderer.autoClear = false;
    this.overlay = new THREE.Scene();
    this.tex = { atlas: makeFoliageAtlas(), petal: makePetalTexture(), wing: makeWingTexture() };
    for (const t of Object.values(this.tex)) t.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    this.U = sharedUniforms();
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.05, 6000);
    this.scene = new THREE.Scene();
    this.cfg = null;
    this.world = null;
    this.post = null;
    this.wCur = null;
    this.w = 1; this.h = 1;
  }

  setSize(w, h) {
    this.w = w; this.h = h;
    this.renderer.setSize(w, h, false);
    if (this.post) this.post.setSize(w, h);
    this.needsBuild = true;
  }

  setConfig(cfgIn) {
    const cfg = resolveConfig(cfgIn);
    const prev = this.cfg;
    this.cfg = cfg;
    if (!prev || STRUCTURAL_KEYS.some((k) => JSON.stringify(prev[k]) !== JSON.stringify(cfg[k]))) this.needsBuild = true;
    const names = ['white', 'pink', 'magenta', 'crimson'];
    names.forEach((n, i) => {
      const [b, m, t] = palette(n, cfg.colors[n]);
      this.U.uPalBase.value[i].set(b.r, b.g, b.b); this.U.uPalMid.value[i].set(m.r, m.g, m.b); this.U.uPalTip.value[i].set(t.r, t.g, t.b);
    });
  }

  updateCamera() {
    const c = this.camera, aspect = this.w / this.h;
    c.aspect = aspect;
    c.fov = Math.max(38, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(16)) / aspect)));
    const tanH = Math.tan(THREE.MathUtils.degToRad(c.fov / 2));
    const pitch = Math.atan((0.5 - this.cfg.horizon) * 2 * tanH);
    c.position.set(0, 1.15, 0);
    c.rotation.set(-pitch, 0, 0);
    c.updateProjectionMatrix();
    c.updateMatrixWorld(true);
  }

  build() {
    this.needsBuild = false;
    const cfg = this.cfg, q = QUALITY[cfg.quality];
    if (!this.post || this.post.samples !== q.samples || this.postTaps !== q.dofTaps) {
      if (this.post) this.post.dispose();
      this.post = new Post(this.renderer, q);
      this.postTaps = q.dofTaps;
      this.post.setSize(this.w, this.h);
    }
    if (this.rain) { this.rain.geometry.dispose(); this.rain.material.dispose(); }
    if (this.world) {
      this.scene.remove(this.world);
      this.world.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
    }
    this.updateCamera();
    const T = cfg.period;
    const cyc = (n) => Math.max(1, Math.round((n * T) / 15));
    this.cyc = cyc;
    const rng = mulberry32(Math.floor(cfg.seed) || 0);
    const aspect = this.w / this.h;
    const halfH = Math.atan(Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)) * aspect);
    const world = new THREE.Group();
    const sky = createSky(this.U);
    sky.mat.uniforms.uTwinkle.value = cyc(7);
    world.add(sky.mesh);
    if (cfg.skyline) world.add(createCity(this.U, mulberry32(cfg.seed + 7), halfH));
    const field = createField({ U: this.U, tex: this.tex, cfg, q, rng, camera: this.camera, aspect });
    world.add(field.group);
    this.counts = field.counts;
    const parts = createParticles({ U: this.U, tex: this.tex, cfg, q, rng: mulberry32(cfg.seed + 99), cyc, halfH });
    world.add(parts.group);
    this.partU = parts.uniforms;
    this.overlay.clear();
    this.overlay.add(parts.rain);
    this.rain = parts.rain;
    this.focus = cfg.heroes ? 0.92 : 3.5;
    this.world = world;
    this.scene.add(world);
  }

  resolveHour(t, now = new Date()) {
    const cfg = this.cfg;
    if (cfg.timeMode === 'clock' && !this.exportMode) return now.getHours() + now.getMinutes() / 60 + now.getSeconds() / 3600;
    if (cfg.timeMode === 'timelapse') return (cfg.hour + (24 * (((t % cfg.period) + cfg.period) % cfg.period)) / cfg.period) % 24;
    return cfg.hour;
  }

  resolveWeather(now = new Date()) {
    const w = this.cfg.weather;
    if (WEATHERS.includes(w)) return { weights: { [w]: 1 }, name: w };
    if (this.exportMode) return { weights: { clear: 1 }, name: 'clear' };
    return autoWeather(now);
  }

  // t：动画时间（秒）；dt：距上一帧的秒数（实时模式用于天气平滑过渡，导出时为 0）
  frame(t, dt = 0, target = null) {
    if (this.needsBuild) this.build();
    const cfg = this.cfg, U = this.U, T = cfg.period;
    const tt = ((t % T) + T) % T;
    U.uTime.value = tt; U.uLoop.value = tt / T; U.uPhase.value = (Math.PI * 2 * tt) / T; U.uPeriod.value = T;
    const wc = (n) => Math.max(1, Math.round((n * T * cfg.windSpeed) / 15));
    U.uWindCyc.value.set(wc(1), wc(2), wc(3));
    U.uFlutterCyc.value.set(this.cyc(5), this.cyc(8));
    U.uWind.value = cfg.wind;

    const now = new Date();
    const hour = this.resolveHour(t, now);
    const { weights, name } = this.resolveWeather(now);
    if (!this.wCur || dt <= 0) this.wCur = { ...weights };
    else {
      const k = Math.min(1, dt * 0.8);
      for (const w of WEATHERS) this.wCur[w] = (this.wCur[w] || 0) + ((weights[w] || 0) - (this.wCur[w] || 0)) * k;
    }
    this.status = { hour, weather: name };
    const e = computeEnv(hour, this.wCur);
    U.uLightDir.value.copy(e.lightDir); U.uSunDir.value.copy(e.sunDir); U.uMoonDir.value.copy(MOON_DIR);
    U.uLightColor.value.set(...e.lightCol); U.uGlowColor.value.set(...e.glow); U.uSunDisc.value.set(...e.sunDisc);
    U.uSkyAmb.value.set(...e.skyAmb); U.uGroundAmb.value.set(...e.groundAmb);
    U.uZenith.value.set(...e.zen); U.uHorizon.value.set(...e.hor);
    U.uCloudLit.value.set(...e.cloudLit); U.uCloudDark.value.set(...e.cloudDark);
    U.uFogDensity.value = 4.5e-4 * cfg.haze * e.fogMul;
    U.uCloudCover.value = e.cloudCover; U.uCloudShadow.value = e.cloudShadow;
    U.uCloudDrift.value.set(14, -4).multiplyScalar(0.6 + 0.4 * cfg.windSpeed);
    U.uSunVis.value = e.sunVis; U.uStars.value = e.stars; U.uMoon.value = e.moon;
    U.uCityLights.value = e.cityLights; U.uWet.value = e.wet; U.uRain.value = e.rain;
    if (this.partU.pollenVis) this.partU.pollenVis.value = e.pollen;
    if (this.partU.fireflyVis) this.partU.fireflyVis.value = e.fireflies;
    if (this.partU.butterflyVis) this.partU.butterflyVis.value = e.butterflies;

    const ru = this.rain.material.uniforms;
    ru.tDepth.value = this.post.scene.depthTexture; ru.uRes.value.set(this.w, this.h);
    ru.uNear.value = this.camera.near; ru.uFar.value = this.camera.far;
    const k = this.h / 1080;
    this.post.render(this.scene, this.camera, {
      focus: this.focus, aperture: cfg.dof * 7 * k, maxCoc: 26 * k * Math.max(1, cfg.dof),
      bloom: cfg.bloom * e.bloom * 0.9, exposure: 0.82 * Math.pow(2, cfg.exposure) * e.ex,
      sat: e.sat, contrast: e.contrast, tint: e.tint, grain: cfg.grain, seed: Math.floor((tt / T) * 997),
    }, target, e.rain > 0.01 ? this.overlay : null);
  }
}

// ---------------- 导出接口（render.js 通过无界面浏览器调用） ----------------
function exportAPI() {
  let app = null, canvas = null;
  return {
    init(cfg, w, h) {
      canvas = document.getElementById('c');
      canvas.width = w; canvas.height = h;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      app = new App(canvas, { exportMode: true });
      app.setConfig(cfg);
      app.setSize(w, h);
      app.frame(0);
      return { period: app.cfg.period, counts: app.counts };
    },
    debugTexture(name) { return app.tex[name].image.toDataURL('image/png'); },
    renderAt(t) {
      app.frame(t);
      const gl = app.renderer.getContext();
      const px = new Uint8Array(app.w * app.h * 4);
      gl.readPixels(0, 0, app.w, app.h, gl.RGBA, gl.UNSIGNED_BYTE, px);
      let s = '';
      const CH = 0x8000;
      for (let i = 0; i < px.length; i += CH) s += String.fromCharCode.apply(null, px.subarray(i, i + CH));
      return btoa(s);
    },
  };
}

// ---------------- 实时网页模式 ----------------
function live() {
  const canvas = document.getElementById('c');
  const app = new App(canvas);
  const ui = initUI({
    onConfig: (cfg) => app.setConfig(cfg),
    onView: () => resize(),
    getStatus: () => ({ ...app.status, counts: app.counts, size: [app.w, app.h] }),
  });
  app.setConfig(ui.cfg);
  function resize() {
    const v = ui.view;
    const k = v.scale === 'auto' ? Math.min(window.devicePixelRatio || 1, 2) : +v.scale;
    app.setSize(Math.max(320, Math.round(innerWidth * k)), Math.max(180, Math.round(innerHeight * k)));
  }
  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
  resize();
  const start = performance.now();
  let last = 0, prevT = start;
  (function loop(now) {
    requestAnimationFrame(loop);
    const cap = +ui.view.fpsCap;
    if (cap > 0 && now - last < 1000 / cap - 2) return;
    last = now;
    app.frame((now - start) / 1000, Math.min(0.25, (now - prevT) / 1000));
    prevT = now;
    ui.tick(now);
  })(start);
}

if (new URLSearchParams(location.search).get('export') === '1') window.FlowerSea = exportAPI();
else live();

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
import { createFrameScheduler } from './scheduler.js';
import { detectQuality, createAutoQualityMonitor } from './quality.js';

const lin = (hex) => new THREE.Color(hex);
const MOON_DIR = new THREE.Vector3(-0.42, 0.42, -0.8).normalize();

const PALETTES = { // 默认颜色使用手调的三段渐变
  white: ['#e2b3c8', '#f6eff1', '#ffffff'], pink: ['#c64886', '#ee9fc3', '#f8cfe0'],
  magenta: ['#9e0050', '#d6127a', '#ea3a93'], crimson: ['#4f031c', '#8a0a34', '#a8164a'],
};
const DEFAULT_MAIN = { white: '#f6eff1', pink: '#ee9fc3', magenta: '#d6127a', crimson: '#8a0a34' };
function palette(name, main) {
  const hex = String(main || '').toLowerCase();   // 统一大小写：大写 HEX 也命中手调渐变
  if (hex === DEFAULT_MAIN[name]) return PALETTES[name].map(lin);
  const m = lin(hex);
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
    this.gpuName = (() => {   // 自动画质依据（ANGLE 包装后的 GPU 名称）
      try {
        const gl = this.renderer.getContext();
        const ext = gl.getExtension('WEBGL_debug_renderer_info');
        return ext ? String(gl.getParameter(ext.UNMASKED_RENDERER_WEBGL)) : String(gl.getParameter(gl.RENDERER));
      } catch (e) { return ''; }
    })();
    this.overlay = new THREE.Scene();
    this.tex = { atlas: makeFoliageAtlas(), petal: makePetalTexture(), wing: makeWingTexture() };
    for (const t of Object.values(this.tex)) t.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
    this.U = sharedUniforms();
    this.camera = new THREE.PerspectiveCamera(38, 1, 0.05, 6000);
    this.scene = new THREE.Scene();
    // 方向光阴影（M1）：正交光源相机覆盖近中景 0–40m
    this.shadowRT = null;
    this.shadowScene = new THREE.Scene();
    this.shadowCamera = new THREE.OrthographicCamera(-12, 12, 12, -12, 1, 70);
    this.shadowCenter = new THREE.Vector3(0, 0, -3);
    this.shadowMatrix = new THREE.Matrix4();
    this.shadowCasters = null;
    // 天空 IBL（M1）：cubemap 环境光/反射
    this.iblRT = null;
    this.iblScene = new THREE.Scene();
    this.iblCamera = null;
    this.cfg = null;
    this.world = null;
    this.post = null;
    this.wCur = null;
    this.envCache = new Map();
    this.autoQuality = null;      // quality='auto' 时启动检测出的生效档位
    this.effectiveQuality = null; // 当前实际渲染使用的档位（UI/状态展示用）
    this.w = 1; this.h = 1;
  }

  setSize(w, h) {
    this.w = w; this.h = h;
    this.renderer.setSize(w, h, false);
    if (this.post) this.post.setSize(w, h);
    if (this.cfg && this.cfg.quality === 'auto') this.autoQuality = null; // 分辨率变化后重新检测
    this.needsBuild = true;
  }

  setConfig(cfgIn) {
    const cfg = resolveConfig(cfgIn);
    const prev = this.cfg;
    this.cfg = cfg;
    if (prev && prev.quality !== cfg.quality) this.autoQuality = null;   // 切换手动/自动档时重新检测
    if (!prev || STRUCTURAL_KEYS.some((k) => JSON.stringify(prev[k]) !== JSON.stringify(cfg[k]))) this.needsBuild = true;
    const names = ['white', 'pink', 'magenta', 'crimson'];
    names.forEach((n, i) => {
      const [b, m, t] = palette(n, cfg.colors[n]);
      this.U.uPalBase.value[i].set(b.r, b.g, b.b); this.U.uPalMid.value[i].set(m.r, m.g, m.b); this.U.uPalTip.value[i].set(t.r, t.g, t.b);
    });
  }

  // 解析生效画质：手动档直接返回；auto 按 GPU/分辨率检测；导出模式固定 high 保证可复现
  resolveQualityName() {
    const quality = this.cfg && this.cfg.quality;
    if (quality !== 'auto') return QUALITY[quality] ? quality : 'high';
    if (this.exportMode) return 'high';
    if (!this.autoQuality) this.autoQuality = detectQuality(this.gpuName, this.w, this.h);
    return this.autoQuality;
  }

  // 自动画质运行时降档（仅 quality='auto' 生效）
  useAutoTier(tier) {
    if (!this.cfg || this.cfg.quality !== 'auto' || !QUALITY[tier] || this.autoQuality === tier) return false;
    this.autoQuality = tier;
    this.needsBuild = true;
    return true;
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
    const cfg = this.cfg;
    const qualityName = this.resolveQualityName();
    const q = QUALITY[qualityName];
    this.effectiveQuality = qualityName;
    // 阴影资源随画质/场景重建而释放
    if (this.shadowRT) { if (this.shadowRT.depthTexture) this.shadowRT.depthTexture.dispose(); this.shadowRT.dispose(); this.shadowRT = null; }
    if (this.shadowCasters) {
      for (const m of this.shadowCasters) { m.geometry.dispose(); m.material.dispose(); }
      this.shadowCasters = null;
    }
    this.shadowScene.clear();
    // IBL 资源随场景/画质重建而释放（cubemap 会在新 build 中重新生成）
    if (this.iblRT) { this.iblRT.dispose(); this.iblRT = null; }
    this.iblCamera = null;
    this.iblScene.clear();
    if (!this.post || this.post.samples !== q.samples || this.postTaps !== q.dofTaps || this.postAO !== (q.ao || 0)) {
      if (this.post) this.post.dispose();
      this.post = new Post(this.renderer, q);
      this.postTaps = q.dofTaps;
      this.postAO = q.ao || 0;
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

    // ---- 方向光阴影：仅近中景投射体进 shadow pass ----
    const shadowSize = q.shadow || 0;
    this.U.uShadowEnabled.value = shadowSize ? 1 : 0;
    this.U.uShadowMap.value = null;
    if (shadowSize) {
      const depthTexture = new THREE.DepthTexture(shadowSize, shadowSize);
      depthTexture.type = THREE.UnsignedIntType;
      depthTexture.minFilter = THREE.NearestFilter;
      depthTexture.magFilter = THREE.NearestFilter;
      this.shadowRT = new THREE.WebGLRenderTarget(shadowSize, shadowSize, {
        depthBuffer: true, depthTexture, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, generateMipmaps: false,
      });
      this.U.uShadowMap.value = depthTexture;
      this.U.uShadowTexel.value.set(1 / shadowSize, 1 / shadowSize);
      this.shadowCasters = field.shadowCasters || [];
      for (const m of this.shadowCasters) this.shadowScene.add(m);
    } else {
      this.shadowCasters = [];
    }

    // ---- 天空 IBL：把 sky shader 渲染到 cubemap，作为环境光/环境反射来源 ----
    const iblSize = q.ibl || 0;
    this.U.uEnvIntensity.value = 0;
    this.U.uEnvMap.value = null;
    if (iblSize) {
      const rt = new THREE.WebGLCubeRenderTarget(iblSize, {
        type: THREE.HalfFloatType,
        generateMipmaps: true,
        minFilter: THREE.LinearMipmapLinearFilter,
        magFilter: THREE.LinearFilter,
      });
      this.iblRT = rt;
      this.iblCamera = new THREE.CubeCamera(0.1, 20000, rt);
      this.iblCamera.position.copy(this.camera.position);
      this.iblScene.add(sky.mesh.clone());   // 共享 geometry/material；uniforms 与主天空同源
      this.U.uEnvMap.value = rt.texture;
      this.U.uEnvIntensity.value = 0.5;      // 其余 50% 用解析环境光兜底，避免整体偏亮/偏色
    }
    this.iblFrame = 0;                        // IBL 重建节流计数（每 2 帧重建一次）
  }

  // 阴影贴图渲染：方向光正交相机覆盖近中景；主场景 shader 通过 uShadowMap/uShadowMatrix 采样
  renderShadow(lightDir) {
    const cam = this.shadowCamera, center = this.shadowCenter;
    cam.position.copy(center).addScaledVector(lightDir, 40);
    cam.up.set(0, 1, 0);
    cam.lookAt(center);
    cam.updateMatrixWorld();
    cam.updateProjectionMatrix();
    this.shadowMatrix.multiplyMatrices(cam.projectionMatrix, cam.matrixWorldInverse);
    this.U.uShadowMatrix.value.copy(this.shadowMatrix);
    const r = this.renderer;
    r.setRenderTarget(this.shadowRT);
    r.clear();
    r.render(this.shadowScene, cam);
    r.setRenderTarget(null);
  }

  // 天空 IBL：每帧把 sky 渲染进 cubemap（64²×6 像素，代价很低；low 档不创建 IBL）
  updateIBL() {
    const r = this.renderer;
    const prevAuto = r.autoClear;
    r.autoClear = true;
    this.iblCamera.position.copy(this.camera.position);
    this.iblCamera.update(r, this.iblScene);
    r.autoClear = prevAuto;
  }

  // 显式释放场景/贴图/后期/渲染器资源（页面销毁或需要彻底重建时使用）
  destroy() {
    if (this.world) {
      this.scene.remove(this.world);
      this.world.traverse((o) => {
        if (o.geometry) o.geometry.dispose();
        if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
      });
      this.world = null;
    }
    if (this.rain) { this.rain.geometry.dispose(); this.rain.material.dispose(); }
    this.rain = null;
    if (this.shadowRT) { if (this.shadowRT.depthTexture) this.shadowRT.depthTexture.dispose(); this.shadowRT.dispose(); this.shadowRT = null; }
    if (this.shadowCasters) {
      for (const m of this.shadowCasters) { m.geometry.dispose(); m.material.dispose(); }
      this.shadowCasters = null;
    }
    this.shadowScene.clear();
    if (this.iblRT) { this.iblRT.dispose(); this.iblRT = null; }
    this.iblCamera = null;
    this.iblScene.clear();
    this.overlay.clear();
    for (const t of Object.values(this.tex)) t.dispose();
    if (this.post) { this.post.dispose(); this.post = null; }
    this.envCache.clear();
    this.renderer.dispose();
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

  // 环境计算缓存：按量化时间（0.001h≈3.6s）与量化天气权重复用结果，避免逐帧新建
  // 大量数组/Vector3（长时间壁纸运行时的 GC 抖动来源）。量化带来的光照差异不可见。
  envFor(hour, weights) {
    const hk = Math.round(hour * 1000);
    let wk = '';
    for (const w of WEATHERS) wk += Math.round((weights[w] || 0) * 1000) + ',';
    const key = hk + '|' + wk;
    const cached = this.envCache.get(key);
    if (cached) return cached;
    const e = computeEnv(hk / 1000, weights);
    if (this.envCache.size > 512) this.envCache.clear();
    this.envCache.set(key, e);
    return e;
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
    const e = this.envFor(hour, this.wCur);
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

    // 阴影 pass 必须在主场景渲染前完成（uShadowMatrix/uShadowMap 供接收材质采样）
    if (this.shadowRT) this.renderShadow(e.lightDir);
    // IBL 依赖当前天空/光照 uniform，必须在环境参数更新之后、主场景渲染之前重建。
    // 天空/天气变化缓慢，按帧节流重建，避免每帧 6 面 cubemap + mipmap 生成造成帧时间尖峰。
    if (this.iblRT) {
      const every = 2;
      const jump = Math.abs(tt - (this.iblT == null ? 1e9 : this.iblT)) > 0.2;  // 导出/跳帧时强制刷新
      if (jump || (this.iblFrame++ % every) === 0) { this.updateIBL(); this.iblT = tt; }
    }

    const k = this.h / 1080;
    this.post.render(this.scene, this.camera, {
      focus: this.focus, aperture: cfg.dof * 7 * k, maxCoc: 26 * k * Math.max(1, cfg.dof),
      bloom: cfg.bloom * e.bloom * 0.9, exposure: 0.82 * Math.pow(2, cfg.exposure) * e.ex,
      sat: e.sat, contrast: e.contrast, tint: e.tint, grain: cfg.grain, seed: Math.floor((tt / T) * 997),
      aoStrength: 0.55, aoRadius: 0.5, ca: this.effectiveQuality === 'low' ? 0 : 0.0014,
    }, target, e.rain > 0.01 ? this.overlay : null);
  }
}

// ---------------- 导出接口（render.js 通过无界面浏览器调用） ----------------
// 像素回读有两套接口：
//   renderAt(t)            旧接口：整帧 base64（保留用于对照 / 外部脚本 / 排障）
//   renderFrame(t)+readChunk(i)  分块回读：4MB 原始像素/块，逐块 base64 传回，降低单条 CDP 消息与峰值内存
const EXPORT_CHUNK_BYTES = 4 * 1024 * 1024;
function bytesToBase64(bytes) {
  // Chrome 133+ 提供原生 Uint8Array.prototype.toBase64，比手工 fromCharCode + btoa 快很多
  if (typeof bytes.toBase64 === 'function') return bytes.toBase64();
  let s = '';
  const CH = 0x8000;
  for (let i = 0; i < bytes.length; i += CH) s += String.fromCharCode.apply(null, bytes.subarray(i, i + CH));
  return btoa(s);
}

function exportAPI() {
  let app = null, canvas = null, pixels = null;
  function renderPixels(t) {
    app.frame(t);
    const gl = app.renderer.getContext();
    const bytes = app.w * app.h * 4;
    if (!pixels || pixels.length !== bytes) pixels = new Uint8Array(bytes);
    gl.readPixels(0, 0, app.w, app.h, gl.RGBA, gl.UNSIGNED_BYTE, pixels);
    return bytes;
  }
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
    // 兼容旧接口：整帧 base64（旧实现，保持不变，供 --readback legacy 基准对照）
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
    // 分块回读：渲染一帧并缓存像素，返回元信息；随后用 readChunk(i) 逐块取回
    renderFrame(t) {
      const bytes = renderPixels(t);
      return {
        width: app.w, height: app.h, bytes,
        chunkBytes: EXPORT_CHUNK_BYTES, chunks: Math.ceil(bytes / EXPORT_CHUNK_BYTES),
      };
    },
    readChunk(index) {
      if (!pixels) throw new Error('readChunk: 尚未调用 renderFrame');
      if (!Number.isInteger(index) || index < 0) throw new Error(`readChunk: 非法块序号 ${index}`);
      const start = index * EXPORT_CHUNK_BYTES;
      if (start >= pixels.length) throw new Error(`readChunk: 块序号越界 ${index}`);
      return bytesToBase64(pixels.subarray(start, Math.min(start + EXPORT_CHUNK_BYTES, pixels.length)));
    },
    // 真实感大改基准：强制渲染 n 帧（不走 rAF），用 1px readPixels 同步 GPU 后统计耗时与渲染统计
    bench(n = 60, step = 1 / 60) {
      const gl = app.renderer.getContext();
      const info = app.renderer.info;
      const prevAuto = info.autoReset;
      info.autoReset = false;                  // 逐帧手动 reset，才能统计到完整一帧（含 shadow/后期 pass）
      const sync = new Uint8Array(4);
      const times = [];
      let stats = null;
      const t0 = performance.now();
      for (let i = 0; i < n; i++) {
        info.reset();
        const s = performance.now();
        app.frame(i * step);
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, sync);
        times.push(performance.now() - s);
        stats = { triangles: info.render.triangles, calls: info.render.calls, points: info.render.points, lines: info.render.lines };
      }
      info.autoReset = prevAuto;
      const wall = performance.now() - t0;
      const sorted = [...times].sort((a, b) => a - b);
      const at = (q) => +sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * q))].toFixed(3);
      const avg = times.reduce((a, b) => a + b, 0) / times.length;
      return {
        width: app.w, height: app.h, frames: n,
        avgMs: +avg.toFixed(3), minMs: at(0), p95Ms: at(0.95), maxMs: at(0.999),
        fps: +(1000 / avg).toFixed(1), wallMs: +wall.toFixed(1),
        gpu: app.gpuName, effectiveQuality: app.effectiveQuality,
        counts: app.counts,
        render: stats,
        memory: { geometries: info.memory.geometries, textures: info.memory.textures },
        programs: info.programs ? info.programs.length : null,
      };
    },
  };
}

// ---------------- 实时网页模式 ----------------
function live() {
  const canvas = document.getElementById('c');
  // WebGL 不可用 / 上下文丢失时的可见兜底提示（不能只打 console）
  const errEl = document.createElement('div');
  errEl.id = 'fatal';
  errEl.style.cssText = 'position:fixed;inset:0;z-index:20;display:none;padding:32px 40px;background:rgba(12,16,12,.92);color:#f2e9ec;font:14px/1.7 system-ui,"Microsoft YaHei","PingFang SC",sans-serif;white-space:pre-wrap;';
  document.body.append(errEl);
  let app = null, fatal = false, contextLost = false;
  const showError = (msg) => { errEl.textContent = msg; errEl.style.display = 'block'; };
  const hideError = () => { errEl.style.display = 'none'; };

  const ui = initUI({
    onConfig: (cfg) => { if (app) app.setConfig(cfg); },
    onView: () => resize(),
    getStatus: () => (app
      ? { ...app.status, counts: app.counts, size: [app.w, app.h], quality: app.effectiveQuality, auto: !!(app.cfg && app.cfg.quality === 'auto') }
      : { counts: null, size: [innerWidth, innerHeight], quality: null, auto: false }),
  });

  function resize() {
    if (!app) return;
    const v = ui.view;
    const k = v.scale === 'auto' ? Math.min(window.devicePixelRatio || 1, 2) : +v.scale;
    app.setSize(Math.max(320, Math.round(innerWidth * k)), Math.max(180, Math.round(innerHeight * k)));
  }

  try {
    app = new App(canvas);
  } catch (e) {
    fatal = true;
    showError('无法初始化 WebGL2 渲染。\n\n' + ((e && e.message) || e) + '\n\n请使用支持 WebGL2 的最新版 Chrome / Edge，并确认浏览器已启用硬件加速（或更新显卡驱动）。');
    console.error(e);
  }
  if (app) {
    app.setConfig(ui.cfg);
    resize();
    canvas.addEventListener('webglcontextlost', (e) => {
      e.preventDefault();
      contextLost = true;
      showError('图形上下文丢失，正在尝试恢复…\n\n若长时间停留在此界面，请重启浏览器或检查显卡驱动。');
    }, false);
    canvas.addEventListener('webglcontextrestored', () => {
      // three 已在内部恢复 GL 状态并会在下次使用时就地重建 GPU 资源，这里只需恢复渲染循环，
      // 避免 rebuild 时对旧上下文对象执行 delete 触发 WebGL 警告。
      contextLost = false;
      prevT = performance.now();
      hideError();
    }, false);
  }

  let rt;
  addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });

  const start = performance.now();
  let prevT = start;
  const shouldRender = createFrameScheduler();
  const autoMonitor = createAutoQualityMonitor();
  (function loop(now) {
    requestAnimationFrame(loop);
    if (fatal || contextLost || !app) return;
    if (!shouldRender(now, +ui.view.fpsCap)) return;
    const dt = Math.min(0.25, (now - prevT) / 1000);
    app.frame((now - start) / 1000, dt);
    prevT = now;
    // 低帧率自动降档：仅 auto 档；用户主动限帧到 30fps 以下时不算“性能不足”
    if (app.cfg.quality === 'auto' && app.effectiveQuality) {
      const cap = +ui.view.fpsCap;
      if (!(cap > 0 && cap < 30)) {
        const nextTier = autoMonitor(dt, app.effectiveQuality);
        if (nextTier) app.useAutoTier(nextTier);
      }
    }
    ui.tick(now);
  })(start);
}

if (new URLSearchParams(location.search).get('export') === '1') window.FlowerSea = exportAPI();
else live();

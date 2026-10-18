// 点缀：雨丝、花粉光点 / 绒絮、萤火虫、飘落花瓣、蝴蝶
// 运动全部使用整数周期（cyc）或按整数圈数横向循环，保证首尾无缝
import * as THREE from 'three';
import { COMMON } from './glsl.js';

function quadGeo() {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, 1, 0], 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute([0, 0, 1, 0, 1, 1, 0, 1], 2));
  g.setIndex([0, 1, 2, 0, 2, 3]);
  return g;
}
function inst(base, attrs, n) {
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index;
  for (const k of Object.keys(base.attributes)) g.setAttribute(k, base.attributes[k]);
  for (const [k, [arr, s]] of Object.entries(attrs)) g.setAttribute(k, new THREE.InstancedBufferAttribute(arr, s));
  g.instanceCount = n;
  return g;
}
function mesh(geo, mat) { const m = new THREE.Mesh(geo, mat); m.frustumCulled = false; return m; }

// ---------------- 雨 ----------------
const RAIN_VS = /* glsl */ `
${COMMON}
uniform float uRainCyc;
attribute vec3 iSeed;
varying float vA, vViewZ; varying vec2 vUv;
void main() {
  const float BOX = 8.0;
  vec3 p = vec3(mix(-7.0, 7.0, iSeed.x), BOX * fract(iSeed.y - uRainCyc * uLoop), mix(-0.4, -22.0, iSeed.z * iSeed.z));
  vec3 dir = normalize(vec3(0.16, -1.0, 0.03));
  p.x -= p.y * 0.16;
  vec4 a = viewMatrix * vec4(p, 1.0), b = viewMatrix * vec4(p - dir * 0.38, 1.0);
  vec2 along = b.xy - a.xy;
  vec2 perp = normalize(vec2(along.y, -along.x) + 1e-5);   // 保持逆时针绕序，避免被背面剔除
  vec4 v = mix(a, b, position.y * 0.5 + 0.5);
  v.xy += perp * position.x * 0.0022;
  vA = (1.0 - smoothstep(6.0, 22.0, -a.z)) * smoothstep(1.2, 3.0, -a.z);
  vViewZ = -v.z;
  vUv = uv;
  gl_Position = projectionMatrix * v;
}`;
const RAIN_FS = /* glsl */ `
${COMMON}
uniform float uRain, uNear, uFar;
uniform sampler2D tDepth; uniform vec2 uRes;
varying float vA, vViewZ; varying vec2 vUv;
void main() {
  // 雨在景深之后绘制，这里用场景深度图手动做遮挡
  float d = texture2D(tDepth, gl_FragCoord.xy / uRes).r;
  float sceneZ = uNear * uFar / (uFar - d * (uFar - uNear));
  if (vViewZ > sceneZ) discard;
  float e = 1.0 - abs(vUv.x * 2.0 - 1.0);
  float a = e * vA * uRain * 0.45;
  gl_FragColor = vec4((uSkyAmb * 2.6 + vec3(0.08)) * a, a);
}`;

// ---------------- 光点 / 萤火虫 ----------------
const GLOW_VS = /* glsl */ `
${COMMON}
attribute vec3 iBase; attribute vec3 iAmp; attribute vec4 iCyc; attribute vec4 iPh; attribute vec2 iSize; // size, drift
uniform vec2 uSpanX;
varying vec2 vUv; varying float vBlink, vDepth;
void main() {
  vec3 p = iBase + iAmp * vec3(sin(iCyc.x * uPhase + iPh.x), sin(iCyc.y * uPhase + iPh.y), sin(iCyc.z * uPhase + iPh.z));
  if (iSize.y > 0.5) p.x = uSpanX.x + (uSpanX.y - uSpanX.x) * fract((iBase.x - uSpanX.x) / (uSpanX.y - uSpanX.x) + iSize.y * uLoop) + iAmp.x * sin(iCyc.x * uPhase + iPh.x);
  vec4 mv = viewMatrix * vec4(p, 1.0);
  mv.xy += position.xy * iSize.x;
  vBlink = 0.5 + 0.5 * sin(iCyc.w * uPhase + iPh.w);
  vDepth = -mv.z;
  vUv = uv;
  gl_Position = projectionMatrix * mv;
}`;
const GLOW_FS = /* glsl */ `
${COMMON}
uniform float uVis, uKind;
varying vec2 vUv; varying float vBlink, vDepth;
void main() {
  float r = length(vUv * 2.0 - 1.0);
  float a = exp(-r * r * 6.0) * smoothstep(1.0, 0.7, r);
  vec3 c;
  if (uKind < 0.5) { // 花粉：被阳光照亮，逆光更亮
    float back = pow(max(dot(normalize(vec3(0.0, 0.0, -1.0)), uLightDir), 0.0), 3.0);
    c = (uLightColor * (0.08 + 0.35 * back) + uSkyAmb * 0.25) * (0.35 + 0.65 * vBlink);
  } else {           // 萤火虫：闪烁的黄绿冷光
    c = vec3(0.75, 1.0, 0.25) * 9.0 * pow(vBlink, 3.0);
  }
  a *= uVis * smoothstep(0.15, 0.6, vDepth);
  gl_FragColor = vec4(c * a, a);
}`;

// ---------------- 花瓣 ----------------
const PETAL_VS = /* glsl */ `
${COMMON}
uniform vec3 uPalMid[4], uPalTip[4];
uniform vec2 uSpanX;
attribute vec3 iBase; attribute vec4 iCyc; attribute vec4 iPh; attribute vec2 iInfo; // size, color
varying vec2 vUv; varying vec3 vCol, vN, vWorld;
void main() {
  vec3 p = iBase;
  p.x = uSpanX.x + (uSpanX.y - uSpanX.x) * fract((iBase.x - uSpanX.x) / (uSpanX.y - uSpanX.x) + iCyc.x * uLoop);
  p.y += 0.25 * sin(iCyc.y * uPhase + iPh.y) + 0.1 * sin(iCyc.z * uPhase * 2.0 + iPh.z);
  float a1 = iCyc.z * uPhase + iPh.x, a2 = iCyc.w * uPhase + iPh.w;
  mat3 r1 = mat3(cos(a1), sin(a1), 0.0, -sin(a1), cos(a1), 0.0, 0.0, 0.0, 1.0);
  mat3 r2 = mat3(1.0, 0.0, 0.0, 0.0, cos(a2), sin(a2), 0.0, -sin(a2), cos(a2));
  vec3 lp = r2 * r1 * vec3(position.x * 0.55, position.y, position.y * position.y * 0.25) * iInfo.x;
  vN = r2 * r1 * vec3(0.0, 0.0, 1.0);
  vWorld = p + lp;
  int ci = int(iInfo.y + 0.5);
  vCol = mix(uPalMid[ci], uPalTip[ci], 0.5);
  vUv = uv * 0.5;   // 花瓣图集 2×2：飘落花瓣固定使用第 0 个变体
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;
const PETAL_FS = /* glsl */ `
${COMMON}
uniform sampler2D uPetal; uniform float uA2C;
varying vec2 vUv; varying vec3 vCol, vN, vWorld;
void main() {
  float a = texture2D(uPetal, vUv).a;
  if (uA2C > 0.5) { a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
  else { if (a < 0.5) discard; a = 1.0; }
  vec3 N = gl_FrontFacing ? vN : -vN;
  vec3 V = normalize(cameraPosition - vWorld);
  float diff = abs(dot(N, uLightDir)) * 0.6 + 0.4;
  float back = pow(max(dot(-V, uLightDir), 0.0), 3.0);
  vec3 col = vCol * (uLightColor * (diff + back * 1.2) + uSkyAmb);
  vec4 f = fogAt(vWorld);
  gl_FragColor = vec4(mix(col, f.rgb, f.a), a);
}`;

// ---------------- 蝴蝶 ----------------
function butterflyGeo() {
  const g = new THREE.BufferGeometry();
  // 两片翅膀（side = ±1），翅根在 x = 0；第三片为细长身体
  const pos = [], uv = [], side = [], idx = [];
  const quad = (pts, uvs, s) => {
    const b = pos.length / 3;
    pts.forEach((p, i) => { pos.push(...p); uv.push(...uvs[i]); side.push(s); });
    idx.push(b, b + 1, b + 2, b, b + 2, b + 3);
  };
  quad([[0, 0, -0.5], [1, 0, -0.5], [1, 0, 0.5], [0, 0, 0.5]], [[0, 1], [1, 1], [1, 0], [0, 0]], 1);
  quad([[0, 0, -0.5], [-1, 0, -0.5], [-1, 0, 0.5], [0, 0, 0.5]], [[0, 1], [1, 1], [1, 0], [0, 0]], -1);
  quad([[-0.05, 0.01, -0.45], [0.05, 0.01, -0.45], [0.05, 0.01, 0.4], [-0.05, 0.01, 0.4]], [[0, 0], [0, 0], [0, 0], [0, 0]], 0);
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  g.setAttribute('aSide', new THREE.Float32BufferAttribute(side, 1));
  g.setIndex(idx);
  return g;
}
const BFLY_VS = /* glsl */ `
${COMMON}
uniform float uVis;
attribute float aSide;
attribute vec3 iBase; attribute vec3 iAmp; attribute vec4 iCyc; attribute vec4 iPh; // cyc: x, y, z, 扇翅
attribute float iSize;
varying vec2 vUv; varying float vSide; varying vec3 vN, vWorld;
void main() {
  float px = iCyc.x * uPhase + iPh.x, py = iCyc.y * uPhase + iPh.y, pz = iCyc.z * uPhase + iPh.z;
  vec3 c = iBase + iAmp * vec3(sin(px) + 0.3 * sin(3.0 * px), sin(py), sin(pz));
  vec3 vel = iAmp * vec3(iCyc.x * (cos(px) + 0.9 * cos(3.0 * px)), 0.0, iCyc.z * cos(pz));
  float yaw = atan(vel.x, vel.z);
  float flap = sin(iCyc.w * uPhase + iPh.w);
  float ang = (0.15 + 1.05 * (0.5 + 0.5 * flap)) * aSide;
  c.y += 0.012 * flap;
  vec3 lp = position;
  if (abs(aSide) > 0.5) lp = vec3(cos(ang) * position.x, abs(sin(ang) * position.x), position.z);
  lp *= iSize * uVis;
  float cy = cos(yaw), sy = sin(yaw);
  lp = vec3(cy * lp.x + sy * lp.z, lp.y, -sy * lp.x + cy * lp.z);
  vWorld = c + lp;
  vN = normalize(vec3(-sin(ang) * aSide * cy, cos(ang), sy * sin(ang) * aSide));
  vUv = uv; vSide = aSide;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;
const BFLY_FS = /* glsl */ `
${COMMON}
uniform sampler2D uWing; uniform float uA2C;
varying vec2 vUv; varying float vSide; varying vec3 vN, vWorld;
void main() {
  vec4 tx = abs(vSide) > 0.5 ? texture2D(uWing, vUv) : vec4(0.05, 0.05, 0.045, 1.0);
  float a = tx.a;
  if (uA2C > 0.5) { a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
  else { if (a < 0.5) discard; a = 1.0; }
  vec3 alb = pow(tx.rgb, vec3(2.2)) * 0.9;
  vec3 N = gl_FrontFacing ? vN : -vN;
  vec3 V = normalize(cameraPosition - vWorld);
  float back = pow(max(dot(-V, uLightDir), 0.0), 3.0);
  vec3 col = alb * (uLightColor * (abs(dot(N, uLightDir)) * 0.7 + 0.3 + back) + uSkyAmb);
  vec4 f = fogAt(vWorld);
  gl_FragColor = vec4(mix(col, f.rgb, f.a), a);
}`;

export function createParticles({ U, tex, cfg, q, rng, cyc, halfH }) {
  const group = new THREE.Group();
  const a2c = q.samples > 0;
  const quad = quadGeo();
  const spanX = new THREE.Vector2(-6, 6);
  const uniforms = {};

  // 雨
  const nR = 7000;
  const rs = new Float32Array(nR * 3);
  for (let i = 0; i < rs.length; i++) rs[i] = rng();
  uniforms.rainCyc = { value: Math.max(1, Math.round((cfg.period * 7.5) / 8)) };
  const rain = mesh(inst(quad, { iSeed: [rs, 3] }, nR), new THREE.ShaderMaterial({
    uniforms: { ...U, uRainCyc: uniforms.rainCyc, tDepth: { value: null }, uRes: { value: new THREE.Vector2(1, 1) }, uNear: { value: 0.05 }, uFar: { value: 6000 } },
    vertexShader: RAIN_VS, fragmentShader: RAIN_FS,
    transparent: true, depthTest: false, depthWrite: false, blending: THREE.AdditiveBlending,
  }));

  // 在镜头前方视野里取一点
  const inView = (dMin, dMax, yMin, yMax) => {
    const d = dMin + (dMax - dMin) * Math.pow(rng(), 1.4);
    const th = (rng() * 2 - 1) * halfH * 0.95;
    return [Math.sin(th) * d, yMin + rng() * (yMax - yMin), -Math.cos(th) * d];
  };
  const glow = (n, kind, place, ampFn, sizeFn, driftFn, twMin, twMax) => {
    const b = new Float32Array(n * 3), am = new Float32Array(n * 3), cy = new Float32Array(n * 4), ph = new Float32Array(n * 4), sz = new Float32Array(n * 2);
    for (let i = 0; i < n; i++) {
      b.set(place(), i * 3);
      am.set(ampFn(), i * 3);
      cy.set([cyc(1 + Math.floor(rng() * 2)), cyc(1 + Math.floor(rng() * 3)), cyc(1 + Math.floor(rng() * 2)), cyc(twMin + Math.floor(rng() * (twMax - twMin)))], i * 4);
      ph.set([rng() * 6.28, rng() * 6.28, rng() * 6.28, rng() * 6.28], i * 4);
      sz.set([sizeFn(), driftFn()], i * 2);
    }
    const vis = { value: 0 };
    const m = mesh(inst(quad, { iBase: [b, 3], iAmp: [am, 3], iCyc: [cy, 4], iPh: [ph, 4], iSize: [sz, 2] }, n), new THREE.ShaderMaterial({
      uniforms: { ...U, uVis: vis, uKind: { value: kind }, uSpanX: { value: spanX } },
      vertexShader: GLOW_VS, fragmentShader: GLOW_FS, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    }));
    m.renderOrder = 4;
    group.add(m);
    return vis;
  };
  const nPollen = Math.round(90 * cfg.pollen);
  if (nPollen > 0) {
    uniforms.pollenVis = glow(nPollen, 0, () => inView(0.6, 9, 0.2, 1.8), () => [0.1 + rng() * 0.4, 0.05 + rng() * 0.2, 0.1 + rng() * 0.3],
      () => 0.0025 + rng() * 0.004, () => (rng() < 0.35 ? cyc(1) : 0), 2, 6);
  }
  const nFly = Math.round(70 * cfg.fireflies);
  if (nFly > 0) {
    uniforms.fireflyVis = glow(nFly, 1, () => inView(1.2, 14, 0.25, 1.3), () => [0.2 + rng() * 0.6, 0.08 + rng() * 0.25, 0.2 + rng() * 0.5],
      () => 0.012 + rng() * 0.01, () => 0, 3, 9);
  }

  // 花瓣
  const nP = Math.max(0, Math.round(cfg.petals));
  if (nP > 0) {
    const weights = ['white', 'pink', 'magenta', 'crimson'].map((k) => Math.max(0, +cfg.colorWeights[k] || 0));
    const wSum = weights.reduce((a, b) => a + b, 0) || 1;
    const b = new Float32Array(nP * 3), cy = new Float32Array(nP * 4), ph = new Float32Array(nP * 4), info = new Float32Array(nP * 2);
    for (let i = 0; i < nP; i++) {
      const p = inView(0.8, 6, 0.3, 1.5);
      p[0] = spanX.x + ((i + rng() * 0.5) / nP) * (spanX.y - spanX.x);
      b.set(p, i * 3);
      cy.set([cyc(1), cyc(1 + Math.floor(rng() * 2)), cyc(2 + Math.floor(rng() * 3)), cyc(3 + Math.floor(rng() * 4))], i * 4);
      ph.set([rng() * 6.28, rng() * 6.28, rng() * 6.28, rng() * 6.28], i * 4);
      let x = rng() * wSum, ci = 0;
      for (let k = 0; k < 4; k++) { if ((x -= weights[k]) <= 0) { ci = k; break; } }
      info.set([0.012 + rng() * 0.008, ci], i * 2);
    }
    const m = mesh(inst(quad, { iBase: [b, 3], iCyc: [cy, 4], iPh: [ph, 4], iInfo: [info, 2] }, nP), new THREE.ShaderMaterial({
      uniforms: { ...U, uPetal: { value: tex.petal }, uA2C: { value: a2c ? 1 : 0 }, uSpanX: { value: spanX } },
      vertexShader: PETAL_VS, fragmentShader: PETAL_FS, side: THREE.DoubleSide, alphaToCoverage: a2c,
    }));
    group.add(m);
  }

  // 蝴蝶
  const nB = Math.max(0, Math.round(cfg.butterflies));
  if (nB > 0) {
    const b = new Float32Array(nB * 3), am = new Float32Array(nB * 3), cy = new Float32Array(nB * 4), ph = new Float32Array(nB * 4), sz = new Float32Array(nB);
    const presets = [[-0.55, 0.95, -2.6], [0.15, 1.1, -4.5]];
    for (let i = 0; i < nB; i++) {
      b.set(presets[i] || inView(2, 7, 0.75, 1.3), i * 3);
      am.set([0.35 + rng() * 0.5, 0.08 + rng() * 0.1, 0.25 + rng() * 0.4], i * 3);
      cy.set([cyc(1), cyc(2 + Math.floor(rng() * 2)), cyc(1 + Math.floor(rng() * 2)), cyc(36 + Math.floor(rng() * 10))], i * 4);
      ph.set([rng() * 6.28, rng() * 6.28, rng() * 6.28, rng() * 6.28], i * 4);
      sz[i] = 0.024 + rng() * 0.008;
    }
    const vis = { value: 0 };
    const m = mesh(inst(butterflyGeo(), { iBase: [b, 3], iAmp: [am, 3], iCyc: [cy, 4], iPh: [ph, 4], iSize: [sz, 1] }, nB), new THREE.ShaderMaterial({
      uniforms: { ...U, uVis: vis, uWing: { value: tex.wing }, uA2C: { value: a2c ? 1 : 0 } },
      vertexShader: BFLY_VS, fragmentShader: BFLY_FS, side: THREE.DoubleSide, alphaToCoverage: a2c,
    }));
    group.add(m);
    uniforms.butterflyVis = vis;
  }
  return { group, rain, uniforms };
}

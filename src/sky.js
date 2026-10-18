// 天空穹顶（渐变、太阳、月亮、星空、循环云层）与远处城市
import * as THREE from 'three';
import { COMMON } from './glsl.js';

const SKY_VS = /* glsl */ `
varying vec3 vWorld;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
  gl_Position.z = gl_Position.w * 0.99999;
}`;

const SKY_FS = /* glsl */ `
${COMMON}
uniform vec3 uSunDisc, uCloudLit, uCloudDark, uMoonDir;
uniform float uSunVis, uStars, uMoon, uTwinkle;
varying vec3 vWorld;
void main() {
  vec3 v = normalize(vWorld - cameraPosition);
  float h = max(v.y, 0.0);
  float mu = dot(v, uSunDir);
  vec3 col = mix(uHorizon, uZenith, pow(h, 0.36));
  col += uGlowColor * (0.22 * pow(max(mu, 0.0), 14.0) + 0.9 * pow(max(mu, 0.0), 90.0)) * (1.0 - 0.6 * h);

  // 星空：按方向划格子，每格最多一颗星，亮度以整数频率闪烁
  if (uStars > 0.01 && v.y > 0.0) {
    vec2 sp = vec2(atan(v.z, v.x), asin(v.y)) * 160.0;
    vec2 cell = floor(sp), f = fract(sp) - 0.5;
    float hs = hash12(cell);
    if (hs > 0.985) {
      vec2 o = vec2(hash12(cell + 3.1), hash12(cell + 7.7)) - 0.5;
      float d = length(f - o * 0.6);
      float tw = 0.65 + 0.35 * sin(uTwinkle * uPhase + hs * 400.0);
      col += vec3(0.85, 0.9, 1.0) * smoothstep(0.12, 0.0, d) * pow((hs - 0.985) / 0.015, 2.0) * 3.0 * tw * uStars * smoothstep(0.0, 0.2, v.y);
    }
  }
  // 月亮
  float md = dot(v, uMoonDir);
  float moonDisc = smoothstep(0.99994, 0.99997, md);
  col += vec3(0.9, 0.93, 1.0) * (moonDisc * 6.0 * (0.85 + 0.15 * vnoise(v.xy * 3000.0)) + pow(max(md, 0.0), 300.0) * 0.25) * uMoon;
  // 太阳（被云遮挡）
  float sunDisc = smoothstep(0.99996, 0.99999, mu);

  float dens = 0.0;
  if (v.y > 0.003) {
    vec2 pw = cameraPosition.xz + v.xz * (CLOUD_H / v.y);
    dens = cloudDensity(pw) * smoothstep(0.003, 0.09, v.y);
    float thin = 1.0 - dens;
    vec3 cc = mix(uCloudDark, uCloudLit, 0.45 + 0.55 * thin);
    cc += uGlowColor * pow(max(mu, 0.0), 5.0) * (0.25 + 0.9 * thin * dens * 4.0) * 0.6;
    col = mix(col, cc, dens * 0.92);
  }
  col += uSunDisc * sunDisc * uSunVis * (1.0 - dens * 0.97);
  // 地平线处与雾色严格一致，城市、花田的雾才能无缝融入天空
  col = mix(fogColorDir(v), col, smoothstep(0.0, 0.1, v.y));
  gl_FragColor = vec4(col, 1.0);
}`;

export function createSky(U) {
  const mat = new THREE.ShaderMaterial({
    uniforms: { ...U, uTwinkle: { value: 7 } },
    vertexShader: SKY_VS, fragmentShader: SKY_FS, side: THREE.BackSide, depthWrite: false,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(5000, 48, 24), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return { mesh, mat };
}

const CITY_VS = /* glsl */ `
${COMMON}
attribute vec3 iPos; attribute vec4 iSize; // 宽, 高, 深, 种子
varying vec3 vLocal, vN, vWorld; varying float vSeed; varying vec4 vFog;
void main() {
  vec3 lp = position * iSize.xyz;
  vWorld = iPos + lp;
  vLocal = lp; vN = normal; vSeed = iSize.w;
  vFog = fogAt(vWorld);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;

const CITY_FS = /* glsl */ `
${COMMON}
uniform float uCityLights;
varying vec3 vLocal, vN, vWorld; varying float vSeed; varying vec4 vFog;
void main() {
  vec3 N = normalize(vN);
  float tone = hash11(vSeed * 13.7);
  vec3 alb = mix(vec3(0.26, 0.28, 0.31), vec3(0.5, 0.49, 0.46), tone);
  vec3 emis = vec3(0.0);
  if (abs(N.y) < 0.5) {
    float hc = abs(N.x) > 0.5 ? vLocal.z : vLocal.x;
    vec2 g = vec2(hc / 3.4, vLocal.y / 3.3);
    vec2 cell = floor(g), f = fract(g);
    vec2 aa = fwidth(g) * 1.2;
    float win = smoothstep(0.18 - aa.x, 0.18 + aa.x, f.x) * smoothstep(0.82 + aa.x, 0.82 - aa.x, f.x)
              * smoothstep(0.25 - aa.y, 0.25 + aa.y, f.y) * smoothstep(0.78 + aa.y, 0.78 - aa.y, f.y);
    win *= step(1.0, cell.y);
    alb = mix(alb, mix(vec3(0.12, 0.15, 0.19), uZenith * 0.6, 0.4), win * 0.75);
    float lit = hash12(cell + vSeed * 17.0 + N.xz * 31.0);
    float on = step(lit, 0.3) * win;
    emis = mix(vec3(1.0, 0.72, 0.38), vec3(1.0, 0.92, 0.78), hash12(cell * 1.7 + vSeed)) * on * (0.4 + 0.6 * hash12(cell + 9.1)) * 1.6 * uCityLights;
  } else {
    alb *= 0.7;
  }
  float ndl = max(dot(N, uLightDir), 0.0);
  vec3 col = alb * (uLightColor * ndl * 0.9 + mix(uGroundAmb, uSkyAmb, N.y * 0.5 + 0.5));
  col = mix(col, vFog.rgb, vFog.a) + emis * (1.0 - vFog.a * 0.8);
  gl_FragColor = vec4(col, 1.0);
}`;

export function createCity(U, rng, halfH) {
  const list = [];
  const addRow = (rMin, rMax, hFn, wMin, wMax, n) => {
    for (let i = 0; i < n; i++) {
      const th = (rng() * 2 - 1) * (halfH + 0.12);
      const r = rMin + rng() * (rMax - rMin);
      const w = wMin + rng() * (wMax - wMin);
      const h = hFn(th);
      list.push([Math.sin(th) * r, 0, -Math.cos(th) * r, w, h, w * (0.7 + rng() * 0.6), rng() * 1000]);
    }
  };
  const cluster = (th) => Math.pow(0.5 + 0.5 * Math.sin(th * 7.0 + 0.6), 2.0) * 0.6 + Math.pow(0.5 + 0.5 * Math.sin(th * 17.0 + 2.0), 3.0) * 0.5;
  addRow(1500, 2600, (th) => 30 + Math.pow(rng(), 1.8) * 120 * (0.3 + cluster(th)) + (rng() < 0.05 ? 80 : 0), 22, 60, 230);
  addRow(1150, 1500, () => 10 + rng() * 22, 25, 70, 180);
  const n = list.length;
  const pos = new Float32Array(n * 3), size = new Float32Array(n * 4);
  list.forEach((b, i) => { pos.set(b.slice(0, 3), i * 3); size.set(b.slice(3), i * 4); });
  const base = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index;
  for (const k of ['position', 'normal']) g.setAttribute(k, base.attributes[k]);
  g.setAttribute('iPos', new THREE.InstancedBufferAttribute(pos, 3));
  g.setAttribute('iSize', new THREE.InstancedBufferAttribute(size, 4));
  g.instanceCount = n;
  const mesh = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: { ...U }, vertexShader: CITY_VS, fragmentShader: CITY_FS }));
  mesh.frustumCulled = false;
  return mesh;
}

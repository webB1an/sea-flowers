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
    // 云的受光边（银边）与底部暗部，增加体积感
    cc += uGlowColor * pow(max(mu, 0.0), 4.0) * dens * 0.5;
    cc *= mix(1.0, 0.86, smoothstep(0.35, 0.95, dens));
    cc += uGlowColor * pow(max(mu, 0.0), 5.0) * (0.25 + 0.9 * thin * dens * 4.0) * 0.6;
    col = mix(col, cc, dens * 0.92);
  }
  // 高层卷云：更稀疏、更高、受落日染色，给天空第二层空间层次
  if (v.y > 0.02) {
    vec2 cw = cameraPosition.xz + v.xz * (CLOUD_H * 2.8 / v.y);
    float c = fbm(cw / 4600.0 - uCloudDrift * (uTime * 1.7) / 4600.0 + 13.7);
    float cir = smoothstep(0.60, 0.88, c) * smoothstep(0.02, 0.16, v.y) * (0.35 + 0.65 * uCloudCover);
    vec3 ccol = mix(uCloudDark, uCloudLit, 0.7) * 1.2;
    ccol = mix(ccol, uGlowColor, pow(max(mu, 0.0), 3.0) * 0.25);
    col = mix(col, ccol, cir * 0.4);
  }
  col += uSunDisc * sunDisc * uSunVis * (1.0 - dens * 0.97);
  // 地平线暖霭：把天空下沿压暖，与雾色/花田空气透视衔接
  float horiz = smoothstep(0.28, 0.0, v.y);
  col = mix(col, fogColorDir(v), horiz * 0.25);
  col += uGlowColor * horiz * (0.06 + 0.3 * pow(max(mu, 0.0), 5.0)) * 0.4;
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
attribute float iType;                    // 0 立面 | 1 屋顶设备 | 2 天线
varying vec3 vLocal, vN, vWorld; varying float vSeed, vType; varying vec4 vFog;
void main() {
  vec3 lp = position * iSize.xyz;
  vWorld = iPos + lp;
  vLocal = lp; vN = normal; vSeed = iSize.w; vType = iType;
  vFog = fogAt(vWorld);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;

const CITY_FS = /* glsl */ `
${COMMON}
uniform float uCityLights;
varying vec3 vLocal, vN, vWorld; varying float vSeed, vType; varying vec4 vFog;
void main() {
  vec3 N = normalize(vN);
  float tone = hash11(vSeed * 13.7);
  float warm = hash11(vSeed * 7.31 + 0.7);
  vec3 alb = mix(vec3(0.24, 0.26, 0.29), vec3(0.46, 0.45, 0.42), tone);   // 冷灰玻璃 / 暖石材
  alb = mix(alb, vec3(0.34, 0.33, 0.30), warm * 0.5);
  vec3 emis = vec3(0.0);
  float win = 0.0;
  if (vType > 1.5) {
    alb = vec3(0.10, 0.10, 0.11);                                          // 天线/桅杆
  } else if (vType > 0.5) {
    alb = mix(vec3(0.16, 0.16, 0.17), vec3(0.28, 0.27, 0.25), tone);       // 屋顶设备
  } else if (abs(N.y) < 0.5) {
    float faceX = step(0.5, abs(N.x));
    float hc = mix(vLocal.x, vLocal.z, faceX);
    float colW = 2.6 + tone * 2.2;
    vec2 g = vec2(hc / colW, vLocal.y / 3.4);
    vec2 cell = floor(g), f = fract(g);
    vec2 aa = fwidth(g) * 1.2;
    // 窗洞：带窗框与竖梃
    float wx = smoothstep(0.16 - aa.x, 0.16 + aa.x, f.x) * smoothstep(0.84 + aa.x, 0.84 - aa.x, f.x);
    float wy = smoothstep(0.26 - aa.y, 0.26 + aa.y, f.y) * smoothstep(0.80 + aa.y, 0.80 - aa.y, f.y);
    win = wx * wy * step(1.0, cell.y);
    vec3 glass = mix(vec3(0.10, 0.14, 0.18), uZenith * 0.55 + 0.10, 0.35 + 0.3 * hash12(cell + vSeed));
    glass = mix(glass, uSkyAmb, 0.25);
    alb = mix(alb, glass, win * 0.8);
    alb *= mix(1.0, 0.86, smoothstep(0.40, 0.5, abs(f.x - 0.5)));          // 竖梃
    alb *= mix(0.88, 1.0, smoothstep(0.0, 0.35, f.y));                     // 楼层带阴影
    // 夜间窗光：亮灯比例随楼栋/朝向变化
    float lit = hash12(cell + vSeed * 17.0 + N.xz * 31.0 + faceX * 5.0);
    float on = step(1.0 - (0.14 + 0.22 * tone), lit) * win;
    vec3 wc = mix(vec3(1.0, 0.62, 0.28), vec3(1.0, 0.86, 0.62), hash12(cell * 1.7 + vSeed));
    emis = wc * on * (0.5 + 0.5 * hash12(cell + 9.1)) * 0.95 * uCityLights;
  } else {
    alb *= 0.75;                                                           // 顶面
  }
  float ndl = max(dot(N, uLightDir), 0.0);
  vec3 amb = mix(uGroundAmb, uSkyAmb, N.y * 0.5 + 0.5);
  alb *= mix(0.75, 1.0, smoothstep(-0.1, 0.9, N.y * 0.5 + 0.5));           // 垂直 AO：底部更暗
  vec3 col = alb * (uLightColor * ndl * 0.95 + amb);
  col = mix(col, vFog.rgb, vFog.a) + emis * (1.0 - vFog.a * 0.85);
  gl_FragColor = vec4(col, 1.0);
}`;

export function createCity(U, rng, halfH) {
  const boxes = [];   // x,y,z, w,h,d, seed, type
  const cluster = (th) => Math.pow(0.5 + 0.5 * Math.sin(th * 7.0 + 0.6), 2.0) * 0.6
    + Math.pow(0.5 + 0.5 * Math.sin(th * 17.0 + 2.0), 3.0) * 0.5;
  const addBuilding = (th, r, h, w, d) => {
    const x = Math.sin(th) * r, z = -Math.cos(th) * r;
    const tiers = rng() < 0.45 ? 3 : 2;
    const splits = tiers === 3 ? [0.55, 0.28, 0.17] : [0.72, 0.28];
    let y = 0, cw = w, cd = d;
    const seed = rng() * 1000;
    for (let t = 0; t < tiers; t++) {
      const th2 = h * splits[t] * (0.85 + rng() * 0.3);
      boxes.push([x, y, z, cw, th2, cd, seed, 0]);       // 立面段（退台）
      y += th2;
      cw *= 0.62 + rng() * 0.2; cd *= 0.62 + rng() * 0.2;
    }
    // 屋顶设备 + 天线/桅杆
    boxes.push([x, y, z, cw * (0.35 + rng() * 0.3), 1.5 + rng() * 3.5, cd * (0.35 + rng() * 0.3), rng() * 1000, 1]);
    if (rng() < 0.45) boxes.push([x, y + 2.0, z, 0.9, 4 + rng() * 10, 0.9, rng() * 1000, 2]);
  };
  // 远排高层（天际线主体）
  for (let i = 0; i < 230; i++) {
    const th = (rng() * 2 - 1) * (halfH + 0.12), r = 1500 + rng() * 1100;
    const h = 30 + Math.pow(rng(), 1.8) * 120 * (0.3 + cluster(th)) + (rng() < 0.05 ? 80 : 0);
    addBuilding(th, r, h, 22 + rng() * 38, 22 + rng() * 38);
  }
  // 中排（错落，压低天际线）
  for (let i = 0; i < 180; i++) {
    const th = (rng() * 2 - 1) * (halfH + 0.10), r = 1150 + rng() * 350;
    addBuilding(th, r, 10 + rng() * 22, 25 + rng() * 45, 25 + rng() * 45);
  }
  // 近排低层（城市边缘，增强距离层次）
  for (let i = 0; i < 90; i++) {
    const th = (rng() * 2 - 1) * (halfH + 0.08), r = 900 + rng() * 250;
    addBuilding(th, r, 6 + rng() * 12, 30 + rng() * 40, 30 + rng() * 40);
  }
  const n = boxes.length;
  const pos = new Float32Array(n * 3), size = new Float32Array(n * 4), type = new Float32Array(n);
  boxes.forEach((b, i) => {
    pos.set(b.slice(0, 3), i * 3);
    size.set(b.slice(3, 7), i * 4);
    type[i] = b[7];
  });
  const base = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index;
  for (const k of ['position', 'normal']) g.setAttribute(k, base.attributes[k]);
  g.setAttribute('iPos', new THREE.InstancedBufferAttribute(pos, 3));
  g.setAttribute('iSize', new THREE.InstancedBufferAttribute(size, 4));
  g.setAttribute('iType', new THREE.InstancedBufferAttribute(type, 1));
  g.instanceCount = n;
  const mesh = new THREE.Mesh(g, new THREE.ShaderMaterial({ uniforms: { ...U }, vertexShader: CITY_VS, fragmentShader: CITY_FS }));
  mesh.frustumCulled = false;
  return mesh;
}

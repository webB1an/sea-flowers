// 花田：草丛（实例化交叉面片）、花朵 / 花苞（实例化几何体）、地面、远处树线
import * as THREE from 'three';
import { COMMON, LIGHTING } from './glsl.js';
import { SHADOW } from './shader/index.js';

const lin = (hex) => new THREE.Color(hex);

// ---------------- 几何体 ----------------
class Builder {
  constructor() { this.pos = []; this.nrm = []; this.uv = []; this.part = []; this.idx = []; }
  v(p, n, uv, part) {
    this.pos.push(p[0], p[1], p[2]); this.nrm.push(n[0], n[1], n[2]); this.uv.push(uv[0], uv[1]); this.part.push(part);
    return this.pos.length / 3 - 1;
  }
  grid(cols, rows, fn, part) { // fn(u, t) => { p, n }
    const base = this.pos.length / 3;
    for (let j = 0; j <= rows; j++) for (let k = 0; k <= cols; k++) {
      const u = k / cols, t = j / rows; const { p, n } = fn(u, t);
      this.v(p, n, [u, t], part);
    }
    for (let j = 0; j < rows; j++) for (let k = 0; k < cols; k++) {
      const a = base + j * (cols + 1) + k, b = a + 1, c = a + cols + 1, d = c + 1;
      this.idx.push(a, c, b, b, c, d);
    }
  }
  build() {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(this.nrm, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute('aPart', new THREE.Float32BufferAttribute(this.part, 1));
    g.setIndex(this.idx);
    return g;
  }
}

// 三片 60° 交叉的竖直面片，每片 seg 段，便于弯曲；seg=8 用于近景高细节草
function grassCardGeometry(seg = 6) {
  const b = new Builder();
  for (let i = 0; i < 3; i++) {
    const a = (i * Math.PI) / 3, c = Math.cos(a), s = Math.sin(a);
    b.grid(2, seg, (u, t) => ({ p: [(u - 0.5) * c, t, (u - 0.5) * s], n: [-s, 0, c] }), 0);
  }
  return b.build();
}

function stem(b) {
  // 六棱柱近似圆柱（着色器里按花头半径缩放），比十字面片更有体积
  const sides = 6, segs = 6;
  b.grid(sides, segs, (u, t) => {
    const a = u * Math.PI * 2;
    return { p: [Math.cos(a), t, Math.sin(a)], n: [Math.cos(a), 0, Math.sin(a)] };
  }, 0);
}

// 花头坐标系：Y 为花朝向，单位半径 1（着色器里乘以花头半径）
// part：0 茎 | 1 外瓣 | 2 花心 | 3 花苞 | 4 萼片 | 5 内瓣
function flowerGeometry() {
  const b = new Builder();
  stem(b);

  // 外层 8 瓣：杯状弯曲 + 基部收窄 + 边缘下卷
  const n = 8, r0 = 0.1;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + Math.sin(i * 7.3) * 0.1;
    const dx = Math.cos(a), dz = Math.sin(a), px = -dz, pz = dx;
    const len = 0.92 + 0.12 * Math.abs(Math.sin(i * 3.1 + 0.7));
    const cup = 0.16 + 0.1 * Math.abs(Math.sin(i * 5.7));
    const tilt = Math.sin(i * 2.3) * 0.1;
    const w = 0.8;
    b.grid(3, 6, (u, t) => {
      const rr = r0 + (len - r0) * t;
      const profile = 0.18 + 0.82 * Math.pow(t, 0.5);    // 基部窄、中上部宽（倒卵形）
      const across = (u - 0.5) * w * profile;
      const edge = Math.abs(u - 0.5) * 2;
      const y = cup * t * t + tilt * t + 0.035 * Math.sin(u * Math.PI) * t
        - 0.10 * edge * edge * t * t                          // 边缘下卷
        + 0.03 * Math.pow(t, 3.0) * Math.cos(edge * Math.PI);
      const slope = 2 * cup * t + tilt;
      const curl = 0.22 * edge * t;                           // 横向卷边法线
      const nn = new THREE.Vector3(-dx * slope + px * curl, 1, -dz * slope + pz * curl).normalize();
      return { p: [dx * rr + px * across, y, dz * rr + pz * across], n: [nn.x, nn.y, nn.z] };
    }, 1);
  }

  // 内层 6 瓣：更短、更立，制造层叠厚度
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2 + 0.35;
    const dx = Math.cos(a), dz = Math.sin(a), px = -dz, pz = dx;
    const len = 0.52 + 0.06 * Math.sin(i * 4.1), cup = 0.3;
    b.grid(2, 4, (u, t) => {
      const rr = r0 * 0.55 + (len - r0 * 0.55) * t;
      const profile = 0.25 + 0.75 * Math.pow(t, 0.6);
      const across = (u - 0.5) * 0.6 * profile;
      const y = 0.03 + cup * t * t + 0.02 * Math.sin(u * Math.PI) * t;
      const slope = 2 * cup * t;
      const nn = new THREE.Vector3(-dx * slope, 1, -dz * slope).normalize();
      return { p: [dx * rr + px * across, y, dz * rr + pz * across], n: [nn.x, nn.y, nn.z] };
    }, 5);
  }

  // 花心：低矮圆顶（带环状隆起）+ 外圈 12 枚花药小锥
  const rings = 3, seg = 16, R = 0.2;
  const center = b.v([0, 0.09, 0], [0, 1, 0], [0.5, 0.5], 2);
  let prev = null;
  for (let rI = 1; rI <= rings; rI++) {
    const rr = (rI / rings) * R, ring = [];
    for (let s = 0; s < seg; s++) {
      const a = (s / seg) * Math.PI * 2;
      const bump = 0.012 * Math.sin(a * 12 + rI * 1.7) + 0.008 * Math.sin(a * 5 + rI);
      const x = Math.cos(a) * rr, z = Math.sin(a) * rr;
      const y = 0.075 * (1 - (rr / R) * (rr / R)) + 0.012 + bump;
      const nn = new THREE.Vector3(x * 2, 1, z * 2).normalize();
      ring.push(b.v([x, y, z], [nn.x, nn.y, nn.z], [0.5 + x, 0.5 + z], 2));
    }
    for (let s = 0; s < seg; s++) {
      const s2 = (s + 1) % seg;
      if (!prev) b.idx.push(center, ring[s2], ring[s]);
      else b.idx.push(prev[s], prev[s2], ring[s], prev[s2], ring[s2], ring[s]);
    }
    prev = ring;
  }
  for (let i = 0; i < 12; i++) {
    const a = (i / 12) * Math.PI * 2 + 0.13;
    const rr = 0.155, x = Math.cos(a) * rr, z = Math.sin(a) * rr;
    const y = 0.075 * (1 - (rr / R) * (rr / R)) + 0.012;
    const tip = b.v([x * 1.18, y + 0.055, z * 1.18], [0, 1, 0], [0.5, 0.5], 2);
    const baseRing = [];
    for (let k = 0; k < 3; k++) {
      const aa = a + (k / 3) * Math.PI * 2;
      baseRing.push(b.v([x + Math.cos(aa) * 0.012, y, z + Math.sin(aa) * 0.012], [Math.cos(aa), 0.3, Math.sin(aa)], [0.5, 0.5], 2));
    }
    b.idx.push(baseRing[0], tip, baseRing[1], baseRing[1], tip, baseRing[2], baseRing[2], tip, baseRing[0]);
  }
  return b.build();
}

function budGeometry() {
  const b = new Builder();
  stem(b);
  // 花苞：竖长的椭球
  const lat = 7, lon = 10;
  b.grid(lon, lat, (u, t) => {
    const th = t * Math.PI, ph = u * Math.PI * 2;
    const x = Math.sin(th) * Math.cos(ph) * 0.42, z = Math.sin(th) * Math.sin(ph) * 0.42, y = 0.5 - Math.cos(th) * 0.55;
    const nn = new THREE.Vector3(x / 0.42, (y - 0.5) / 0.55, z / 0.42).normalize();
    return { p: [x, y, z], n: [nn.x, nn.y, nn.z] };
  }, 3);
  // 萼片
  for (let i = 0; i < 7; i++) {
    const a = (i / 7) * Math.PI * 2, dx = Math.cos(a), dz = Math.sin(a);
    b.grid(1, 3, (u, t) => {
      const w = (u - 0.5) * 0.22 * (1 - t);
      return { p: [dx * (0.1 + 0.55 * t) - dz * w, 0.12 + 0.25 * t - 0.15 * t * t, dz * (0.1 + 0.55 * t) + dx * w], n: [dx * 0.3, 1, dz * 0.3] };
    }, 4);
  }
  return b.build();
}

function instanced(base, attrs, count) {
  const g = new THREE.InstancedBufferGeometry();
  g.index = base.index;
  for (const k of Object.keys(base.attributes)) g.setAttribute(k, base.attributes[k]);
  for (const [k, [arr, size]] of Object.entries(attrs)) g.setAttribute(k, new THREE.InstancedBufferAttribute(arr, size));
  g.instanceCount = count;
  return g;
}

// ---------------- 着色器 ----------------
const GRASS_VS = /* glsl */ `
${COMMON}
uniform float uVariants;
attribute vec3 iPos;
attribute vec4 iData;   // 宽, 高, 朝向, 图集变体
attribute vec2 iData2;  // 色调, 相位
varying vec2 vUv; centroid varying float vS, vTint, vShadow, vGust;
centroid varying vec3 vN, vWorld; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  float s = position.y;
  float cy = cos(iData.z), sy = sin(iData.z);
  float taper = mix(1.0, 0.3, s * s);              // 叶尖收窄，避免矩形纸片轮廓
  vec3 lp = vec3(position.x * iData.x * taper, position.y * iData.y, position.z * iData.x * taper);
  lp = vec3(cy * lp.x - sy * lp.z, lp.y, sy * lp.x + cy * lp.z);
  vec2 disp = windDisp(iPos.xz, iData2.y, iData.y);
  float bend = pow(s, 1.6);
  lp.xz += disp * bend;
  lp.y -= dot(disp, disp) / (2.0 * iData.y) * bend * bend;
  vec3 wp = iPos + lp;
  vec3 nr = vec3(cy * normal.x - sy * normal.z, 0.0, sy * normal.x + cy * normal.z);
  vec3 sph = normalize(vec3(lp.x, (s - 0.3) * iData.y, lp.z) + vec3(0.0, 0.001, 0.0));
  vN = normalize(mix(nr, sph, 0.65));
  vShadowCoord = uShadowMatrix * vec4(wp + vN * 0.02, 1.0);
  vUv = vec2((uv.x + iData.w) / uVariants, uv.y);
  vS = s; vTint = iData2.x; vWorld = wp;
  vShadow = cloudShadowAt(wp);
  vGust = gust(iPos.xz);
  vFog = fogAt(wp);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`;

const GRASS_FS = /* glsl */ `
${COMMON}
${LIGHTING}
${SHADOW}
uniform sampler2D uAtlas;
uniform vec3 uDark, uLight;
uniform float uA2C;
varying vec2 vUv; centroid varying float vS, vTint, vShadow, vGust;
centroid varying vec3 vN, vWorld; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  vec4 tx = texture2D(uAtlas, vUv);
  float a = tx.a;
  vec2 g = vUv * vec2(2048.0, 512.0);
  float lod = log2(max(length(dFdx(g)), length(dFdy(g))));
  a *= 1.0 + max(lod, 0.0) * 0.3;    // 远处 mip 平均后覆盖率下降，按 mip 级别补偿
  if (uA2C > 0.5) { a = clamp((a - 0.42) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
  else { if (a < 0.45) discard; a = 1.0; }
  // MSAA 下极细三角形的插值可能外推，统一钳制
  float S = clamp(vS, 0.0, 1.0), sh = clamp(vShadow, 0.0, 1.0);
  vec4 fog = clamp(vFog, 0.0, 8.0); fog.a = min(fog.a, 1.0);
  float L = tx.r;
  vec3 albedo = mix(uDark, uLight, clamp(L * 0.9 + vTint * 0.4 - 0.2 + vGust * 0.06, 0.0, 1.0));
  albedo = mix(albedo, vec3(0.21, 0.25, 0.05), smoothstep(0.6, 1.0, vTint) * 0.28);  // 枯黄/暖调草丛
  albedo *= mix(1.0, 0.78, uWet);
  float ao = mix(0.18, 1.0, smoothstep(0.05, 0.95, S));
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 n0 = normalize(vN + vec3(0.0, 1e-4, 0.0));
  vec3 N = gl_FrontFacing ? n0 : vec3(-n0.x, n0.y, -n0.z);
  sh *= shadowVisibility(vShadowCoord, N);
  vec3 col = shadePlant(albedo, N, V, ao, 0.55 * S * S, sh, 0.8, 0.0);   // 叶尖逆光透亮
  col = mix(col, fog.rgb, fog.a);
  gl_FragColor = vec4(col, a);
}`;

const FLOWER_VS = /* glsl */ `
${COMMON}
uniform vec3 uPalBase[4], uPalMid[4], uPalTip[4];
attribute float aPart;
attribute vec3 iPos;
attribute vec4 iHead;   // 朝向 xyz, 花头半径
attribute vec4 iData;   // 茎高, 颜色序号, 相位, 自转
attribute float iSway;
varying vec2 vUv, vPetalUv; varying float vPart, vCi, vPetalId, vInner, vTint; centroid varying float vShadow;
centroid varying vec3 vN, vWorld; varying vec3 vBase, vMid, vTip; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  float h = iData.x;
  vCi = iData.y;
  float innerPetal = (aPart > 4.5 && aPart < 5.5) ? 1.0 : 0.0;
  vInner = innerPetal;
  vTint = 0.92 + 0.16 * hash11(iData.z * 5.1 + 0.3);
  vPetalId = floor(atan(position.z, position.x) / mix(0.785398, 1.047198, innerPetal) + 0.5) + iData.z * 13.0;
  // 花瓣图集 2×2：每朵花随机选一个变体（其余部件仍用 uv 做渐变）
  float isPetal = ((aPart > 0.5 && aPart < 1.5) || innerPetal > 0.5) ? 1.0 : 0.0;
  if (isPetal > 0.5) {
    float vid = floor(hash11(iData.z * 3.7 + 0.13) * 4.0);
    vec2 cell = vec2(mod(vid, 2.0), floor(vid * 0.5)) * 0.5;
    vPetalUv = cell + uv * 0.5;
  } else { vPetalUv = uv; }
  vec2 disp = windDisp(iPos.xz, iData.z, h) * iSway;
  vec3 dv = vec3(disp.x, 0.0, disp.y);
  float drop = dot(disp, disp) / (2.0 * h);
  vec3 wp, N;
  if (aPart < 0.5) {
    float s = position.y;
    vec3 c = iPos + vec3(0.0, s * h, 0.0) + dv * s * s;
    c.y -= drop * s * s;
    float w = (0.0012 + iHead.w * 0.022) * mix(1.0, 0.7, s);
    wp = c + vec3(position.x, 0.0, position.z) * w;
    N = normalize(vec3(normal.x, 0.25, normal.z));
  } else {
    vec3 top = iPos + vec3(0.0, h, 0.0) + dv; top.y -= drop;
    vec3 f = normalize(iHead.xyz + dv * 2.2 / h);
    f = normalize(f + 0.06 * sin(uFlutterCyc.x * uPhase + iData.z * 2.3) * vec3(WIND_DIR.x, 0.0, WIND_DIR.y));
    vec3 t = normalize(cross(abs(f.y) < 0.95 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0), f));
    vec3 b = cross(f, t);
    float cs = cos(iData.w), sn = sin(iData.w);
    vec3 t2 = t * cs + b * sn, b2 = b * cs - t * sn;
    vec3 lp = position, nl = normal;
    if (isPetal > 0.5) {
      // 每朵花、每片花瓣：长短、杯状弯曲、绕中脉扭转各不相同
      float sect = mix(0.785398, 1.047198, innerPetal);
      float ang = atan(position.z, position.x), rr = length(position.xz);
      float pa = floor(ang / sect + 0.5) * sect;
      vec2 perp = vec2(-sin(pa), cos(pa));
      float across = dot(position.xz, perp);
      float pi = floor(ang / sect + 0.5);
      float twist = (hash11(pi * 3.7 + iData.z * 11.1) - 0.5) * mix(0.9, 0.45, innerPetal);
      float k = hash11(iData.z * 7.13);
      lp.xz *= 1.0 + 0.1 * sin(ang * 3.0 + iData.z * 5.0) + 0.06 * sin(ang * 5.0 + iData.w * 3.0);
      lp.y += (k * 0.24 - 0.06) * rr * rr * mix(1.0, 0.8, innerPetal) + twist * across * rr + 0.012 * mod(pi, 2.0);
      nl = normalize(nl - vec3(perp.x, 0.0, perp.y) * twist * rr * 1.5);
    }
    lp *= iHead.w;
    wp = top + t2 * lp.x + f * lp.y + b2 * lp.z;
    N = normalize(t2 * nl.x + f * nl.y + b2 * nl.z);
  }
  vShadowCoord = uShadowMatrix * vec4(wp + N * 0.015, 1.0);
  int ci = int(iData.y + 0.5);
  vBase = uPalBase[ci]; vMid = uPalMid[ci]; vTip = uPalTip[ci];
  vUv = uv; vPart = aPart; vN = N; vWorld = wp;
  vShadow = cloudShadowAt(wp);
  vFog = fogAt(wp);
  gl_Position = projectionMatrix * viewMatrix * vec4(wp, 1.0);
}`;

const FLOWER_FS = /* glsl */ `
${COMMON}
${LIGHTING}
${SHADOW}
uniform sampler2D uPetal;
uniform float uA2C;
varying vec2 vUv, vPetalUv; varying float vPart, vCi, vPetalId, vInner, vTint; centroid varying float vShadow;
centroid varying vec3 vN, vWorld; varying vec3 vBase, vMid, vTip; centroid varying vec4 vFog;
varying vec4 vShadowCoord;
void main() {
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 n0 = normalize(vN + vec3(0.0, 1e-4, 0.0));
  vec3 N = gl_FrontFacing ? n0 : -n0;
  float vShadowC = clamp(vShadow, 0.0, 1.0);
  float sunVis = vShadowC * shadowVisibility(vShadowCoord, N);
  vec4 vFogC = clamp(vFog, 0.0, 8.0); vFogC.a = min(vFogC.a, 1.0);
  vec3 col; float a = 1.0;
  if (vPart < 0.5) {               // 茎
    col = shadePlant(vec3(0.13, 0.24, 0.05), N, V, 0.85, 0.8, sunVis, 0.85, 0.08);
  } else if (vPart < 1.5 || (vPart > 4.5 && vPart < 5.5)) {        // 花瓣（外瓣 / 内瓣）
    float inner = vInner;
    vec4 tx = texture2D(uPetal, vPetalUv);
    a = tx.a;
    if (uA2C > 0.5) { a = clamp((a - 0.5) / max(fwidth(a), 1e-4) + 0.5, 0.0, 1.0); if (a < 0.02) discard; }
    else { if (a < 0.5) discard; a = 1.0; }
    float thick = clamp(tx.b, 0.0, 1.0);
    float thin = 1.0 - thick;
    vec3 alb = mix(vBase, vMid, smoothstep(0.0, 0.32, vUv.y));
    alb = mix(alb, vTip, smoothstep(0.35, 1.0, vUv.y));
    alb *= mix(0.5, 1.0, tx.r);                             // 纵向沟纹
    alb *= mix(0.7, 1.0, smoothstep(0.3, 0.8, tx.g));       // 边缘略深，单片花瓣轮廓更清楚
    alb *= 0.88 + 0.24 * hash11(vPetalId);                   // 每片花瓣明暗略有差异
    alb *= vTint * mix(1.0, 0.82, inner);                    // 每朵花色温/明度轻微不同；内瓣略暗
    float back = gl_FrontFacing ? mix(1.0, 0.86, inner) : 0.82;
    float near = 1.0 - vFogC.a;
    vec3 L = uLightDir;
    float diff = max(dot(N, L) * 0.5 + 0.5, 0.0);
    float layer = mod(floor(vPetalId + 0.5), 2.0) < 0.5 ? 0.72 : 1.0;
    float veinT = 0.25 + 0.75 * tx.r * tx.r;
    float edgeT = mix(1.25, 1.0, smoothstep(0.3, 0.8, tx.g));
    float trans = pow(max(dot(-V, L), 0.0), 3.0) * veinT * edgeT * layer * near
      * mix(0.5, 1.1, thin) * mix(1.0, 0.55, inner);
    vec3 sun = uLightColor * sunVis * (diff * 0.8 + trans * 1.1);
    vec3 amb = plantAmbient(N, mix(0.75, 1.0, layer) * mix(1.0, 0.7, inner));
    col = alb * back * (sun + amb);
    col += alb * trans * uLightColor * 0.25;                 // 透光带一点花瓣本色
    col += uSkyAmb * alb * pow(1.0 - abs(dot(N, V)), 3.0) * 0.35;
    col += alb * plantSpecEnv(N, V, 0.35, 0.3);
  } else if (vPart < 2.5) {        // 花心：密集的管状小花 + 突出的深色花药
    vec2 q = (vUv - 0.5) * 5.0;                // 约 ±1
    float rr = length(q);
    float cells = vnoise(vUv * 95.0), cells2 = vnoise(vUv * 160.0 + 7.0);
    vec3 alb = mix(vec3(0.42, 0.2, 0.01), vec3(0.72, 0.48, 0.03), smoothstep(0.35, 0.75, cells));
    alb = mix(alb, vec3(0.62, 0.62, 0.08), smoothstep(0.35, 0.0, rr) * 0.5);   // 中心未开的小花偏绿
    float anther = smoothstep(0.72, 0.9, cells2) * smoothstep(0.25, 0.6, rr);
    alb = mix(alb, vec3(0.05, 0.03, 0.01), anther);
    alb *= mix(0.6, 1.0, smoothstep(1.05, 0.7, rr));                            // 边缘阴影
    col = shadePlant(alb, N, V, 0.85, 0.15, sunVis, 0.65, 0.22);
  } else if (vPart < 3.5) {        // 花苞
    int bi = int(vCi + 0.5);
    vec3 lo = bi == 0 ? vec3(0.28, 0.01, 0.06) : (bi == 1 ? vec3(0.12, 0.22, 0.05) : vec3(0.72, 0.42, 0.36));
    vec3 hi = bi == 0 ? vec3(0.62, 0.06, 0.2) : (bi == 1 ? vec3(0.5, 0.62, 0.22) : vec3(0.98, 0.85, 0.76));
    col = shadePlant(mix(lo, hi, smoothstep(0.1, 0.95, vUv.y)), N, V, 0.9, 0.25 * (1.0 - vFogC.a), sunVis, 0.8, 0.12);
  } else {                         // 萼片
    col = shadePlant(vec3(0.12, 0.25, 0.06), N, V, 0.85, 0.5, sunVis, 0.85, 0.06);
  }
  col = min(col, vec3(8.0));
  col = mix(col, vFogC.rgb, vFogC.a);
  gl_FragColor = vec4(col, a);
}`;

const GROUND_VS = /* glsl */ `
${COMMON}
varying vec3 vWorld;
varying vec4 vShadowCoord;
void main() {
  vWorld = (modelMatrix * vec4(position, 1.0)).xyz;
  vShadowCoord = uShadowMatrix * vec4(vWorld + vec3(0.0, 0.01, 0.0), 1.0);
  gl_Position = projectionMatrix * viewMatrix * vec4(vWorld, 1.0);
}`;
const GROUND_FS = /* glsl */ `
${COMMON}
${LIGHTING}
${SHADOW}
varying vec3 vWorld;
varying vec4 vShadowCoord;
void main() {
  // 土壤/草地混合：低频斑块 + 细碎枯叶/土粒 + 草根暗部
  float n1 = fbm3(vWorld.xz * 0.7);
  float n2 = fbm3(vWorld.xz * 0.09 + 11.0);
  float n3 = fbm3(vWorld.xz * 0.013 + 3.0);
  float fine = vnoise(vWorld.xz * 6.0), fine2 = vnoise(vWorld.xz * 23.0);
  vec3 soil = mix(vec3(0.032, 0.026, 0.016), vec3(0.105, 0.078, 0.045), n2);
  vec3 green = mix(vec3(0.030, 0.058, 0.016), vec3(0.088, 0.132, 0.042), n1);
  float bare = smoothstep(0.5, 0.8, n2 + n3 * 0.5);
  vec3 alb = mix(green, soil, bare * 0.82);
  alb += (fine2 - 0.5) * 0.018;                                            // 土粒细碎明暗
  alb = mix(alb, vec3(0.17, 0.12, 0.05), smoothstep(0.84, 0.96, fine) * 0.14); // 枯叶点
  alb *= mix(1.0, 0.7, uWet);
  float dens = 0.5 + 0.5 * sin(vWorld.x * 0.14 + sin(vWorld.z * 0.09) * 2.2);
  alb *= mix(0.62, 1.0, smoothstep(0.15, 0.85, dens * 0.55 + n1 * 0.45));   // 草根处更暗
  vec3 V = normalize(cameraPosition - vWorld);
  vec3 N = vec3(0.0, 1.0, 0.0);
  float vis = shadowVisibility(vShadowCoord, N);
  vec3 col = shadePlant(alb, N, V, 0.42, 0.0, cloudShadowAt(vWorld) * vis, 0.95, 0.0);
  vec4 f = fogAt(vWorld);
  gl_FragColor = vec4(mix(col, f.rgb, f.a), 1.0);
}`;

function grassMaterial(U, tex, a2c, dark, light) {
  return new THREE.ShaderMaterial({
    uniforms: { ...U, uAtlas: { value: tex.atlas }, uDark: { value: lin(dark) }, uLight: { value: lin(light) }, uA2C: { value: a2c ? 1 : 0 }, uVariants: { value: 6 } },
    vertexShader: GRASS_VS, fragmentShader: GRASS_FS, side: THREE.DoubleSide, alphaToCoverage: a2c,
  });
}

// ---- 阴影投射材质：复用同一套顶点着色器（风/实例化一致），只做 alpha cutout 后写深度 ----
const GRASS_SHADOW_FS = /* glsl */ `
uniform sampler2D uAtlas;
varying vec2 vUv;
void main() {
  if (texture2D(uAtlas, vUv).a < 0.45) discard;
  gl_FragColor = vec4(1.0);
}`;
const FLOWER_SHADOW_FS = /* glsl */ `
uniform sampler2D uPetal;
varying vec2 vPetalUv;
varying float vPart;
void main() {
  bool petal = (vPart > 0.5 && vPart < 1.5) || (vPart > 4.5 && vPart < 5.5);
  if (petal && texture2D(uPetal, vPetalUv).a < 0.5) discard;
  gl_FragColor = vec4(1.0);
}`;
function grassShadowMaterial(U, tex) {
  return new THREE.ShaderMaterial({
    uniforms: { ...U, uAtlas: { value: tex.atlas } },
    vertexShader: GRASS_VS, fragmentShader: GRASS_SHADOW_FS, side: THREE.DoubleSide,
  });
}
function flowerShadowMaterial(U, tex) {
  return new THREE.ShaderMaterial({
    uniforms: { ...U, uPetal: { value: tex.petal } },
    vertexShader: FLOWER_VS, fragmentShader: FLOWER_SHADOW_FS, side: THREE.DoubleSide,
  });
}

// ---------------- 布局 ----------------
// 在镜头视野扇区内撒点：半径均匀分布（远处每平方米更稀，但屏幕上刚好铺满），
// 近处再按 r / ramp 降低密度，避免镜头前过度堆叠
function sector(rng, rMin, rMax, halfAngle, ramp = 0) {
  let r;
  do { r = rMin + (rMax - rMin) * rng(); } while (ramp > 0 && rng() > Math.min(1, r / ramp));
  const marg = Math.atan(0.5 / Math.max(r, 0.05));
  const th = (rng() * 2 - 1) * (halfAngle + 0.1 + marg);
  return { r, th, x: Math.sin(th) * r, z: -Math.cos(th) * r };
}

const HERO_SPECS = [
  // 屏幕坐标 sx, sy（0–1，左上为原点），R 为花头半径占屏高比例，d 为水平距离（米）
  { col: 3, sx: 0.805, sy: 0.585, R: 0.072, d: 1.0, turn: -0.35, up: 0.55, spin: 0.7 },
  { col: 2, sx: 0.70, sy: 0.50, R: 0.098, d: 0.86, turn: 0.15, up: 0.35, spin: 0.2 },
  { col: 1, sx: 0.585, sy: 0.655, R: 0.055, d: 1.12, turn: 0.25, up: 0.45, spin: 1.3 },
];
const HERO_BUDS = [
  { type: 0, sx: 0.758, sy: 0.455, R: 0.026, d: 0.95 },
  { type: 1, sx: 0.645, sy: 0.735, R: 0.02, d: 1.05 },
  { type: 2, sx: 0.862, sy: 0.705, R: 0.022, d: 1.0 },
];

function screenToWorld(camera, sx, sy, d) {
  const v = new THREE.Vector3(sx * 2 - 1, 1 - sy * 2, 0.5).unproject(camera).sub(camera.position).normalize();
  const k = d / Math.max(0.05, -v.z);
  return { p: camera.position.clone().addScaledVector(v, k), dist: k };
}

export function createField({ U, tex, cfg, q, rng, camera, aspect }) {
  const group = new THREE.Group();
  const a2c = q.samples > 0;
  const halfH = Math.atan(Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * aspect);
  const tanHalfV = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));

  // ---- 前景大花（先算出来，好让近处草丛避开它们）----
  const heroes = [], heroBoxes = [];
  if (cfg.heroes) {
    for (const s of HERO_SPECS) {
      const { p, dist } = screenToWorld(camera, s.sx, s.sy, s.d);
      const R = s.R * 2 * tanHalfV * dist * cfg.heroSize;
      const toCam = camera.position.clone().sub(p).setY(0).normalize();
      const side = new THREE.Vector3(-toCam.z, 0, toCam.x);
      const facing = toCam.clone().addScaledVector(side, s.turn).add(new THREE.Vector3(0, s.up, 0)).normalize();
      heroes.push({ base: new THREE.Vector3(p.x - 0.015, 0, p.z + 0.02), h: p.y, facing, R, col: s.col, spin: s.spin });
      heroBoxes.push({ sx: s.sx, sy: s.sy, r: s.R * cfg.heroSize * 1.6, d: s.d });
    }
    for (const s of HERO_BUDS) {
      const { p, dist } = screenToWorld(camera, s.sx, s.sy, s.d);
      heroes.push({ bud: true, base: new THREE.Vector3(p.x, 0, p.z + 0.01), h: p.y, facing: new THREE.Vector3(0.1, 1, 0.25).normalize(), R: s.R * 2 * tanHalfV * dist * cfg.heroSize, type: s.type });
    }
  }
  const tmp = new THREE.Vector3();
  // 草丛顶端若会挡住某朵大花，返回 true
  const blocksHero = (x, y, z, r) => {
    for (const b of heroBoxes) {
      if (r > b.d + 0.05) continue;
      tmp.set(x, y, z).project(camera);
      const sx = tmp.x * 0.5 + 0.5, sy = 0.5 - tmp.y * 0.5;
      if (Math.abs(sx - b.sx) * aspect < b.r + 0.1 && sy < b.sy + b.r * 0.8) return true;
    }
    return false;
  };

  // ---- 草丛：低频密度场 + 分簇分布（小径/空地由密度低值自然形成）----
  const nG = Math.round(q.grass * Math.max(0.2, cfg.grassDensity));
  const gPos = new Float32Array(nG * 3), gD = new Float32Array(nG * 4), gD2 = new Float32Array(nG * 2);
  // 阴影投射子集：近中景（0–26m）才有必要进 shadow map，限制数量控制 shadow pass 开销
  const SHADOW_GRASS_R = 0, SHADOW_GRASS_MAX = 0;
  const shG = { pos: [], d: [], d2: [] };
  const densityAt = (x, z) => {
    const n1 = Math.sin(x * 0.13 + Math.sin(z * 0.075) * 2.2) * 0.5 + 0.5;
    const n2 = Math.sin(z * 0.19 - x * 0.055 + 1.7) * 0.5 + 0.5;
    const n3 = Math.sin((x + z) * 0.045 + Math.cos(x * 0.021) * 3.0) * 0.5 + 0.5;
    return Math.min(1, 0.22 + 0.78 * (n1 * 0.45 + n2 * 0.3 + n3 * 0.25));
  };
  const nCl = Math.max(220, Math.round(nG / 130));
  const clumps = [];
  for (let i = 0; i < nCl * 2.2 && clumps.length < nCl; i++) {
    const s = sector(rng, 0.65, 210, halfH, 14);
    const d = densityAt(s.x, s.z);
    if (rng() > d) continue;
    clumps.push({
      x: s.x, z: s.z, r: 0.35 + rng() * 1.15,
      hMul: 0.78 + rng() * 0.5, tint: 0.18 + d * 0.55 + rng() * 0.25,
      phase: rng() * Math.PI * 2,
    });
  }
  let ng = 0;
  for (let i = 0; i < nG * 1.2 && ng < nG; i++) {
    let x, z, r;
    const c = clumps.length && rng() > 0.06 ? clumps[(rng() * clumps.length) | 0] : null;
    if (c) {
      const a = rng() * Math.PI * 2, rad = Math.sqrt(rng()) * c.r;
      x = c.x + Math.cos(a) * rad; z = c.z + Math.sin(a) * rad;
      r = Math.hypot(x, z);
      const th = Math.atan2(x, -z);
      if (r < 0.45 || Math.abs(th) > halfH + 0.2) continue;
    } else {
      const s = sector(rng, 0.75, 230, halfH, 14);
      x = s.x; z = s.z; r = s.r;
    }
    let h = (0.5 + rng() * 0.45) * (c ? c.hMul : 1);
    if (r < 2) h = Math.min(h, 0.5 + 0.15 * r); // 近处草丛低于视线，不遮挡画面
    for (let k = 0; k < 4 && blocksHero(x, h, z, r); k++) h *= 0.72;
    if (blocksHero(x, h, z, r)) continue;
    const w = h * (0.72 + rng() * 0.4), rot = rng() * Math.PI * 2, variant = Math.floor(rng() * 6);
    gPos.set([x, 0, z], ng * 3);
    gD.set([w, h, rot, variant], ng * 4);
    const tint = c ? Math.min(1, Math.max(0, c.tint + (rng() - 0.5) * 0.22)) : rng();
    const phase = c ? c.phase + (rng() - 0.5) * 0.9 : rng() * Math.PI * 2;
    gD2.set([tint, phase], ng * 2);
    if (r <= SHADOW_GRASS_R && shG.pos.length < SHADOW_GRASS_MAX * 3) {
      shG.pos.push(x, 0, z); shG.d.push(w, h, rot, variant); shG.d2.push(tint, phase);
    }
    ng++;
  }
  const grass = new THREE.Mesh(
    instanced(grassCardGeometry(), { iPos: [gPos, 3], iData: [gD, 4], iData2: [gD2, 2] }, ng),
    grassMaterial(U, tex, a2c, '#11240a', '#4c7524'),
  );
  grass.frustumCulled = false;
  group.add(grass);

  // ---- 近景高细节草（0–7.5m，8 段弯曲 + 更宽叶片，LOD 过渡）----
  const nNear = Math.round((q.grassNear || 0) * Math.max(0.2, cfg.grassDensity));
  let nearCount = 0;
  if (nNear > 0) {
    const nPos = new Float32Array(nNear * 3), nD = new Float32Array(nNear * 4), nD2 = new Float32Array(nNear * 2);
    let nn = 0;
    for (let i = 0; i < nNear * 1.5 && nn < nNear; i++) {
      const s = sector(rng, 0.5, 6.0, halfH, 0);
      const h = 0.36 + rng() * 0.34;
      if (blocksHero(s.x, h, s.z, s.r)) continue;
      nPos.set([s.x, 0, s.z], nn * 3);
      nD.set([h * (0.72 + rng() * 0.34), h, rng() * Math.PI * 2, Math.floor(rng() * 6)], nn * 4);
      nD2.set([rng(), rng() * Math.PI * 2], nn * 2);
      nn++;
    }
    const near = new THREE.Mesh(
      instanced(grassCardGeometry(7), { iPos: [nPos, 3], iData: [nD, 4], iData2: [nD2, 2] }, nn),
      grassMaterial(U, tex, a2c, '#0f2108', '#57862a'),
    );
    near.frustumCulled = false;
    group.add(near);
    nearCount = nn;
  }

  // ---- 花朵与花苞 ----
  const weights = ['white', 'pink', 'magenta', 'crimson'].map((k) => Math.max(0, +cfg.colorWeights[k] || 0));
  const wSum = weights.reduce((a, b) => a + b, 0);
  const pickCol = () => {
    if (wSum <= 0) return 0;
    let x = rng() * wSum;
    for (let i = 0; i < 4; i++) { if ((x -= weights[i]) <= 0 && weights[i] > 0) return i; }
    return weights.findLastIndex((w) => w > 0);
  };
  const nF = Math.round(9500 * cfg.flowerDensity * q.flowers);
  const nB = Math.round(nF * 0.35);
  const fl = { pos: [], head: [], data: [], sway: [] };
  const bd = { pos: [], head: [], data: [], sway: [] };
  // 阴影投射子集（近中景花/花苞；英雄花总是包含）
  const shF = { pos: [], head: [], data: [], sway: [] };
  const shB = { pos: [], head: [], data: [], sway: [] };
  const SHADOW_FLOWER_R = 12, SHADOW_FLOWER_MAX = 1200, SHADOW_BUD_R = 12, SHADOW_BUD_MAX = 600;
  const copyLast = (src, dst) => {
    const i = src.sway.length - 1;
    if (i < 0) return;
    dst.pos.push(...src.pos.slice(i * 3, i * 3 + 3));
    dst.head.push(...src.head.slice(i * 4, i * 4 + 4));
    dst.data.push(...src.data.slice(i * 4, i * 4 + 4));
    dst.sway.push(src.sway[i]);
  };
  const push = (o, p, head, data, sway) => { o.pos.push(...p); o.head.push(...head); o.data.push(...data); o.sway.push(sway); };
  const facingFor = (x, z, upK) => {
    const tc = new THREE.Vector3(-x, 0, -z).normalize();
    const side = new THREE.Vector3(-tc.z, 0, tc.x);
    return tc.multiplyScalar(0.15 + rng() * 0.75).addScaledVector(side, (rng() - 0.5) * 1.1).add(new THREE.Vector3(0, upK, 0)).normalize();
  };
  for (let i = 0; i < nF * 1.3 && fl.sway.length < nF; i++) {
    const near = rng() < 0.003;
    const s = near ? sector(rng, 0.5, 1.0, halfH) : sector(rng, 2.0, 170, halfH, 12);
    const h = 0.6 + rng() * 0.38;
    if (blocksHero(s.x, h, s.z, s.r)) continue;
    let R = (0.03 + rng() * 0.016) * cfg.flowerSize;
    if (s.r > 35) R *= 1 + (s.r - 35) / 60;
    push(fl, [s.x, 0, s.z], [...facingFor(s.x, s.z, 1.2 + rng() * 1.8).toArray(), R], [h, pickCol(), rng() * 6.283, rng() * 6.283], 1);
    if (s.r <= SHADOW_FLOWER_R && shF.pos.length < SHADOW_FLOWER_MAX * 3) copyLast(fl, shF);
  }
  for (let i = 0; i < nB; i++) {
    const s = sector(rng, 2.0, 90, halfH, 18);
    const h = 0.55 + rng() * 0.38;
    if (blocksHero(s.x, h, s.z, s.r)) continue;
    const R = (0.012 + rng() * 0.008) * cfg.flowerSize * (s.r > 35 ? 1 + (s.r - 35) / 60 : 1);
    push(bd, [s.x, 0, s.z], [...facingFor(s.x, s.z, 1.6).toArray(), R], [h, rng() < 0.45 ? 0 : (rng() < 0.8 ? 1 : 2), rng() * 6.283, rng() * 6.283], 1);
    if (s.r <= SHADOW_BUD_R && shB.pos.length < SHADOW_BUD_MAX * 3) copyLast(bd, shB);
  }
  for (const hr of heroes) {
    if (hr.bud) { push(bd, hr.base.toArray(), [...hr.facing.toArray(), hr.R], [hr.h, hr.type, rng() * 6.283, 0], 0.22); copyLast(bd, shB); }
    else { push(fl, hr.base.toArray(), [...hr.facing.toArray(), hr.R], [hr.h, hr.col, rng() * 6.283, hr.spin], 0.22); copyLast(fl, shF); }
  }
  const fMat = new THREE.ShaderMaterial({
    uniforms: { ...U, uPetal: { value: tex.petal }, uA2C: { value: a2c ? 1 : 0 } },
    vertexShader: FLOWER_VS, fragmentShader: FLOWER_FS, side: THREE.DoubleSide, alphaToCoverage: a2c,
  });
  const flowerGeo = flowerGeometry(), budGeo = budGeometry();
  for (const [o, geo] of [[fl, flowerGeo], [bd, budGeo]]) {
    const n = o.sway.length;
    if (!n) continue;
    const m = new THREE.Mesh(instanced(geo, {
      iPos: [new Float32Array(o.pos), 3], iHead: [new Float32Array(o.head), 4],
      iData: [new Float32Array(o.data), 4], iSway: [new Float32Array(o.sway), 1],
    }, n), fMat);
    m.frustumCulled = false;
    group.add(m);
  }

  // ---- 地面 ----
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(9000, 9000).rotateX(-Math.PI / 2),
    new THREE.ShaderMaterial({ uniforms: { ...U }, vertexShader: GROUND_VS, fragmentShader: GROUND_FS }));
  ground.frustumCulled = false;
  group.add(ground);

  // ---- 远处树线 / 芦苇带 ----
  const nT = q.treeline;
  const tPos = new Float32Array(nT * 3), tD = new Float32Array(nT * 4), tD2 = new Float32Array(nT * 2);
  for (let i = 0; i < nT; i++) {
    const th = (rng() * 2 - 1) * (halfH + 0.25);
    const r = 260 + rng() * 260;
    const cluster = Math.pow(Math.sin(th * 9.0 + 1.3) * 0.5 + 0.5, 1.5) * 0.7 + Math.pow(Math.sin(th * 23.0) * 0.5 + 0.5, 3.0) * 0.5;
    const h = 3 + rng() * 5 + cluster * 14;
    tPos.set([Math.sin(th) * r, -0.5, -Math.cos(th) * r], i * 3);
    tD.set([h * (1.0 + rng() * 0.6), h, rng() * 6.283, Math.floor(rng() * 6)], i * 4);
    tD2.set([rng() * 0.5, rng() * 6.283], i * 2);
  }
  const tree = new THREE.Mesh(instanced(grassCardGeometry(), { iPos: [tPos, 3], iData: [tD, 4], iData2: [tD2, 2] }, nT),
    grassMaterial(U, tex, a2c, '#0f1c0c', '#33482a'));
  tree.frustumCulled = false;
  group.add(tree);

  // ---- 阴影投射体（独立场景，只进 shadow pass，不参与主渲染）----
  const shadowCasters = [];
  const mkShadowMesh = (geo, attrs, count, mat) => {
    if (!count) return;
    const m = new THREE.Mesh(instanced(geo, attrs, count), mat);
    m.frustumCulled = false;
    shadowCasters.push(m);
  };
  mkShadowMesh(grassCardGeometry(), {
    iPos: [new Float32Array(shG.pos), 3], iData: [new Float32Array(shG.d), 4], iData2: [new Float32Array(shG.d2), 2],
  }, shG.pos.length / 3, grassShadowMaterial(U, tex));
  const flAttrs = (o) => ({
    iPos: [new Float32Array(o.pos), 3], iHead: [new Float32Array(o.head), 4],
    iData: [new Float32Array(o.data), 4], iSway: [new Float32Array(o.sway), 1],
  });
  mkShadowMesh(flowerGeo, flAttrs(shF), shF.sway.length, flowerShadowMaterial(U, tex));
  mkShadowMesh(budGeo, flAttrs(shB), shB.sway.length, flowerShadowMaterial(U, tex));

  return { group, shadowCasters, counts: { grass: ng, grassNear: nearCount, flowers: fl.sway.length, buds: bd.sway.length } };
}

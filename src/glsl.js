// 共享 GLSL：噪声、风、循环云场、雾、光照
// 所有随时间变化的量都是 uPhase（= 2π·t/T）的整数倍频率，或用首尾交叉淡化的方式循环，保证无缝
import * as THREE from 'three';

export function sharedUniforms() {
  const v3 = () => ({ value: new THREE.Vector3() });
  return {
    uPhase: { value: 0 }, uLoop: { value: 0 }, uTime: { value: 0 }, uPeriod: { value: 15 },
    uWindCyc: { value: new THREE.Vector3(1, 2, 3) }, uFlutterCyc: { value: new THREE.Vector2(5, 8) }, uWind: { value: 1 },
    uLightDir: v3(), uLightColor: v3(), uSunDir: v3(), uGlowColor: v3(), uSunDisc: v3(),
    uSkyAmb: v3(), uGroundAmb: v3(), uZenith: v3(), uHorizon: v3(),
    uFogDensity: { value: 4.5e-4 }, uCloudCover: { value: 0.2 }, uCloudShadow: { value: 0.6 },
    uCloudDrift: { value: new THREE.Vector2(14, -4) }, uCloudLit: v3(), uCloudDark: v3(),
    uSunVis: { value: 1 }, uStars: { value: 0 }, uMoon: { value: 0 }, uMoonDir: v3(),
    uCityLights: { value: 0 }, uWet: { value: 0 }, uRain: { value: 0 },
    uPalBase: { value: [v3().value, v3().value, v3().value, v3().value] },
    uPalMid: { value: [v3().value, v3().value, v3().value, v3().value] },
    uPalTip: { value: [v3().value, v3().value, v3().value, v3().value] },
  };
}

export const COMMON = /* glsl */ `
uniform float uPhase, uLoop, uTime, uPeriod, uWind;
uniform vec3 uWindCyc;
uniform vec2 uFlutterCyc;
uniform vec3 uLightDir, uLightColor, uSunDir, uGlowColor, uSkyAmb, uGroundAmb, uHorizon, uZenith;
uniform float uFogDensity, uCloudCover, uCloudShadow, uWet;
uniform vec2 uCloudDrift;

#define CLOUD_H 1600.0
const vec2 WIND_DIR = vec2(0.94, -0.34);

float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
float hash11(float p) { p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3. - 2. * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float s = 0., a = .5;
  for (int i = 0; i < 5; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= .5; }
  return s / 0.96875;
}
float fbm3(vec2 p) {
  float s = 0., a = .5;
  for (int i = 0; i < 3; i++) { s += a * vnoise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= .5; }
  return s / 0.875;
}

// 阵风：沿风向传播的行波，时间频率为整数
float gust(vec2 p) {
  float u = dot(p, WIND_DIR), v = dot(p, vec2(-WIND_DIR.y, WIND_DIR.x));
  return 0.55 * sin(uWindCyc.x * uPhase - u * 0.21 + sin(v * 0.09) * 1.5)
       + 0.30 * sin(uWindCyc.y * uPhase - u * 0.47 + v * 0.13 + 1.3)
       + 0.15 * sin(uWindCyc.z * uPhase - u * 0.93 - v * 0.21 + 2.1);
}
// 植株顶端的水平位移（xz），h 为植株高度
vec2 windDisp(vec2 p, float ph, float h) {
  float g = gust(p);
  float fl = sin(uFlutterCyc.x * uPhase + ph) + 0.6 * sin(uFlutterCyc.y * uPhase + ph * 1.7);
  vec2 side = vec2(-WIND_DIR.y, WIND_DIR.x);
  return (WIND_DIR * (0.075 + 0.08 * g + 0.012 * fl) + side * 0.014 * fl) * uWind * h;
}

// 循环云场：两份错开一个周期漂移量的噪声首尾交叉淡化，并做方差补偿
float cloudDensity(vec2 pw) {
  vec2 q = pw / 2600.0, d = uCloudDrift / 2600.0;
  float a = fbm(q - d * uTime);
  float b = fbm(q - d * (uTime - uPeriod) + vec2(0.0));
  float w = uLoop;
  float f = 0.5 + ((1.0 - w) * (a - 0.5) + w * (b - 0.5)) / sqrt((1.0 - w) * (1.0 - w) + w * w);
  return smoothstep(0.72 - 0.6 * uCloudCover, 0.98 - 0.55 * uCloudCover, f);
}
float cloudShadowAt(vec3 wp) {
  if (uLightDir.y < 0.03 || uCloudShadow < 0.01) return 1.0;
  vec2 pc = wp.xz + uLightDir.xz / uLightDir.y * (CLOUD_H - wp.y);
  return 1.0 - cloudDensity(pc) * uCloudShadow;
}

vec3 fogColorDir(vec3 v) {
  float s = max(dot(v, uSunDir), 0.0);
  return uHorizon + uGlowColor * (0.45 * pow(s, 12.0) + 0.08 * pow(s, 3.0));
}
// 返回 rgb = 雾色，a = 雾量
vec4 fogAt(vec3 wp) {
  vec3 d = wp - cameraPosition; float dist = length(d); vec3 v = d / max(dist, 1e-4);
  float hAvg = max(0.0, 0.5 * (wp.y + cameraPosition.y));
  float amt = 1.0 - exp(-dist * uFogDensity * exp(-hAvg / 220.0));
  return vec4(fogColorDir(v), amt);
}
`;

// 植物通用光照：环绕漫反射 + 透光 + 半球环境光 + 湿润高光
export const LIGHTING = /* glsl */ `
vec3 shadePlant(vec3 albedo, vec3 N, vec3 V, float ao, float trans, float shadow) {
  vec3 L = uLightDir;
  float ndl = dot(N, L);
  float diff = max(ndl * 0.55 + 0.45, 0.0);
  float back = pow(max(dot(-V, L), 0.0), 4.0) * trans;
  vec3 sun = uLightColor * shadow * (diff * mix(0.55, 1.0, ao) + back * 1.6);
  vec3 amb = mix(uGroundAmb, uSkyAmb, N.y * 0.5 + 0.5) * ao;
  vec3 col = albedo * (sun + amb);
  vec3 H = normalize(L + V);
  col += uLightColor * shadow * pow(max(dot(N, H), 0.0), 60.0) * (0.04 + 0.5 * uWet) * ao;
  return col;
}
`;

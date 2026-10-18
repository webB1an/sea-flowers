// 雾：方向性雾色（地平线与天空严格一致）+ 距离/高度雾量。
export const FOG = /* glsl */ `
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

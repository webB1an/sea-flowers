// 方向光阴影采样：2×2 PCF（4 taps）+ 边缘淡出。阴影贴图由 main.js 的 shadow pass 生成。
// 只被“接收阴影”的 fragment shader 引用（草地/花/地面），不加入 COMMON 以免顶点着色器也编译纹理采样。
export const SHADOW = /* glsl */ `
float shadowVisibility(vec4 sc, vec3 N) {
  if (uShadowEnabled < 0.5 || sc.w <= 0.0) return 1.0;
  vec3 p = sc.xyz / sc.w;
  p = p * 0.5 + 0.5;                       // NDC [-1,1] -> 纹理坐标 [0,1]
  if (p.z > 1.0 || p.x < 0.0 || p.x > 1.0 || p.y < 0.0 || p.y > 1.0) return 1.0;
  float bias = uShadowBias * (1.0 + 2.0 * (1.0 - abs(dot(normalize(N), uLightDir))));
  vec2 t = uShadowTexel * 0.5;
  vec2 uv = p.xy - t;
  float vis = 0.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv).r) ? 0.0 : 1.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv + vec2(uShadowTexel.x, 0.0)).r) ? 0.0 : 1.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv + vec2(0.0, uShadowTexel.y)).r) ? 0.0 : 1.0;
  vis += (p.z - bias > texture2D(uShadowMap, uv + uShadowTexel).r) ? 0.0 : 1.0;
  vis *= 0.25;
  // 阴影贴图边缘淡出，避免近中景与远景交界出现硬边
  float edge = smoothstep(0.0, 0.06, min(min(p.x, 1.0 - p.x), min(p.y, 1.0 - p.y)));
  return mix(1.0, vis, edge);
}
`;

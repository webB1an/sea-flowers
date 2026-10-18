// 植物通用光照：环绕漫反射 + 透光 + 半球环境光 + 湿润高光。
// M1 将在此加入方向光阴影/AO/IBL 项（保持函数签名兼容或同步更新调用点）。
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

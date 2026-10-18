// 植物通用光照：简化 PBR（漫反射 + 方向光 GGX 高光 + 天空环境光/环境反射）+ 逆光透光。
// 环境光优先使用天空 cubemap（IBL）；uEnvIntensity=0 时回退为解析天空/地面常量（low 档）。
export const LIGHTING = /* glsl */ `
vec3 plantAmbient(vec3 N, float ao) {
  vec3 analytic = mix(uGroundAmb, uSkyAmb, N.y * 0.5 + 0.5);
  if (uEnvIntensity < 0.001) return analytic * ao;
  vec3 env = mix(uGroundAmb, textureCube(uEnvMap, normalize(N)).rgb, smoothstep(-0.25, 0.25, N.y));
  return mix(analytic, env, clamp(uEnvIntensity, 0.0, 1.0)) * ao;
}
vec3 plantSpecEnv(vec3 N, vec3 V, float roughness, float specular) {
  if (uEnvIntensity < 0.001 || specular < 0.001) return vec3(0.0);
  vec3 R = reflect(-V, N);
  float fres = pow(1.0 - max(dot(N, V), 0.0), 5.0);
  vec3 env = textureCube(uEnvMap, R).rgb;
  return env * (0.18 + 0.82 * fres) * specular * (1.0 - roughness * 0.6) * uEnvIntensity;
}
// 简化 GGX 方向光高光（省略几何项，用于背景植被足够）
float ggxSpec(float ndh, float roughness) {
  float a = max(roughness * roughness, 0.05);
  float a2 = a * a;
  float d = ndh * ndh * (a2 - 1.0) + 1.0;
  return a2 / (3.14159 * d * d + 1e-4);
}
vec3 shadePlant(vec3 albedo, vec3 N, vec3 V, float ao, float trans, float shadow, float roughness, float specular) {
  vec3 L = uLightDir;
  float ndl = dot(N, L);
  float diff = max(ndl * 0.55 + 0.45, 0.0);
  float back = pow(max(dot(-V, L), 0.0), 4.0) * trans;
  vec3 sun = uLightColor * shadow * (diff * mix(0.55, 1.0, ao) + back * 1.6);
  vec3 amb = plantAmbient(N, ao);
  vec3 col = albedo * (sun + amb);
  vec3 H = normalize(L + V);
  float ndh = max(dot(N, H), 0.0);
  float specSun = ggxSpec(ndh, roughness) * specular * (0.15 + 0.85 * uWet) * (0.35 + 0.65 * max(ndl, 0.0));
  col += uLightColor * shadow * specSun * ao * 6.0;                 // 经验缩放，避免过曝/塑料感
  col += albedo * plantSpecEnv(N, V, roughness, specular) * 0.6;    // 环境反射（叶片/花瓣边缘微光）
  return col;
}
`;

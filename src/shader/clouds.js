// 循环云场与云影：两份错开一个周期漂移量的噪声首尾交叉淡化（无缝循环）。
export const CLOUDS = /* glsl */ `
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
`;

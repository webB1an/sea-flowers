// 风场：阵风行波 + 植株顶端位移。所有时间频率为整数倍（无缝循环）。
export const WIND = /* glsl */ `
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
`;

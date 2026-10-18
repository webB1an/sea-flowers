// GLSL 共享声明：uniform、跨模块常量。所有 shader 模块按顺序拼接（见 index.js）。
export const DECLARATIONS = /* glsl */ `
uniform float uPhase, uLoop, uTime, uPeriod, uWind;
uniform vec3 uWindCyc;
uniform vec2 uFlutterCyc;
uniform vec3 uLightDir, uLightColor, uSunDir, uGlowColor, uSkyAmb, uGroundAmb, uHorizon, uZenith;
uniform float uFogDensity, uCloudCover, uCloudShadow, uWet;
uniform vec2 uCloudDrift;

#define CLOUD_H 1600.0
const vec2 WIND_DIR = vec2(0.94, -0.34);
`;

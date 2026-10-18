// GLSL 共享声明：uniform、跨模块常量。所有 shader 模块按顺序拼接（见 index.js）。
export const DECLARATIONS = /* glsl */ `
uniform float uPhase, uLoop, uTime, uPeriod, uWind;
uniform vec3 uWindCyc;
uniform vec2 uFlutterCyc;
uniform vec3 uLightDir, uLightColor, uSunDir, uGlowColor, uSkyAmb, uGroundAmb, uHorizon, uZenith;
uniform float uFogDensity, uCloudCover, uCloudShadow, uWet;
uniform vec2 uCloudDrift;

// 方向光阴影（M1）
uniform sampler2D uShadowMap;
uniform mat4 uShadowMatrix;
uniform vec2 uShadowTexel;
uniform float uShadowBias, uShadowEnabled;

// 天空 IBL（M1）
uniform samplerCube uEnvMap;
uniform float uEnvIntensity;

#define CLOUD_H 1600.0
const vec2 WIND_DIR = vec2(0.94, -0.34);
`;

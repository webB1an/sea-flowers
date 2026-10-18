// 共享 uniform 注册表：所有 shader 模块共用的 uniform 组在这里统一创建。
// 新功能（阴影/IBL/AO 等）请在各自模块里扩展，避免并行任务同时改同一文件。
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

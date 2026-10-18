// 共享 GLSL 统一入口：按固定顺序拼接模块，保持与拆分前完全一致的 shader 文本。
import { DECLARATIONS } from './declarations.js';
import { NOISE } from './noise.js';
import { WIND } from './wind.js';
import { CLOUDS } from './clouds.js';
import { FOG } from './fog.js';

export { sharedUniforms } from './uniforms.js';
export { LIGHTING } from './lighting.js';
export { SHADOW } from './shadow.js';

export const COMMON = [DECLARATIONS, NOISE, WIND, CLOUDS, FOG].join('\n');

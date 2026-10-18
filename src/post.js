// 后期：景深（半分辨率散景采样）→ 光晕（双 Kawase）→ ACES 色调映射 → 调色、暗角、颗粒
import * as THREE from 'three';

const VS = /* glsl */ `
varying vec2 vUv;
void main() { vUv = position.xy * 0.5 + 0.5; gl_Position = vec4(position.xy, 0.0, 1.0); }`;

const TRI = (() => {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute([-1, -1, 0, 3, -1, 0, -1, 3, 0], 3));
  return g;
})();
const ORTHO = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

class Pass {
  constructor(fragmentShader, uniforms, defines = {}) {
    this.mat = new THREE.ShaderMaterial({ vertexShader: VS, fragmentShader, uniforms, defines, depthTest: false, depthWrite: false });
    this.u = this.mat.uniforms;
    const m = new THREE.Mesh(TRI, this.mat);
    m.frustumCulled = false;
    this.scene = new THREE.Scene();
    this.scene.add(m);
  }
  run(renderer, target) { renderer.setRenderTarget(target); renderer.render(this.scene, ORTHO); }
}

const LINDEPTH = /* glsl */ `
uniform float uNear, uFar;
float linDepth(float d) { return uNear * uFar / (uFar - d * (uFar - uNear)); }`;

const COC_FS = /* glsl */ `
${LINDEPTH}
uniform sampler2D tColor, tDepth;
uniform vec2 uTexel; uniform float uFocus, uAperture, uMaxCoc;
varying vec2 vUv;
float coc(float d) { float z = linDepth(d); return clamp(uAperture * (1.0 - uFocus / z), -uMaxCoc, uMaxCoc); }
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = (texture2D(tColor, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, -o.y)).rgb
          + texture2D(tColor, vUv + vec2(-o.x, o.y)).rgb + texture2D(tColor, vUv + vec2(o.x, o.y)).rgb) * 0.25;
  // 取四个子像素中最近的深度，保证前景边缘的散景能外扩
  float d = min(min(texture2D(tDepth, vUv + vec2(-o.x, -o.y)).r, texture2D(tDepth, vUv + vec2(o.x, -o.y)).r),
                min(texture2D(tDepth, vUv + vec2(-o.x, o.y)).r, texture2D(tDepth, vUv + vec2(o.x, o.y)).r));
  gl_FragColor = vec4(min(c, vec3(60.0)), coc(d));
}`;

const BLUR_FS = /* glsl */ `
uniform sampler2D tHalf; uniform vec2 uTexel; uniform float uMaxCoc;
varying vec2 vUv;
void main() {
  vec4 c0 = texture2D(tHalf, vUv);
  float coc0 = c0.a * 0.5;
  float maxR = uMaxCoc * 0.5;
  // 先探测周围前景的最大弥散圆，决定本像素实际需要的采样半径
  float R = abs(coc0);
  for (int i = 0; i < 12; i++) {
    float th = float(i) * 0.5236;
    float rr = (i < 6 ? 0.45 : 1.0) * maxR;
    float sc = texture2D(tHalf, vUv + vec2(cos(th), sin(th)) * rr * uTexel).a * 0.5;
    if (sc < coc0 && abs(sc) > rr * 0.6) R = max(R, min(abs(sc), rr + 1.0));
  }
  R = clamp(R, 0.5, maxR);
  vec3 acc = c0.rgb; float wsum = 1.0, fg = 0.0;
  for (int i = 0; i < TAPS; i++) {
    float fi = float(i) + 0.5;
    float r = sqrt(fi / float(TAPS)) * R;
    float th = fi * 2.39996;
    vec4 s = texture2D(tHalf, vUv + vec2(cos(th), sin(th)) * r * uTexel);
    float sc = s.a * 0.5;
    float w;
    if (sc < coc0) { w = clamp(abs(sc) - r + 1.0, 0.0, 1.0); if (sc < -0.5) fg += w; }
    else w = clamp(min(abs(sc), abs(coc0)) - r + 1.0, 0.0, 1.0);
    acc += s.rgb * w; wsum += w;
  }
  gl_FragColor = vec4(acc / wsum, clamp(fg / float(TAPS) * 3.0, 0.0, 1.0));
}`;

const COMPOSITE_FS = /* glsl */ `
${LINDEPTH}
uniform sampler2D tColor, tDepth, tBlur;
uniform float uFocus, uAperture, uMaxCoc;
varying vec2 vUv;
void main() {
  vec3 sharp = texture2D(tColor, vUv).rgb;
  vec4 b = texture2D(tBlur, vUv);
  float z = linDepth(texture2D(tDepth, vUv).r);
  float c = abs(clamp(uAperture * (1.0 - uFocus / z), -uMaxCoc, uMaxCoc));
  float k = max(smoothstep(0.8, 2.5, c), b.a);
  gl_FragColor = vec4(mix(sharp, b.rgb, k), 1.0);
}`;

const PREFILTER_FS = /* glsl */ `
uniform sampler2D tSrc; uniform vec2 uTexel; uniform float uThreshold;
varying vec2 vUv;
void main() {
  vec2 o = uTexel * 0.5;
  vec3 c = (texture2D(tSrc, vUv + vec2(-o.x, -o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, -o.y)).rgb
          + texture2D(tSrc, vUv + vec2(-o.x, o.y)).rgb + texture2D(tSrc, vUv + vec2(o.x, o.y)).rgb) * 0.25;
  c = min(c, vec3(40.0));
  float br = max(c.r, max(c.g, c.b)), knee = uThreshold * 0.5;
  float soft = clamp(br - uThreshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee + 1e-4);
  gl_FragColor = vec4(c * max(soft, br - uThreshold) / max(br, 1e-4), 1.0);
}`;

const DOWN_FS = /* glsl */ `
uniform sampler2D tSrc; uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D(tSrc, vUv).rgb * 4.0;
  s += texture2D(tSrc, vUv - h).rgb + texture2D(tSrc, vUv + h).rgb;
  s += texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb + texture2D(tSrc, vUv - vec2(h.x, -h.y)).rgb;
  gl_FragColor = vec4(s / 8.0, 1.0);
}`;

const UP_FS = /* glsl */ `
uniform sampler2D tSrc, tAdd; uniform vec2 uTexel;
varying vec2 vUv;
void main() {
  vec2 h = uTexel;
  vec3 s = texture2D(tSrc, vUv + vec2(-h.x * 2.0, 0.0)).rgb + texture2D(tSrc, vUv + vec2(h.x * 2.0, 0.0)).rgb
         + texture2D(tSrc, vUv + vec2(0.0, h.y * 2.0)).rgb + texture2D(tSrc, vUv + vec2(0.0, -h.y * 2.0)).rgb;
  s += (texture2D(tSrc, vUv + vec2(-h.x, h.y)).rgb + texture2D(tSrc, vUv + vec2(h.x, h.y)).rgb
      + texture2D(tSrc, vUv + vec2(h.x, -h.y)).rgb + texture2D(tSrc, vUv + vec2(-h.x, -h.y)).rgb) * 2.0;
  gl_FragColor = vec4(s / 12.0 + texture2D(tAdd, vUv).rgb, 1.0);
}`;

const FINAL_FS = /* glsl */ `
uniform sampler2D tHdr, tBloom;
uniform float uBloom, uExposure, uSat, uContrast, uGrain, uSeed;
uniform vec3 uTint; uniform vec2 uRes;
varying vec2 vUv;
vec3 aces(vec3 x) { return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0); }
vec3 toSRGB(vec3 c) { return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c)); }
float hash(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }
void main() {
  vec3 c = texture2D(tHdr, vUv).rgb + texture2D(tBloom, vUv).rgb * uBloom;
  c *= uExposure;
  float l = dot(c, vec3(0.2126, 0.7152, 0.0722));
  c = max(mix(vec3(l), c, uSat) * uTint, 0.0);
  c = toSRGB(aces(c * 0.9));
  c = (c - 0.5) * uContrast + 0.5;
  vec2 q = (vUv - 0.5) * vec2(uRes.x / uRes.y, 1.0);
  c *= mix(1.0, smoothstep(1.25, 0.35, length(q) * 1.15), 0.42);
  c += (hash(vUv * uRes + uSeed) - 0.5) * 0.035 * uGrain;
  c += (hash(vUv * uRes + 17.0) - 0.5) / 255.0;
  gl_FragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}`;

export class Post {
  constructor(renderer, q) {
    this.renderer = renderer;
    this.samples = q.samples;
    const opt = { type: THREE.HalfFloatType, depthBuffer: false, minFilter: THREE.LinearFilter, magFilter: THREE.LinearFilter };
    this.opt = opt;
    this.scene = new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: q.samples, depthBuffer: true });
    this.scene.depthTexture = new THREE.DepthTexture(1, 1);
    this.half = new THREE.WebGLRenderTarget(1, 1, opt);
    this.blur = new THREE.WebGLRenderTarget(1, 1, opt);
    this.hdr = new THREE.WebGLRenderTarget(1, 1, opt);
    this.levels = 6;
    this.down = Array.from({ length: this.levels }, () => new THREE.WebGLRenderTarget(1, 1, opt));
    this.up = Array.from({ length: this.levels }, () => new THREE.WebGLRenderTarget(1, 1, opt));
    const v2 = () => ({ value: new THREE.Vector2() });
    const dof = { uFocus: { value: 1 }, uAperture: { value: 6 }, uMaxCoc: { value: 24 }, uNear: { value: 0.05 }, uFar: { value: 6000 } };
    this.dof = dof;
    this.coc = new Pass(COC_FS, { ...dof, tColor: { value: null }, tDepth: { value: null }, uTexel: v2() });
    this.blurP = new Pass(BLUR_FS, { ...dof, tHalf: { value: null }, uTexel: v2() }, { TAPS: q.dofTaps });
    this.comp = new Pass(COMPOSITE_FS, { ...dof, tColor: { value: null }, tDepth: { value: null }, tBlur: { value: null } });
    this.pre = new Pass(PREFILTER_FS, { tSrc: { value: null }, uTexel: v2(), uThreshold: { value: 1.6 } });
    this.downP = new Pass(DOWN_FS, { tSrc: { value: null }, uTexel: v2() });
    this.upP = new Pass(UP_FS, { tSrc: { value: null }, tAdd: { value: null }, uTexel: v2() });
    this.final = new Pass(FINAL_FS, {
      tHdr: { value: null }, tBloom: { value: null }, uBloom: { value: 0.12 }, uExposure: { value: 1 }, uSat: { value: 1 },
      uContrast: { value: 1 }, uGrain: { value: 1 }, uSeed: { value: 0 }, uTint: { value: new THREE.Vector3(1, 1, 1) }, uRes: v2(),
    });
  }

  setSize(w, h) {
    this.w = w; this.h = h;
    this.scene.setSize(w, h);
    this.scene.depthTexture.image.width = w; this.scene.depthTexture.image.height = h;
    const hw = Math.max(1, w >> 1), hh = Math.max(1, h >> 1);
    this.half.setSize(hw, hh); this.blur.setSize(hw, hh); this.hdr.setSize(w, h);
    for (let i = 0; i < this.levels; i++) {
      const s = 1 << (i + 1);
      this.down[i].setSize(Math.max(1, Math.round(w / s)), Math.max(1, Math.round(h / s)));
      this.up[i].setSize(Math.max(1, Math.round(w / s)), Math.max(1, Math.round(h / s)));
    }
    this.final.u.uRes.value.set(w, h);
  }

  // p: { focus, aperture, maxCoc, near, far, bloom, exposure, sat, contrast, tint, grain, seed }
  render(scene, camera, p, target = null, overlay = null) {
    const r = this.renderer, w = this.w, h = this.h;
    r.setRenderTarget(this.scene);
    r.clear();
    r.render(scene, camera);

    this.dof.uFocus.value = p.focus;
    this.dof.uAperture.value = p.aperture; this.dof.uMaxCoc.value = p.maxCoc;
    this.dof.uNear.value = camera.near; this.dof.uFar.value = camera.far;

    const blurOn = p.aperture > 0.05;
    if (blurOn) {
      this.coc.u.tColor.value = this.scene.texture; this.coc.u.tDepth.value = this.scene.depthTexture;
      this.coc.u.uTexel.value.set(1 / w, 1 / h);
      this.coc.run(r, this.half);
      this.blurP.u.tHalf.value = this.half.texture;
      this.blurP.u.uTexel.value.set(1 / this.half.width, 1 / this.half.height);
      this.blurP.run(r, this.blur);
    }
    this.comp.u.tColor.value = this.scene.texture; this.comp.u.tDepth.value = this.scene.depthTexture;
    this.comp.u.tBlur.value = blurOn ? this.blur.texture : this.scene.texture;
    if (!blurOn) this.dof.uAperture.value = 0;
    this.comp.run(r, this.hdr);
    // 景深之后再叠加的内容（雨丝）：保持清晰，自行用深度图做遮挡
    if (overlay) {
      r.setRenderTarget(this.hdr);
      r.render(overlay, camera);
    }
    const src = this.hdr.texture;

    this.pre.u.tSrc.value = src; this.pre.u.uTexel.value.set(1 / w, 1 / h);
    this.pre.run(r, this.down[0]);
    for (let i = 1; i < this.levels; i++) {
      this.downP.u.tSrc.value = this.down[i - 1].texture;
      this.downP.u.uTexel.value.set(0.5 / this.down[i - 1].width, 0.5 / this.down[i - 1].height);
      this.downP.run(r, this.down[i]);
    }
    let up = this.down[this.levels - 1];
    for (let i = this.levels - 2; i >= 0; i--) {
      this.upP.u.tSrc.value = up.texture; this.upP.u.tAdd.value = this.down[i].texture;
      this.upP.u.uTexel.value.set(0.5 / up.width, 0.5 / up.height);
      this.upP.run(r, this.up[i]);
      up = this.up[i];
    }

    const f = this.final.u;
    f.tHdr.value = src; f.tBloom.value = up.texture;
    f.uBloom.value = p.bloom / this.levels; f.uExposure.value = p.exposure; f.uSat.value = p.sat;
    f.uContrast.value = p.contrast; f.uGrain.value = p.grain; f.uSeed.value = p.seed; f.uTint.value.set(...p.tint);
    this.final.run(r, target);
  }

  dispose() {
    // Pass 的 ShaderMaterial/网格不随 render target 释放，需要一并销毁，避免切换画质时泄漏
    for (const p of [this.coc, this.blurP, this.comp, this.pre, this.downP, this.upP, this.final]) {
      p.mat.dispose();
      p.scene.clear();
    }
    for (const t of [this.scene, this.half, this.blur, this.hdr, ...this.down, ...this.up]) t.dispose();
  }
}

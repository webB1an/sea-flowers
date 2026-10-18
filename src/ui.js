// 设置面板：配置项、预设、本地保存、导出 / 导入配置
import { DEFAULTS, resolveConfig } from './config.js';

const STORE = 'flower-sea-3d-v1';
const STORE_VERSION = 2;   // v2：默认不限帧（修复高刷屏 60 上限分频的帧节奏抖动）
const VIEW_DEFAULTS = { scale: 'auto', fpsCap: 0, showFps: false };   // 默认不限帧：高刷屏上避免 60 上限分频造成的抖动
// 导出尺寸上限与取偶：H.264 要求宽高为偶数，超出 GPU 编码上限的屏幕尺寸会被钳制
const EXPORT_MAX_W = 7680, EXPORT_MAX_H = 4320;
const evenClamp = (v, max) => Math.min(max, Math.max(2, Math.floor(v / 2) * 2));
const clone = (o) => JSON.parse(JSON.stringify(o));
const hhmm = (h) => { const m = Math.round(h * 60) % 1440; return `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`; };
const WEATHER_NAMES = { auto: '自动', clear: '晴', partly: '多云', overcast: '阴', fog: '雾', rain: '小雨' };
const FLOWER_NAMES = { white: '白色', pink: '浅粉', magenta: '玫红', crimson: '酒红' };

const SCHEMA = [
  { group: '时间与天气', items: [
    { key: 'timeMode', label: '时间', type: 'select', options: [['clock', '跟随电脑时间'], ['fixed', '固定时间'], ['timelapse', '全天延时（一个循环走完 24 小时）']] },
    { key: 'hour', label: '时刻 / 起点', min: 0, max: 23.95, step: 0.05, fmt: hhmm },
    { key: 'weather', label: '天气', type: 'select', options: Object.entries(WEATHER_NAMES).map(([k, v]) => [k, k === 'auto' ? '自动（每 3 小时变化）' : v]) },
  ] },
  { group: '动画', items: [
    { key: 'period', label: '循环时长', min: 5, max: 90, step: 1, fmt: (v) => v + 's' },
    { key: 'wind', label: '风力', min: 0, max: 3, step: 0.05 },
    { key: 'windSpeed', label: '风速', min: 0.25, max: 3, step: 0.05 },
  ] },
  { group: '花海', items: [
    { key: 'flowerDensity', label: '花朵密度', min: 0, max: 4, step: 0.1 },
    { key: 'flowerSize', label: '花朵大小', min: 0.5, max: 2, step: 0.05 },
    { key: 'grassDensity', label: '草丛密度', min: 0.3, max: 1.6, step: 0.05 },
    { key: 'heroes', label: '前景大花', type: 'check' },
    { key: 'heroSize', label: '大花尺寸', min: 0.5, max: 1.6, step: 0.05 },
    { key: 'seed', label: '布局种子', type: 'seed' },
  ] },
  { group: '花色（颜色 + 占比）', items: Object.keys(FLOWER_NAMES).map((k) => ({ key: k, label: FLOWER_NAMES[k], type: 'color' })) },
  { group: '场景', items: [
    { key: 'skyline', label: '城市背景', type: 'check' },
    { key: 'horizon', label: '地平线', min: 0.25, max: 0.5, step: 0.005, fmt: (v) => Math.round(v * 100) + '%' },
    { key: 'haze', label: '空气雾感', min: 0, max: 3, step: 0.05 },
  ] },
  { group: '镜头', items: [
    { key: 'dof', label: '景深虚化', min: 0, max: 2, step: 0.05 },
    { key: 'bloom', label: '光晕', min: 0, max: 2.5, step: 0.05 },
    { key: 'exposure', label: '曝光', min: -2, max: 2, step: 0.05, fmt: (v) => (v > 0 ? '+' : '') + v.toFixed(2) },
    { key: 'grain', label: '胶片颗粒', min: 0, max: 2, step: 0.05 },
  ] },
  { group: '点缀', items: [
    { key: 'butterflies', label: '蝴蝶', min: 0, max: 8, step: 1, fmt: (v) => v + ' 只' },
    { key: 'petals', label: '飘落花瓣', min: 0, max: 30, step: 1, fmt: (v) => v + ' 片' },
    { key: 'pollen', label: '光点绒絮', min: 0, max: 3, step: 0.1 },
    { key: 'fireflies', label: '萤火虫', min: 0, max: 3, step: 0.1 },
  ] },
  { group: '画质', items: [
    { key: 'quality', label: '画质档位', type: 'select', options: [['auto', '自动（按性能）'], ['low', '低（集成显卡）'], ['medium', '中'], ['high', '高'], ['ultra', '极高']] },
    { key: 'scale', view: true, label: '渲染分辨率', type: 'select', options: [['auto', '自动（跟随屏幕）'], ['0.5', '0.5× 省电'], ['0.75', '0.75×'], ['1', '1×'], ['1.5', '1.5×'], ['2', '2× 高清']] },
    { key: 'fpsCap', view: true, label: '帧率上限', type: 'select', options: [['24', '24 fps'], ['30', '30 fps'], ['60', '60 fps'], ['0', '不限']] },
    { key: 'showFps', view: true, label: '显示帧率', type: 'check' },
  ] },
];

const PRESETS = {
  '默认': {},
  '黄金时刻': { timeMode: 'fixed', hour: 18.05, weather: 'clear', bloom: 1.3 },
  '清晨薄雾': { timeMode: 'fixed', hour: 6.7, weather: 'fog', pollen: 1.5 },
  '正午晴空': { timeMode: 'fixed', hour: 12.5, weather: 'clear' },
  '多云午后': { timeMode: 'fixed', hour: 14.8, weather: 'partly', wind: 1.4 },
  '阴天': { timeMode: 'fixed', hour: 10.5, weather: 'overcast', dof: 0.7 },
  '雨天': { timeMode: 'fixed', hour: 15.5, weather: 'rain', wind: 1.6, petals: 3 },
  '星夜萤火': { timeMode: 'fixed', hour: 22, weather: 'clear', fireflies: 1.8, bloom: 1.4 },
  '繁花似锦': { flowerDensity: 3.2, grassDensity: 1.2, heroes: false, dof: 0.5, horizon: 0.36 },
  '全天延时': { timeMode: 'timelapse', hour: 4, period: 60 },
  '省电模式': { quality: 'low', __view: { scale: '0.75', fpsCap: 30 } },
};

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) { if (k === 'style') e.style.cssText = v; else if (k in e) e[k] = v; else e.setAttribute(k, v); }
  e.append(...kids);
  return e;
}

export function initUI({ onConfig, onView, getStatus }) {
  let cfg = resolveConfig({}), view = { ...VIEW_DEFAULTS };
  let migrated = false;
  try {
    const saved = JSON.parse(localStorage.getItem(STORE) || 'null');
    if (saved) {
      cfg = resolveConfig(saved.cfg || {});
      view = { ...VIEW_DEFAULTS, ...(saved.view || {}) };
      // 旧存档迁移：v2 起默认不限帧，修复高刷屏上 60 上限分频造成的帧节奏抖动
      if (saved.__v !== STORE_VERSION) { view.fpsCap = 0; migrated = true; }
    }
  } catch (e) { /* 忽略损坏的存档 */ }
  const state = { get cfg() { return cfg; }, get view() { return view; }, tick };
  const save = () => localStorage.setItem(STORE, JSON.stringify({ cfg, view, __v: STORE_VERSION }));
  if (migrated) save();

  const showUI = new URLSearchParams(location.search).get('ui') !== '0';
  const panel = document.getElementById('panel'), gear = document.getElementById('gear');
  const controls = document.getElementById('controls'), statusEl = document.getElementById('status');
  const fpsEl = document.getElementById('fps'), toastEl = document.getElementById('toast');
  if (!showUI) gear.style.display = 'none';

  const toggle = (open = !panel.classList.contains('open')) => panel.classList.toggle('open', open && showUI);
  gear.onclick = () => toggle(true);
  document.getElementById('close').onclick = document.getElementById('hide').onclick = () => toggle(false);
  addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' && e.target.type === 'number') return;
    if (e.key === 's' || e.key === 'S') toggle();
    if (e.key === 'Escape') toggle(false);
  });
  let gearTimer;
  addEventListener('mousemove', () => { gear.classList.add('show'); clearTimeout(gearTimer); gearTimer = setTimeout(() => gear.classList.remove('show'), 2500); });
  let toastTimer;
  const toast = (m) => { toastEl.textContent = m; toastEl.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => toastEl.classList.remove('show'), 1800); };

  let cfgTimer;
  const changed = (isView) => {
    save();
    fpsEl.style.display = view.showFps ? 'block' : 'none';
    if (isView) onView();
    else { clearTimeout(cfgTimer); cfgTimer = setTimeout(() => onConfig(cfg), 120); }
    refreshEnabled();
  };

  const refreshers = [];
  const rowsByKey = {};
  for (const sec of SCHEMA) {
    controls.append(el('h2', {}, sec.group));
    for (const it of sec.items) {
      const tgt = () => (it.view ? view : cfg);
      const type = it.type || 'range';
      let row;
      if (type === 'range') {
        const val = el('span', { className: 'val' });
        const inp = el('input', { type: 'range', min: it.min, max: it.max, step: it.step });
        const show = () => { val.textContent = it.fmt ? it.fmt(+inp.value) : (+inp.value).toFixed(2).replace(/\.?0+$/, ''); };
        inp.oninput = () => { tgt()[it.key] = +inp.value; show(); changed(it.view); };
        refreshers.push(() => { inp.value = tgt()[it.key]; show(); });
        row = el('div', { className: 'row' }, el('label', {}, it.label), inp, val);
      } else if (type === 'check') {
        const inp = el('input', { type: 'checkbox' });
        inp.onchange = () => { tgt()[it.key] = inp.checked; changed(it.view); };
        refreshers.push(() => { inp.checked = !!tgt()[it.key]; });
        row = el('label', { className: 'row check' }, el('span', {}, it.label), inp);
      } else if (type === 'select') {
        const sel = el('select', { style: 'grid-column: span 2' }, ...it.options.map(([v, t]) => el('option', { value: v }, t)));
        sel.onchange = () => { tgt()[it.key] = it.key === 'fpsCap' ? +sel.value : sel.value; changed(it.view); };
        refreshers.push(() => { sel.value = String(tgt()[it.key]); });
        row = el('div', { className: 'row' }, el('label', {}, it.label), sel);
      } else if (type === 'seed') {
        const inp = el('input', { type: 'number', min: 0, step: 1 });
        const dice = el('button', { className: 'b', title: '随机换一种布局', style: 'padding:3px 0' }, '🎲');
        inp.onchange = () => { cfg.seed = Math.max(0, Math.floor(+inp.value || 0)); changed(false); };
        dice.onclick = () => { cfg.seed = Math.floor(Math.random() * 1e6); inp.value = cfg.seed; changed(false); };
        refreshers.push(() => { inp.value = cfg.seed; });
        row = el('div', { className: 'row' }, el('label', {}, it.label), inp, dice);
      } else if (type === 'color') {
        const col = el('input', { type: 'color' });
        const w = el('input', { type: 'range', min: 0, max: 1, step: 0.01 });
        const pct = el('span', { className: 'val' });
        const showPct = () => {
          const sum = Object.values(cfg.colorWeights).reduce((a, b) => a + b, 0) || 1;
          pct.textContent = Math.round((cfg.colorWeights[it.key] / sum) * 100) + '%';
        };
        col.oninput = () => { cfg.colors[it.key] = col.value; changed(false); };
        w.oninput = () => { cfg.colorWeights[it.key] = +w.value; refreshers.forEach((f) => f.pct && f()); changed(false); };
        refreshers.push(() => { col.value = cfg.colors[it.key]; w.value = cfg.colorWeights[it.key]; showPct(); });
        const rp = () => showPct(); rp.pct = true; refreshers.push(rp);
        row = el('div', { className: 'row color' }, el('label', {}, it.label), col, w, pct);
      }
      rowsByKey[it.key] = row;
      controls.append(row);
    }
  }
  function refreshEnabled() {
    // 跟随时钟时"时刻"无意义
    rowsByKey.hour.style.opacity = cfg.timeMode === 'clock' ? 0.4 : 1;
    rowsByKey.heroSize.style.opacity = cfg.heroes ? 1 : 0.4;
  }
  const refreshAll = () => { refreshers.forEach((f) => f()); fpsEl.style.display = view.showFps ? 'block' : 'none'; refreshEnabled(); };
  refreshAll();

  const presetsEl = document.getElementById('presets');
  for (const [name, p] of Object.entries(PRESETS)) {
    const b = el('button', {}, name);
    b.onclick = () => {
      const { __view, ...rest } = p;
      cfg = resolveConfig({ ...clone(DEFAULTS), ...rest, seed: cfg.seed, quality: rest.quality || cfg.quality });
      if (__view) view = { ...view, ...__view };
      refreshAll(); changed(!!__view); if (__view) onConfig(cfg);
      toast('已应用预设：' + name);
    };
    presetsEl.append(b);
  }
  document.getElementById('reset').onclick = () => {
    cfg = resolveConfig({}); view = { ...VIEW_DEFAULTS }; refreshAll(); changed(true); onConfig(cfg); toast('已恢复默认设置');
  };

  document.getElementById('export').onclick = () => {
    const res = document.getElementById('exportRes').value;
    const [width, height] = res === 'screen'
      ? [evenClamp(Math.round(screen.width * (devicePixelRatio || 1)), EXPORT_MAX_W), evenClamp(Math.round(screen.height * (devicePixelRatio || 1)), EXPORT_MAX_H)]
      : res.split('x').map(Number);
    const st = getStatus();
    const data = { ...clone(cfg), width, height, fps: +document.getElementById('exportFps').value };
    // 视频需要确定的时间与天气：跟随时钟 / 自动天气时，取当前值
    if (data.timeMode === 'clock') { data.timeMode = 'fixed'; data.hour = Math.round(st.hour * 100) / 100; }
    if (data.weather === 'auto') data.weather = st.weather;
    if (data.quality === 'low' || data.quality === 'auto') data.quality = 'high'; // 离线导出固定高画质、结果可复现
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const a = el('a', { href: URL.createObjectURL(blob), download: 'flower-sea.config.json' });
    document.body.append(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    toast(`已导出：${hhmm(data.hour)} · ${WEATHER_NAMES[data.weather]}`);
  };
  const fileInp = document.getElementById('file');
  document.getElementById('import').onclick = () => fileInp.click();
  fileInp.onchange = async () => {
    const f = fileInp.files[0]; if (!f) return;
    try {
      const data = JSON.parse(await f.text());
      cfg = resolveConfig(data);
      if (data.width && data.height) {
        const sel = document.getElementById('exportRes'), opt = `${data.width}x${data.height}`;
        if ([...sel.options].some((o) => o.value === opt)) sel.value = opt;
      }
      if (data.fps) {
        const fpsVal = String(Math.round(+data.fps));
        const fpsSel = document.getElementById('exportFps');
        if ([...fpsSel.options].some((o) => o.value === fpsVal)) fpsSel.value = fpsVal;
      }
      refreshAll(); changed(false); toast('配置已导入');
    } catch (e) { toast('配置文件无法解析'); }
    fileInp.value = '';
  };

  let fpsN = 0, fpsT = performance.now(), lastStatus = 0;
  const qualityLabel = (st) => (st.quality ? ` · 画质 ${st.quality}${cfg.quality === 'auto' ? '（自动）' : ''}` : '');
  function tick(now) {
    fpsN++;
    if (now - fpsT > 500) {
      const st = getStatus();
      fpsEl.textContent = `${Math.round((fpsN * 1000) / (now - fpsT))} fps · ${st.size[0]}×${st.size[1]} · 草 ${st.counts?.grass} 花 ${st.counts?.flowers}${qualityLabel(st)}`;
      fpsN = 0; fpsT = now;
    }
    if (now - lastStatus > 1000) {
      lastStatus = now;
      const st = getStatus();
      if (st.hour !== undefined) statusEl.textContent = `${hhmm(st.hour)} · ${WEATHER_NAMES[st.weather] || ''}${cfg.weather === 'auto' ? '（自动）' : ''}${qualityLabel(st)}`;
    }
  }
  return state;
}

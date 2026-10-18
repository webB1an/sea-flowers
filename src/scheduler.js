// 帧率上限调度：基于 rAF 时间戳的累加器。
// 不能直接用 `now - last < 1000/cap` 判断：显示器步长（如 60Hz=16.67ms）与目标帧间隔
// （如 24fps=41.67ms）通常不整除，固定阈值会把 24fps 变成 20fps。累加器保证长期平均帧率。
export function createFrameScheduler() {
  let next = 0;
  return function shouldRender(now, cap) {
    if (!(cap > 0)) return true;                 // 不限帧：每个 rAF 都渲染
    const interval = 1000 / cap;
    if (now + 0.5 < next) return false;          // 0.5ms 容差，避免 60Hz 浮点抖动导致漏帧
    if (now - next > interval * 4) next = now;   // 页面被挂起/长时间停顿后重新对齐
    next += interval;
    return true;
  };
}

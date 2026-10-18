// 帧率上限调度：按“显示器刷新率的整数分频”渲染，避免 60fps 上限在 144/165Hz 屏幕上
// 出现 13.9/20.8ms 交替的帧间隔（肉眼会看成风摆/镜头移动“一顿一顿”）。
// 显示器刷新率从 rAF 时间戳中位数估计；上限 = refresh / round(refresh/cap)。
// 纯逻辑函数，便于在 Node 中单测。
export function createFrameScheduler() {
  let frame = 0;
  let last = 0;
  let samples = [];
  let refresh = 1000 / 60;
  return function shouldRender(now, cap) {
    if (last) {
      const d = now - last;
      if (d > 1 && d < 100) {
        samples.push(d);
        if (samples.length > 90) samples.shift();
      }
    }
    last = now;
    frame++;
    if (!(cap > 0)) return true;                 // 不限帧：每个 rAF 都渲染
    // 每 30 帧重新估计一次刷新率（中位数，抗掉帧/后台恢复）
    if (frame % 30 === 1 && samples.length >= 15) {
      const s = [...samples].sort((a, b) => a - b);
      refresh = s[Math.floor(s.length / 2)];
    }
    const stride = Math.max(1, Math.round((1000 / cap) / refresh));
    return frame % stride === 0;
  };
}

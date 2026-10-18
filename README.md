# 波斯菊花海 · 3D 动态壁纸

基于 three.js（WebGL）的程序化花海：约 8 万丛羽状叶、近万朵波斯菊、远处树线与城市，
带景深、光晕、云影、时间与天气系统。所有动画首尾无缝循环。

## 使用

- **实时壁纸**：直接打开 `index.html`（可用于 Lively Wallpaper / Wallpaper Engine 网页壁纸）。
  - 按 `S` 或点右下角 ⚙ 打开设置面板；网址加 `?ui=0` 隐藏设置按钮。
  - 时间可选：跟随电脑时间 / 固定时间 / 全天延时；天气：晴、多云、阴、雾、小雨、自动（每 3 小时变化，平滑过渡）。
- **导出视频**：面板里点"导出配置"，然后
  ```
  node render.js --config flower-sea.config.json
  ```
  其它用法：
  ```
  node render.js --hour 17.9 --weather clear          # 指定时间、天气
  node render.js --timelapse --hour 4 --duration 60   # 一个循环走完 24 小时
  node render.js --width 3840 --height 2160 --fps 60 --out 4k.mp4
  node render.js --still 2 --out poster.png           # 静帧
  ```
  需要本机安装 Chrome 或 Edge（用 GPU 渲染）以及 ffmpeg。

## 开发

- 源码在 `src/`，修改后运行 `npm run build` 生成 `dist/flower-sea.js`。
- `src/config.js` 所有参数与画质档位；`src/env.js` 时间 / 天气 → 光照；`src/field.js` 花草；
  `src/sky.js` 天空与城市；`src/particles.js` 雨、花粉、萤火虫、花瓣、蝴蝶；`src/post.js` 后期。
- 无缝循环原理：所有周期运动的频率都是 1/T 的整数倍；云层用错开一个周期的两份噪声交叉淡化。
- `legacy/` 为早期 2D Canvas 版本。

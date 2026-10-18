# 波斯菊花海 · 3D 动态壁纸

[![Smoke](https://github.com/webB1an/sea-flowers/actions/workflows/smoke.yml/badge.svg)](https://github.com/webB1an/sea-flowers/actions/workflows/smoke.yml)

基于 three.js（WebGL）的程序化花海：约 8 万丛羽状叶、近万朵波斯菊、远处树线与城市，
带景深、光晕、云影、时间与天气系统。所有动画首尾无缝循环。

## 使用

- **实时壁纸**：直接打开 `index.html`（可用于 Lively Wallpaper / Wallpaper Engine 网页壁纸）。
  无需安装依赖，`dist/flower-sea.js` 已随仓库提交。
  - 按 `S` 或点右下角 ⚙ 打开设置面板；网址加 `?ui=0` 隐藏设置按钮。
  - 时间可选：跟随电脑时间 / 固定时间 / 全天延时；天气：晴、多云、阴、雾、小雨、自动（每 3 小时变化，平滑过渡）。
  - 设置自动保存在浏览器本地（localStorage）。
- **导出视频 / 静帧**：面板里点"导出配置"，然后在项目目录运行
  ```
  node render.js --config flower-sea.config.json
  ```
  其它用法：
  ```
  node render.js --hour 17.9 --weather clear          # 指定时间、天气
  node render.js --timelapse --hour 4 --duration 60   # 一个循环走完 24 小时
  node render.js --width 3840 --height 2160 --fps 60 --out 4k.mp4
  node render.js --still 2 --out poster.png           # 静帧（单位：秒）
  node render.js --start 300 --end 600 --out part2.mp4 # 断点续渲（帧序号半开区间）
  ```
  需要本机安装 Chrome 或 Edge 以及 ffmpeg，详见下方"导出环境"。

## 导出环境

- **Node.js ≥ 18**：仅构建与离线导出需要，直接打开 `index.html` 不需要 Node。
- **Chrome 或 Edge**：`render.js` 会自动在常见安装路径查找；也可以手动指定：
  ```
  node render.js --chrome "C:\Program Files\Google\Chrome\Application\chrome.exe"
  ```
  或设置环境变量 `CHROME_PATH`。
- **ffmpeg 必须在 PATH 中**：用于编码 mp4；静帧也通过 ffmpeg 输出 PNG。用 `ffmpeg -version` 能输出版本即可。
- 输出帧数 = 时长 × 帧率。仓库内的 `flower-sea.config.json` 为 4K（3840×2160）、60fps、15 秒 → **900 帧**，
  耗时取决于 GPU，可能从数十分钟到数小时；建议先用 `--still`、较低分辨率或较短 `--duration` 试渲。
- 编码卡住或失败时 `render.js` 会报错退出并清理半成品；无进展超时默认 60 秒，可用 `--timeout <秒>` 调整。
- 导出规格：宽高自动向下取偶（H.264 要求偶数），上限 7680×4320；`--fps` 取整并限制在 1..120。
  视频显式写入 BT.709 / TV range 色彩标签（`color_range=tv`、`colorspace=bt709`），
  静帧 PNG 保持 RGB（pc/gbr）不变。
- 回读模式：`--readback chunked`（默认，按 4MB 分块回传像素，4K 导出峰值内存约减半）或
  `--readback legacy`（整帧回传，用于排障/对照）；两种模式输出像素一致。
  `--start <i> --end <j>` 只渲染帧序号区间 `[i, j)`，便于分段导出/续渲；`--bench` 打印每帧
  grab/write 耗时与内存统计。
- 依赖安装：`npm install`。`three`、`esbuild`、`puppeteer-core` 都是开发/导出依赖，不影响直接打开 `index.html`。

## 开发

- 源码在 `src/`，修改后运行 `npm run build` 生成 `dist/flower-sea.js`。
  `dist/` 是生成物，已提交以便直接打开 `index.html`，请勿手动修改。
- `src/config.js` 所有参数与画质档位；`src/env.js` 时间 / 天气 → 光照；`src/field.js` 花草；
  `src/sky.js` 天空与城市；`src/particles.js` 雨、花粉、萤火虫、花瓣、蝴蝶；`src/post.js` 后期；
  `src/quality.js` 自动画质检测与降档决策。
- 画质档位（设置面板 → 画质）：

  | 档位 | 草丛数 | 花朵系数 | MSAA | 景深采样 |
  | --- | ---: | ---: | ---: | ---: |
  | low | 26,000 | 0.5 | 关 | 16 |
  | medium | 48,000 | 0.75 | 4× | 24 |
  | high（默认） | 80,000 | 1 | 4× | 36 |
  | ultra | 130,000 | 1.3 | 8× | 48 |

  高档位几何量较大，集成显卡或 4K 屏幕下可能掉帧；可先切到较低档位，或在设置面板中降低"渲染分辨率"。
- 画质还提供 **auto（按性能）**：启动时依据 GPU 型号与渲染分辨率在 low/medium/high 中自动选择，
  运行中若连续低帧率会自动降一档（带冷却，避免抖动）；设置面板状态栏会显示当前生效档位。
  导出视频时 auto 固定按 high 渲染，保证结果可复现。
- 无缝循环原理：所有周期运动的频率都是 1/T 的整数倍；云层用错开一个周期的两份噪声交叉淡化。
- `legacy/` 为早期 2D Canvas 版本（存档，不参与主项目构建）。它使用独立的 `legacy/package.json`
  （依赖 `@napi-rs/canvas`），需要单独安装依赖后运行：
  ```
  cd legacy
  npm install
  node render.js
  ```
  同样需要 ffmpeg，默认输出文件写在 `legacy/` 目录。
- CI：GitHub Actions（`.github/workflows/smoke.yml`）在 push / PR 时运行构建一致性检查
  （`npm run build` 后 `dist/flower-sea.js` 无差异）和无头冒烟：WebGL2 可用、无 fatal 覆盖层、
  0 条 console error / pageerror（warning 只输出提示不判失败）。同一脚本可在本地运行：
  ```
  node scripts/smoke.cjs            # CHROME_PATH 可覆盖浏览器路径
  ```

## 截图

![黄金时刻](poster.jpg)

![早期 2D 版本（legacy 存档）](legacy/poster-2d.jpg)

`poster.jpg` 为黄金时刻静帧，`legacy/poster-2d.jpg` 为早期 2D 版本的画面。预览图为 1920×1080
JPEG 压缩版，用于控制仓库体积；运行 `--still` 会重新生成 PNG 静帧。其它天气与昼夜效果可在实时壁纸中切换查看。

## 视频与大文件

`videos/` 下的 3 个 mp4（共约 216MB）未纳入版本库，其中一个 117MB 超过 GitHub 单文件 100MB 限制。
如需公开托管，建议上传到 GitHub Release 附件，或使用 Git LFS 单独管理。

## 许可证

ISC，详见 [LICENSE](LICENSE)。项目使用的 three.js 为 MIT 许可，其许可证声明保留在构建产物
`dist/flower-sea.js` 末尾。

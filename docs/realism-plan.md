# 波斯菊花海 · 真实感大改计划（M0–M5）

> 状态：执行中（M0） · 版本：v1.0 · 日期：2026-10-18
> 关联任务板：task-12 ~ task-23 · 基线代码：main @ 8598a43

---

## 1. 背景与问题诊断

当前渲染（`poster.jpg` 放大与代码检查）“不真实”的根因：

| # | 问题 | 证据 |
|---|---|---|
| 1 | 全场景无方向光阴影、无 AO | `src/` 中无 `shadowMap/castShadow/SSAO/normalMap/roughness/envMap`；[src/glsl.js](src/glsl.js) `shadePlant` 为 `NdotL*0.55+0.45` + 常量环境光 |
| 2 | 花瓣为零厚度单层面片，花心是“画出来的”颜色 | [src/field.js](src/field.js) `flowerGeometry`、`FLOWER_FS` 花心分支 |
| 3 | 所有花共用 1 套几何 + 1 张 256×512 花瓣贴图 | [src/field.js](src/field.js)、[src/textures.js](src/textures.js) |
| 4 | 草为交叉面片，均匀撒点、无分簇/颜色层次 | [src/field.js](src/field.js) `createField` |
| 5 | 城市为随机 Box + 片元窗格，无立面细节/反射/层次 | [src/sky.js](src/sky.js) `createCity` |
| 6 | 强景深把远景糊成色块，远景花/草按距离放大（尺度作弊） | [src/post.js](src/post.js)、[src/field.js](src/field.js) `r > 35 / r > 60` |
| 7 | 手调 key 颜色 + 偏重饱和/对比/暗角/颗粒 | [src/env.js](src/env.js)、[src/post.js](src/post.js) |

## 2. 目标与非目标

**目标**
- 画面从“程序化插画/微缩模型”提升到“自然照片感”：重点近景花、草地层次、接触阴影、逆光透光、真实天空/城市氛围、镜头景深。
- 保持现有产品能力：实时壁纸（`index.html?ui=0`）、设置面板、时间/天气系统、无缝循环、离线视频/静帧导出、CI 冒烟。
- 性能：RTX 5060 Ti 1080p high ≥60fps、4K high ≥30fps；low/medium 可在集显运行（以 M0 实测基线校准）。

**非目标**
- 不引入路径追踪/光追、不换 WebGPU、不做移动端优化；
- 不追求微距摄影级的每根绒毛；不做需要联网资产的运行时下载；
- 不改变导出参数/色彩标签约定（BT.709/TV、PNG pc/gbr）。

## 3. 视觉目标与参考

参考图板只作视觉校准，不随仓库分发（外链 + 文字描述）：

| 参考类型 | 要吸收的特征 |
|---|---|
| 真实波斯菊近景/微距 | 花瓣薄而透光、层叠遮挡、花心管状结构、茎有圆柱感、边缘有微小破损 |
| 黄金时刻逆光花田 | 花瓣边缘透亮、草叶逆光轮廓光、长而柔和的方向阴影、空气透视 |
| 阴天/雨天花田 | 低对比柔光、地面湿润反射、颜色去饱和、雾感层次 |
| 城市天际线（黄昏/夜景） | 楼体退台/屋顶设备、玻璃反射天空、窗户明暗随机、分层大气透视 |

**目标风格**：自然写实、低饱和、阴影深但不过黑、逆光透亮、景深有亮斑 bokeh；保留现有天气/时间氛围。

## 4. 技术路线

继续在现有 **custom shader + 自定义后期** 上深化（不迁移 three 内置 PBR 材质）：

理由：草/花是大量实例化自定义几何，带自定义风场、云影、双面 alpha-to-coverage、自定义 DOF；迁移到内置材质会丢失这些并大幅增加重构风险。

### 4.1 渲染管线（目标态）

```
[每帧]
1. shadow pass（新增）: 太阳/月亮方向光深度图（0–40m 近中景，PCF）
2. IBL（限频）: sky shader → cubemap → PMREM（环境漫反射/镜面）
3. scene pass: 草/花/树/地面/城市/天空 → HDR (HalfFloat, MSAA)
   - 材质：简化 PBR（diffuse + specular + roughness + translucency）+ 方向光阴影 + 云影
4. SSAO/GTAO（新增）: half-res，深度(+法线) → 双边模糊 → 乘到场景
5. DOF: 物理 CoC + 高光 bokeh（改进）
6. bloom（双 Kawase，保留）
7. tonemap + 校色 + 轻微 grain/vignette/色散
8. 输出（canvas / readPixels 导出）
```

### 4.2 代码结构（M0b 完成后）

```
src/shader/        共享 GLSL 模块（uniforms / noise / wind / clouds / fog / lighting / shadow / ibl …）
src/textures/      程序化贴图模块（foliage / petal / wing / ground / city / common）
src/quality.js     自动画质检测与降档
src/main.js        App 装配、每帧管线、exportAPI
```

- **uniform 注册表**：每个功能模块导出自己的 uniform 组，`sharedUniforms()` 汇总；并行任务只改自己的模块。
- **并行车道**：M2 花/草 lane 独占 `src/field.js` + `src/textures/flora*`；M3 天空/城市 lane 独占 `src/sky.js` + `src/textures/city*`；公共文件由 Lead 集成。

### 4.3 备选方案

- 若自定义阴影贴图超出性能预算（见 §5）：退化为 **屏幕空间接触阴影 + 已有的云影**，保留 SSAO；并在报告记录决策。
- 若 IBL 重建开销过高：降低 cubemap 分辨率/更新频率，low 档回退常量环境光。
- 若 TAA 与 grain/DOF 兼容性差：先提高 MSAA/后处理抗锯齿，TAA 作为可选档。

## 5. 性能预算与测量方法

- 基准工具：`scripts/bench.cjs`（`--frames` 次强制渲染，`gl.readPixels(1px)` 同步，统计 CPU+GPU 帧耗时、triangles、programs、textures、显存估算）。
- 记录字段：`avgMs / p95Ms / fps / triangles / calls / programs / textures`。
- **M0 实测基线**（RTX 5060 Ti，headless Chrome，强制渲染 120/60 帧、每帧 1px readPixels 同步）：

| 分辨率/画质 | avg frame | fps（无 vsync） | triangles | draw calls | programs | textures |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| 1920×1080 high | 5.62 ms | 177.9 | 10,191,625 | 26 | 15 | 19 |
| 3840×2160 high | 12.79 ms | 78.2 | 10,191,625 | 26 | 15 | 19 |
| 1920×1080 high + M1 阴影 | 6.57 ms | 152.1 | 10,475,019 | 29 | 17 | 21 |
| 1920×1080 high + M1 阴影 + IBL | 6.73 ms | 148.5 | 10,358,451 | 34 | 16 | 22 |
| 1920×1080 high + M1 阴影 + IBL + AO | 6.75 ms | 148.1 | 10,358,453 | 36 | 18 | 24 |
| 1920×1080 high + M2 花形态 | （同 GPU 负载下 11.90 vs M1 11.98 ms，无回归） | — | 12,384,413 | 36 | 18 | 24 |
| 1920×1080 high + M2 草甸/地面 | （同 GPU 负载下 12.47 vs M2 11.47 ms，+8.7%） | — | 12,623,781 | 37 | 18 | 24 |
| 增量（阴影+IBL+AO 累计） | **+20.1%**（预算 阴影≤20%+IBL≤15%+AO≤15%） | | +167k | +10 | +3 | +5 |
| M2 花形态三角形增量 | 相对 M0 **+21.5%**（10.36M→12.38M，预算 ≤30%） | | | | | |
| M2 草甸三角形增量 | 相对 M0 累计 **+23.9%**（12.62M）；相对 M2 花 +1.9% | | | | | |

> M2 草甸/地面：低频密度场 + 分簇分布（自然空地/小径）、近景 2600 株 7 段高细节草、叶片几何收尖、6 变体羽状叶图集 + 主脉高光、草丛色温分簇、地面土壤/枯叶/草根暗部；**移除了远景草高度放大作弊**，改为密度/可见性策略。同 GPU 负载背靠背 A/B：M2 11.47ms → 12.47ms（**+8.7%，预算 ≤10%**）。

> M2 花几何改造（外瓣形态/内瓣层叠/花心几何+花药/圆柱茎/花瓣 2×2 图集/透光厚度）在同等桌面 GPU 负载下与 M1 帧时间持平（11.90 vs 11.98ms，噪声内）；M2 期间桌面 GPU 被用户环境占用 45–97%，绝对帧时间不能与 M0 空载基线直接对比，相对 A/B 为准。

> M1 阴影实现：2048² depth map、正交相机覆盖相机前方约 24m、2×2 PCF、近景花/花苞子集投射（约 150k 三角）、边缘淡出；low 档关闭、medium 1024。
> M1 IBL：sky→64² cubemap（medium 32 / ultra 128），环境光/反射接入 `shadePlant`；IBL 增量约 +0.16ms（+2.8%）。
> M1 AO：半分辨率 SSAO（12 半球采样、深度重建法线、双边模糊），在 FINAL 乘到 HDR；AO 增量在 bench 噪声内（≈+0.02ms）。
> 已知取舍：草叶投射阴影在 2048² 覆盖 24m 的分辨率下会出现模糊暗块，M1 暂只保留花/花苞投射；草层接触阴影由 AO 补足。
> 已知限制：基于深度的 SSAO 对“薄而双面”的花瓣层间/花心遮蔽不敏感（AO diff 显示花瓣区域几乎不变），花瓣层间暗部留待 M2 花几何（厚度/自遮挡/纹理 AO）解决。

- 目标（待 M0 实测校准）：

| 场景 | 目标 |
|---|---|
| 1080p high | ≥60fps（frame ≤16.7ms） |
| 4K high | ≥30fps（frame ≤33.3ms） |
| 1080p low/medium | 集显可运行（≥30fps，具体以目标机实测） |

- 每一步允许的 frame time 增量（相对 M0 基线）：阴影 ≤20%、IBL ≤15%、AO ≤15%；M2/M3 视觉内容各 ≤10% / ≤5%；M4 收尾 ≤10%。超预算即按档位降级或按 §4.3 回退。

## 6. 资产策略

- 默认继续**程序化生成**（npm 安装零资产依赖、启动可控），但花瓣/城市立面等允许生成**压缩图集**（PNG/WebP，含 normal/roughness）提交仓库：
  - 新增仓库体积 ≤6MB；
  - 启动时间预算 ≤1.5s（首帧）；
  - 图集分辨率：花瓣 atlas 2048×1024、城市立面 1024²×2、地面 detail 1024²。
- 所有贴图必须有低档降级（low 档使用较小尺寸/跳过 normal）。

## 7. 里程碑与任务

| 里程碑 | 任务 | 内容 | 依赖 | 预估 |
|---|---|---|---|---|
| **M0 定标准** | task-12 | 本计划 + 参考图板 + `capture.cjs`/`bench.cjs`/exportAPI bench + 基线 | — | 4–6h |
| | task-13 | 拆分 shader/textures 为并行模块（零视觉变更） | task-12 | 4–6h |
| **M1 光影底座** | task-14 | 方向光阴影（实例化 depth pass + PCF） | task-13 | 2–3d |
| | task-15 | 天空 IBL + 简化 PBR 材质 + 电影感调色 | task-14 | 2–3d |
| | task-16 | SSAO/GTAO + 屏幕空间接触阴影 | task-14,15 | 1.5–2d |
| **M2 植物形态** | task-17 | 花：花瓣体积/随机形态/真花心/圆柱茎/纹理与透光 | task-16 | 2–3d |
| | task-19 | 草甸/地面：分簇、颜色层次、近景几何、LOD、去尺度作弊 | task-17 | 1.5–2d |
| **M3 天空/城市** | task-18 | 天空/大气：解析散射、多层云、分层雾 | task-15 | 1.5–2d |
| | task-20 | 城市：楼型模板、立面材质/玻璃反射、夜景、层次 | task-18 | 1.5–2d |
| **M4 镜头/性能** | task-21 | 景深 bokeh、TAA/抗锯齿、构图、最终校色 | task-16,17,19,20 | 2–3d |
| | task-22 | LOD、画质档（含 cinematic）、自适应、性能收口 | task-21 | 1–2d |
| **M5 验收交付** | task-23 | 视觉 A/B 验收 + 功能回归 + 性能验收 + CI + 文档 + 提交推送 | task-22 | 1d |

## 8. 文件职责与并行车道

| 车道 | 负责文件 | 任务 |
|---|---|---|
| Lead（集成） | `src/main.js` 装配、`src/post.js`、`src/config.js`、`src/ui.js`、`scripts/`、`docs/`、CI | M0、M4、M5 |
| lighting | `src/shader/*`（shadow/ibl/ao 模块）、`src/main.js` 管线、`src/field.js`/`src/sky.js` 的材质接入 | task-14/15/16 |
| flora | `src/field.js`、`src/textures/flora*`、`src/shader/flora*` | task-17/19 |
| world | `src/sky.js`、`src/textures/city*`、`src/shader/atmos*` | task-18/20 |

> M2 与 M3 必须在 task-13 完成后、且各任务只改本车道模块时才允许并行；公共文件改动由 Lead 串行合并。

## 9. 验收流程

1. **固定场景截图**：`node scripts/capture.cjs --tag <milestone>`（黄金时刻/正午/阴天/雨天/夜晚/城市 + 英雄花近景 + 城市带），存 `.review/realism/<tag>/`。
2. **A/B 评审**：`capture.cjs --compare baseline <tag>` 输出并排图/差异统计；每个里程碑由用户逐项签收（花体积、草层次、阴影/AO、天空、城市、镜头调色）。
3. **性能验收**：`node scripts/bench.cjs --tag <milestone>` 对比 §5 预算；超预算即降级/回退。
4. **功能回归**：`node scripts/smoke.cjs`、面板/设置/导入导出、画质切换、自动画质、WebGL context 恢复、导出静帧/短视频/`--start/--end`/失败路径。
5. **CI**：构建一致性 + 无头冒烟必须绿；CI 不做视觉判断（逻辑见 `.github/workflows/smoke.yml`）。
6. **提交**：每个里程碑一个 commit（含截图/基准数据摘要），经用户确认后 push。

## 10. 风险与回退

| 风险 | 影响 | 回退/缓解 |
|---|---|---|
| 自定义阴影与实例化几何集成复杂 | 可能超期/掉帧 | 先做屏幕空间接触阴影；阴影贴图 1024 起步 |
| IBL 重建开销 | 帧时间抖动 | 限频重建（每 N 秒/过渡结束）、low 回退常量 |
| AO/阴影过强导致画面更脏 | 观感倒退 | 参数可调 + 每里程碑 A/B 签收 |
| 视觉验收主观 | 无法自动化 | 固定场景 + 参考图板 + 用户签收 |
| 仓库体积/启动时间 | 安装/首帧变慢 | 资产预算 §6 + low 档降级 |
| 大改周期长 | 中途不可用 | 每里程碑均保持可运行、可回退，CI 绿 |

## 11. 执行与分工

- Lead：task-12/13、M4、M5、集成与最终验收；
- lighting：task-14 → 15 → 16；
- flora：task-17 → 19；
- world：task-18 → 20；
- 独立 verifier（M5）：按任务板验收标准复跑。

## 12. 进度记录

| 里程碑 | 状态 | 日期 | 证据/备注 |
|---|---|---|---|
| M0 计划与基线 | ✅ 完成 | 2026-10-18 | 本文件；基线截图/bench 已生成（§13） |
| M0b 模块拆分 | ✅ 完成 | 2026-10-18 | task-13；8 张固定截图像素差 = 0，bench 5.576ms（基线 5.62ms） |
| M1 方向光阴影（首版） | ✅ 完成 | 2026-10-18 | task-14；2048²/24m/2×2 PCF；bench 6.57ms（+17.0%）；smoke/导出通过；`capture --tag m1` |
| M1 IBL + PBR 材质 + 调色 | ✅ 完成 | 2026-10-18 | task-15；天空 cubemap IBL（64²）、简化 GGX/环境反射、去饱和/暗角/颗粒收敛；累计 bench 6.73ms（+19.8%）；smoke/导出通过 |
| M1 SSAO/接触阴影 | ✅ 完成 | 2026-10-18 | task-16；半分辨率 SSAO+双边模糊；草/地面接触暗部生效（AO diff 验证），花瓣层间受深度 AO 限制（留待 M2）；累计 bench 6.75ms（+20.1%）；smoke/导出通过 |
| M2 花形态大改 | ✅ 完成 | 2026-10-18 | task-17；外瓣倒卵形/卷边、内层 6 瓣、花心环状隆起+12 花药、圆柱茎、花瓣 2×2 图集（脉纹/边缘/厚度/磨损）、透光与内瓣暗部；三角形 +21.5%（预算内），同负载帧时间与 M1 持平；`capture --tag m2` |
| M2 草甸/地面大改 | ✅ 完成 | 2026-10-18 | task-19；分簇分布/自然空地、近景高细节草 2600 株、收尖叶片、6 变体图集+主脉、草丛色温、地面土壤/枯叶/草根暗部；移除远景高度作弊；+8.7%（≤10% 预算）；`capture --tag m2-grass` |
| M2 草甸/地面 | 待开始 | — | task-19 |
| M1 光影 | 待开始 | — | task-14/15/16 |
| M2 植物 | 待开始 | — | task-17/19 |
| M3 天空/城市 | 待开始 | — | task-18/20 |
| M4 镜头/性能 | 待开始 | — | task-21/22 |
| M5 验收交付 | 待开始 | — | task-23 |

## 13. 附录：基线数据（M0 已生成）

- 基线截图：`.review/realism/baseline/`（golden / noon / overcast / rain / night / city + `golden-hero.png` / `city-band.png`，1920×1080，固定 seed=1011、t=3.0s）
- 基线 bench：`.review/realism/bench-baseline.json`（1080p）、`.review/realism/bench-baseline-4k.json`（4K）
- 基线 GPU：`ANGLE (NVIDIA, NVIDIA GeForce RTX 5060 Ti (0x00002D04) Direct3D11 vs_5_0 ps_5_0, D3D11)`
- 基线基线：1080p high **5.62ms / 177.9fps**，4K high **12.79ms / 78.2fps**；triangles 10.19M、26 draw calls、15 programs、19 textures
- 基线截图 meta：`.review/realism/baseline/meta.json`（含 commit/场景配置/GPU）
- M1 阴影对比：`capture --tag m1` → `.review/realism/m1/`；A/B 并排与逐像素数据在 `.review/realism/compare/baseline__m1/`；bench 在 `.review/realism/bench-m1.json`
- M1 IBL/材质/调色：同 tag `m1`（覆盖阴影版）；`bench-m1.json` 记录累计 6.73ms；IBL 增量约 +0.16ms
- M1 AO：`capture --tag m1-ao` → `.review/realism/m1-ao/`；`bench-m1-ao.json`；`capture --compare m1 m1-ao`；AO 作用区 diff：`.review/realism/diff/golden-ao-diff10x.png`
- M2 花形态：`capture --tag m2` → `.review/realism/m2/`（6 场景 + 花/城市 crop）；A/B：`.review/realism/diff/m1-m2-hero-ab.png`；性能对比 `bench-m1-underload.json` / `bench-m2-underload.json`（同负载，M1 11.98ms vs M2 11.90ms）
- M2 草甸/地面：`capture --tag m2-grass` → `.review/realism/m2-grass/`；同负载 A/B：`bench-m2-underload3.json`（11.47ms）vs `bench-m2-grass-underload2.json`（12.47ms，+8.7%）；三角形 12,623,781
- 已知限制：英雄花自阴影/花瓣层间暗部受 2048²、24m 覆盖范围与强景深限制；AO 对薄花瓣层间不敏感（diff 验证花瓣区域几乎不变），留待 M2 花几何（厚度/自遮挡/纹理 AO）解决；草层投射在 M1 暂关闭（避免模糊暗块），待 AO/级联方案后再评估启回。
- 验收命令：
  ```
  npm run capture -- --tag <milestone>          # 等价 node scripts/capture.cjs
  npm run bench -- --tag <milestone>            # 等价 node scripts/bench.cjs
  node scripts/capture.cjs --compare baseline <milestone>
  ```

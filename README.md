# 食物观星 · Food, Nutrition &amp; Stargazing Learning Hub

> 作者 / Curated by：**王润圆 Runyuan Wang**  
> 昆明医科大学营养与食品卫生学硕士｜中国注册营养师｜云南省天文爱好者协会秘书处干事｜公众号：圆酱说营养

这是一个**纯静态网页**项目，挂在 GitHub Pages 上就能访问，主页里整理了：

- 营养科普
- 食养与生活方式医学资料
- AI 营养工具探索
- 面向公众的天文科普

页面上没有后端、没有登录注册、没有上传按钮，**不收集任何访问者信息**。

---

## 这个仓库里都有什么

```
index.html              主页（GitHub Pages 默认入口）
styles.css              页面样式
app.js                  本地交互脚本（筛选、搜索、计算器、星空卡片）
README.md               本文件，仓库说明
DEPLOY_GITHUB_PAGES.md  非常详细的"非技术人员上传发布指南"
SITE_CHECKLIST.md       发布前的自查清单
CNAME.example           自定义域名样例（不需要可以忽略）
.nojekyll               告诉 GitHub Pages 不要用 Jekyll 处理本仓库
```

整个站点只有这 8 个文件，双击 `index.html` 也能直接在自己电脑的浏览器里打开看效果。

---

## 它能展示什么

打开主页后，从上往下依次会看到：

1. **顶部说明条**——一眼提示访客这是公共学习中心，不做诊疗。
2. **Hero**——大字标题"食物观星"，中文副标题"营养科普 · 生活方式健康 · 星空探索"，英文辅助小字 "Food, Nutrition &amp; Stargazing Learning Hub"，下方写"作者 / Curated by：王润圆 Runyuan Wang"，并展示硕士、注册营养师、天文爱好者协会秘书处干事与公众号「圆酱说营养」。
3. **关于本站**——四张卡片：这是知识库不是个人主页；关于作者（含硕士、注册营养师、天文协会与公众号信息）；为什么营养与星空放在一起；本站不会做的事。
4. **营养资料库**——按主题筛选（成人肥胖 / 儿童青少年肥胖 / 维生素 D / 生活方式医学 / 膳食指南），可关键字搜索；每条卡片附公开来源类型。
5. **小工具 · 营养科普计算器**——BMI、一日能量需求粗估、三大宏量比例提示、钠 / 膳食纤维自查；全部在浏览器本地计算。
6. **营养与星空（Astronomy &amp; Nutrition）**——6 张科普卡片 + 「为什么营养师也关心星空？」短文 + NASA/IAU 公开资源链接。
7. **观星夜宵（Night Snack for Stargazers）**——面向夜间观星、马路天文、流星雨守候、通宵拍星 / 值守等场景的 6 张轻负担夜宵卡 + 选择小原则 + **真实文献来源**（Bonnell 等 Nutrients 2019、D'Annibale 等 Nutrition Bulletin 2021、CDC/NIOSH 夜班护士膳食建议、中国居民膳食指南 2022）。不是减肥处方，也不是医学治疗。
8. **本月星空 · 免费天象来源**——本月可看什么（人工维护示例 + 发布前按 NASA What's Up / AMS 更新）+ 4 个免费公开来源链接（NASA What's Up、AMS 流星雨日历、Timeanddate 月相、NASA Night Sky Network）+ 本地月相粗估小工具（不调用任何外部 API）。
9. **AI 营养工具探索**——基本立场：AI 是助手不是出口；不替代医生与临床营养师。
10. **免责声明**——明确不是医疗器械、不诊疗、特殊人群请就医。

---

## 怎么发布出去

请直接打开同目录下的 [`DEPLOY_GITHUB_PAGES.md`](DEPLOY_GITHUB_PAGES.md)。
里面用最简单的话，一步一步教你：

1. 申请一个免费的 GitHub 账号；
2. 新建一个仓库；
3. 把本目录里的 8 个文件传上去；
4. 在仓库设置里把 GitHub Pages 打开，几分钟后就能访问。

**整套流程不需要写代码，不需要装任何软件，不需要把任何凭证交给别人。**

发布前请先按 [`SITE_CHECKLIST.md`](SITE_CHECKLIST.md) 自查一遍。

---

## 本地验收（30 秒）

不需要安装任何东西，按以下顺序看一眼即可：

1. 双击 `index.html`，浏览器打开。
2. 顶部品牌栏能看到「食物观星」大字 + 中文副标题"营养科普、生活方式健康与星空探索" + 英文辅助小字 + 你的作者位。
3. 滚到"营养资料库"，点几次顶部的主题标签，下面的卡片应该跟着筛选；在搜索框里输入"维生素"，列表应该收窄。
4. 滚到"小工具"，填入身高、体重、年龄、活动水平等数字，下方应该给出 BMI、能量、宏量、钠 / 纤维提示。
5. 滚到"营养与星空"，深色背景上能看到 6 张卡片和"为什么营养师也关心星空？"小段，下面有 NASA / IAU 的来源链接（可不点击）。
6. 滚到"观星夜宵"，能看到 6 张场景卡（流星雨守候 / 高海拔冬夜 / 马路天文 / 月圆轻食 / 通宵拍星 / 回家助眠），下面有"夜宵选择小原则"与"真实参考来源"两块。
7. 滚到"本月星空 · 免费天象来源"，深色背景上有三张卡：本月可看什么、免费公开来源链接、月相粗估小工具；选一个日期能看到月相名 + 亮面比例。
8. 滚到底部，能看到「作者 / Curated by：王润圆 Runyuan Wang」、公众号「圆酱说营养」与免责声明。

如果以上都能看到，就可以按 DEPLOY 文档上传。

---

## 安全与隐私

- 本站**不调用任何外部接口**：不加载 CDN、不引入第三方脚本、不放统计、不放广告。
- 本站**不收集访问者数据**：没有登录、没有注册、没有支付、没有上传按钮；所有计算器都在本地浏览器里完成。
- 仓库内**不包含**任何模型提示词、知识库原文、规则细节、工程参数等非公开资料；天文板块只引用 NASA、IAU 等公开科普链接。

---

## 修改说明

如果你想调整：

- **改文案**：编辑 `index.html`，找到对应的 `<h1> / <h2> / <p>` 改字即可；改完保存、上传。
- **改颜色**：编辑 `styles.css` 顶部的 `:root { ... }` 里几个颜色变量，例如 `--primary`（营养绿）、`--cosmos`（夜空靛）、`--star`（星金）。
- **加新条目**：编辑 `app.js` 顶部的 `LIBRARY_ITEMS = [ ... ]` 数组，每个对象就是一条资料库卡片；新增"营养与星空"卡片则改 `COSMOS_CARDS`；新增观星夜宵场景卡改 `NIGHT_SNACK_CARDS`。
- **更新本月星空**：每月初打开 `index.html`，在 `id="skywatch"` 那个 section 里把"本月可看什么"卡片改为当月内容，参考 NASA What's Up 与 AMS 流星雨日历的当月页面。

修改前请先用浏览器双击打开 `index.html` 看一眼当前效果，改完再打开一次确认没出错。

---

## 鸣谢与说明

- **天文资料**主要参考自 NASA Solar System Exploration、NASA Space Place、NASA Exoplanet Exploration、International Astronomical Union (IAU) 的公开科普网页；本月星空板块的当月维护参考 NASA What's Up 与 American Meteor Society 流星雨日历。本站文字为整理性表述，**不代表上述机构的官方译文或官方立场**。
- **营养与生活方式**条目参考自中国营养学会、国家卫生健康委员会、世界卫生组织等机构的公开材料。具体诊疗请回到原始权威文本及面对面就诊。
- **观星夜宵**板块的真实参考来源：
  - Bonnell EK, Huggins CE, Huggins CT, McCaffrey TA, Palermo C, Bonham MP. *Dietary Interventions for Night Shift Workers: A Literature Review.* **Nutrients**. 2019;11(10):2276. DOI: 10.3390/nu11102276. PMC: PMC6836085.
  - D'Annibale M, et al. *Eating on the night shift: A need for evidence-based dietary guidelines?* **Nutrition Bulletin**. 2021. DOI: 10.1111/nbu.12515.
  - CDC / NIOSH. *Module 9. Coping with the Night and Evening Shifts — Diet Suggestions for Night-Shift Nurses.*
  - 中国营养学会.《中国居民膳食指南（2022）》（作为一般平衡膳食原则的来源，并非专门面向夜班/观星人群）。
- 欢迎营养学、医学、公共卫生、AI 与科普传播领域的老师与前辈批评指正。

---

## 免责声明

> 请您寻求正规、专业医师及临床营养师的帮助，AI 与本站内容仅供科普参考。

本站不是医疗器械、不是医疗服务，不构成对任何具体个人的诊断、治疗、用药或减重方案建议。

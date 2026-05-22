# GitHub Pages 部署

1. 把本文件夹内全部文件上传到 GitHub 仓库根目录。
2. 仓库 Settings → Pages。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，Folder 选择 `/root`。
5. 等待 GitHub Pages 构建完成。

当前站点依赖的文件包括：`index.html`、`styles.css`、`app.js`、`food-guide-data.js`。不要漏传 `food-guide-data.js`，否则 11 个食养资料包查询库不会显示。

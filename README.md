## 页面

- `index.html`：主页介绍与 Notes 入口
- `notes.html`：笔记列表，按经济学、生活常识、考试资料三个科目分组
- `about.html`：About 独立页面
- `notes/*.html`：笔记阅读页
- `notes/*.md`：笔记 Markdown 原稿
- `notes/_note-template.md`：带详细注释的内部写作模板，不列入笔记页面

## 样式与脚本

- `css/base.css`：布局、组件、响应式规则、动画和浮动快捷按钮
- `css/themes.css`：主题颜色变量
- `js/theme.js`：应用默认主题

## 添加笔记

1. 复制 `notes/_note-template.md`，填写内容并保存为新的 Markdown 文件。
2. 为笔记创建同名 HTML 阅读页，放入 `notes/`。
3. 在 `notes.html` 对应科目分组中添加阅读页链接。

项目没有 Markdown 转 HTML 的构建步骤，因此修改 Markdown 后需同步修改对应 HTML 阅读页。

## 本地预览与部署

本项目没有依赖安装或构建步骤。可直接用浏览器打开 `index.html` 预览；部署到 Cloudflare Pages 时，将项目根目录作为静态资源目录上传即可。

## 许可

本项目按 [MIT License](LICENSE) 授权。

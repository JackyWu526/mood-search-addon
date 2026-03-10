# 🎭 Mood Search - 心情搜索

一个 Firefox 浏览器扩展，根据你的心情定制搜索体验。

## ✨ 功能特点

- **6 种心情模式**：开心、平静、兴奋、难过、专注、疲惫
- **心情主题**：每种心情有独特的配色和背景
- **智能搜索**：不同心情推荐不同的搜索引擎
  - 专注模式 → Google 学术
  - 其他模式 → Google / Bing
- **搜索历史**：记录最近的搜索，方便快速回溯
- **个性化提示**：每种心情都有温暖的提示语

## 📦 安装方法

### 方法一：从 Firefox 附加组件商店（待发布）

### 方法二：临时安装（开发测试）

1. 打开 Firefox 浏览器
2. 地址栏输入 `about:debugging`
3. 点击 "此 Firefox"
4. 点击 "临时载入附加组件"
5. 选择本扩展文件夹中的 `manifest.json`

## 🎨 心情说明

| 心情 | Emoji | 颜色 | 搜索引擎 |
|------|-------|------|----------|
| 开心 | 😊 | 金色 | Google |
| 平静 | 😌 | 天蓝 | Bing |
| 兴奋 | 🤩 | 红色 | Google |
| 难过 | 😢 | 紫色 | Bing |
| 专注 | 🤔 | 青色 | Google 学术 |
| 疲惫 | 😴 | 淡紫 | Bing |

## 🛠️ 开发

### 项目结构

```
mood-search-addon/
├── manifest.json          # 扩展配置
├── popup/
│   ├── popup.html        # 弹出页面
│   └── popup.js          # 弹出页面逻辑
├── background/
│   └── background.js     # 后台脚本
├── styles/
│   └── popup.css         # 样式文件
├── icons/                # 图标文件
└── README.md
```

### 构建发布

1. 打包扩展：
```bash
cd mood-search-addon
zip -r mood-search-addon.zip *
```

2. 提交到 Firefox 附加组件商店

## 📝 更新日志

### v1.0.0 (2026-03-10)
- 初始版本发布
- 支持 6 种心情模式
- 搜索历史功能
- 个性化主题

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 👤 作者

**JackyWu526**

GitHub: https://github.com/JackyWu526

---

让搜索更懂你的心情！🎭

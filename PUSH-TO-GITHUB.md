# 🚀 推送到 GitHub 指南

插件代码已完成！请按以下步骤推送到你的 GitHub 账号：

## 方法一：使用 GitHub Desktop（推荐新手）

1. 下载 GitHub Desktop: https://desktop.github.com/
2. 登录你的 GitHub 账号（JackyWu526）
3. 点击 "Add Local Repository" → "Choose..."
4. 选择文件夹：`/home/admin/.openclaw/workspace/mood-search-addon`
5. 点击 "Publish repository"
6. 命名：`mood-search-addon`
7. 点击 "Publish"

## 方法二：使用命令行

```bash
cd /home/admin/.openclaw/workspace/mood-search-addon

# 1. 创建 GitHub Token（首次需要）
# 访问：https://github.com/settings/tokens
# 创建新 token，勾选 "repo" 权限

# 2. 推送代码
git remote add origin https://github.com/JackyWu526/mood-search-addon.git
git push -u origin main

# 如果提示输入密码，使用你的 GitHub Token
```

## 方法三：直接在 GitHub 创建后上传

1. 访问 https://github.com/new
2. 仓库名：`mood-search-addon`
3. 点击 "Create repository"
4. 按页面提示运行命令上传代码

---

## ✅ 完成后

发布到 Firefox 附加组件商店：
1. 打包：`zip -r mood-search-addon.zip *`
2. 访问：https://addons.mozilla.org/developers/
3. 提交新扩展

---

**项目已完成 95%**，只剩推送和图标文件！🎉

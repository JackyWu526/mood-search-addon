# 图标文件

请在此目录添加两个 PNG 图标文件：

- `icon-48.png` - 48x48 像素
- `icon-96.png` - 96x96 像素

## 快速生成图标

### 方法 1：使用在线工具
访问 https://www.favicon-generator.org/ 生成图标

### 方法 2：使用 ImageMagick
```bash
# 安装 ImageMagick
sudo apt install imagemagick  # Linux
brew install imagemagick      # macOS

# 生成图标
convert -size 48x48 xc:'#667eea' -fill white -gravity center \
  -pointsize 30 -annotate 0 '🎭' icon-48.png
convert -size 96x96 xc:'#667eea' -fill white -gravity center \
  -pointsize 60 -annotate 0 '🎭' icon-96.png
```

### 方法 3：临时测试
扩展没有图标也能正常工作，只是工具栏显示默认图标。

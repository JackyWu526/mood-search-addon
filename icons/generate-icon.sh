#!/bin/bash
# 使用 ImageMagick 生成简单图标
convert -size 48x48 xc:'#667eea' -fill white -gravity center \
  -pointsize 30 -annotate 0 '🎭' icons/icon-48.png
convert -size 96x96 xc:'#667eea' -fill white -gravity center \
  -pointsize 60 -annotate 0 '🎭' icons/icon-96.png
echo "Icons generated!"

#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

tail -33 urls.txt > tem.txt
head -n 10 tem.txt > urls.txt

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://erlangtui.top&token=NHiYk6g2KD2tUmk6"
cat urls.txt
rm -rf tem.txt
rm -rf urls.txt # 删除文件

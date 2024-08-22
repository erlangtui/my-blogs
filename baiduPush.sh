#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

mv urls.txt tem.txt

sort tem.txt | tail -10 > sort.txt

cat sort.txt
echo

awk -F '\t' '{print $NF}' sort.txt > urls.txt

# 百度链接推送
curl -H 'Content-Type:text/plain' --data-binary @urls.txt "http://data.zz.baidu.com/urls?site=https://erlangtui.top&token=NHiYk6g2KD2tUmk6"

rm -rf tem.txt sort.txt urls.txt # 删除文件
echo -e '\n'

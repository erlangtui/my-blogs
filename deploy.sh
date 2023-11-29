#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置
commit_info=`git describe --all --always --long`
dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
push_branch=gh-pages # 推送的分支

# 生成静态文件
npm run build

# 进入生成的文件夹
cd $dist_path

echo 'erlangtui.top' > CNAME

git init
git add -A
git commit -m "deploy, $commit_info"
# git push -f $push_addr HEAD:$push_branch
# git push -f git@8.140.51.225:/data/website/my-blogs.git HEAD:master
git push -f git@erlangtui.top:/data/website/my-blogs.git HEAD:master

cd -
rm -rf $dist_path

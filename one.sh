set -ex

git add .
git commit -m'update'
git push origin master
git push gitee master

sh deploy.sh

npm run baiduPush

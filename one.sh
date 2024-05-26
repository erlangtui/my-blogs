set -ex

git add .
git commit -m'update'
git push
sh deploy.sh


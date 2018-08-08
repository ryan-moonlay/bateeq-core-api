echo "API Deployment"

git config --global user.email $GIT_EMAIL
git config --global user.name $GIT_NAME

if [ "$BRANCH" == "dev" ]; then
    git clone $GIT_URL_DEV out
elif [ "$BRANCH" == "uat" ]; then
    git clone $GIT_URL_UAT out
elif [ "$BRANCH" == "master" ]; then
    git clone $GIT_URL_MASTER out
fi

mkdir -p out
cp -a * out/.
cd out
rm -rf out
rm -rf node_modules
npm install

git add .
git commit -m "Automated Deployment"

git push origin master

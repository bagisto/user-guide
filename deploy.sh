#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

echo 'docs.bagisto.com' > CNAME

git init
git add -A
git commit -m 'chore: deploy docs to GitHub'
git push -f git@github.com:bagisto/user-guide.git master:gh-pages

cd -

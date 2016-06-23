rm -rf .git

rm client/imports/lib
cp -r ../lib client/imports/

git init
git add -A
git commit -m 'init'

heroku git:remote -a react-super-components
git push heroku master --force &> /dev/null &

rm -r client/imports/lib
ln -s ../../../lib client/imports/lib

rm -rf .git

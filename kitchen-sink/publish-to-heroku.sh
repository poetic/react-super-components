rm client/imports/lib
cp -r ../lib client/imports/

rm -rf .git
git init
git add -A
git commit -m 'init'

heroku git:remote -a react-super-components
git push heroku master --force &> /dev/null &

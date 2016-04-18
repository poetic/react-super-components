rm client/imports/lib
cp -r ../lib client/imports/
git add -A
git commit -m 'please revert me after push to heroku'
# You can ctrl-c to shut heroku push, it will run at the background
git push heroku
git reset --hard HEAD~1

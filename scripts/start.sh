echo "> Starting prepublish run"
echo ""
npm run prepublish
echo ""
echo "> Prepublish finished"
echo "Installing node_modules"
echo ""
cd ./kitchen-sink
rm -rf node_modules
npm install
echo ""
echo "Starting Meteor..."
echo ""
meteor
#!/bin/bash

unameOut="$(uname -s)"

echo "$unameOut";

rm -rf ../node_modules/
rm -rf node_modules/
yarn install
rm -rf node_modules/react-native-simple-dialogs/Sample/ 
rm -rf node_modules/react-native-simple-dialogs/.git/

if [ "$unameOut" == "Darwin" ]; then
    cd ios
    pod install
fi

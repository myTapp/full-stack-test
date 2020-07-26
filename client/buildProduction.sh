#!/bin/bash

npm run build
rm -rf ./build
mkdir -p ./build
cp ./public/index.html ./build/
cp ./public/bundle.js ./build/

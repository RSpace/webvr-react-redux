#!/usr/bin/env bash

# Copy template files to src folder
mkdir -p ./src/js
cp ./_final/entrypoint2.js ./src/js/entrypoint.js
cp ./_final/panorama2.js ./src/js/panorama.js
cp ./_final/store.js ./src/js/store.js

# Run webpack build
npm run build-js

# Copy html file to build folder
cp ./src/html/production/* ./build/

# Copy images to build folder
cp -r ./src/images/ ./build/images

# Remove js files from src
rm -r ./src/js

#!/usr/bin/bash

# build js
if ! npx uglifyjs ./scripts/chess-piece.js ./scripts/**/*.js ./scripts/*.js -o ./index.js
then
    echo "An error occurred while compressing js files"
    exit 1
fi
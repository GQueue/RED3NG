#!/bin/sh

# Node and Requirejs is required to run this build script.
# Node can be installed with HomeBrew --> `brew install node`
# After Node is install install Requirejs --> `npm install -g requirejs`

PROJECT_DIR=`pwd`

# Remove old css build.
rm ${PROJECT_DIR}/app/styles/style.min.css

# Build new minified css.
r.js -o ${PROJECT_DIR}/app/build/build.css.js

# Using Gulp to automate web building

Gulp is a tool for automating tasks. The following are basic instructions for creating a gulp file.

## Dependencies

1. Node

   - Check if you have node, type node --version in command line
   - If not installed, go to nodejs.org and install
   - node installs the node package manager, npm, type npm --version to confirm

2. Gulp

   - Check if you have gulp, type gulp --version
   - If you want to remove an older version, type npm rm --global gulp
   - If you need to install gulp, type npm install --global gulp-cli. You may need to type sudo at beginning to gain rights.

## Creating the package.json file

1. In the folder you want to create it, type npm init, this will walk you through the process of creating your package.json file. Hitting enter will create the package.json file.

2. Install the local gulp, type npm install --save-dev gulp. This should install gulp locally and update the package.json file

3. Confirm gulp by typing gulp --version, you should see the CLI and local versions listed

## Start installing plugins

These are example plugins for automation. The pattern will be to type npm install --save-dev and then the name of the plugin

1. Browser sync (automatically reload browser window) - npm install --save-dev browser-sync

2. Auto prefixeer (add browser css prefixes) - npm install --save-dev gulp-autoprefixer

3. Change (process only changed items) - npm install --save-dev gulp-changed

4. Clean CSS (minify css files) - npm install --save-dev gulp-clean-css

5. Concat (merge css/js files) - npm install --save-dev gulp-concat

6. Image min (reduce image file sizes) - npm install --save-dev gulp-imagemin

7. Line ending corrector - npm install --save-dev gulp-line-ending-corrector

8. Sass plugin - npm install --save-dev gulp-sass

9. Source maps (to help figure out where in sass, code is located) - npm install --save-dev gulp-sourcemaps

10. Uglify (minimizes JS files) - npm install --save-dev gulp-uglify

## Creating the gulp file

In the same folder as the package.json file, create a file called gulpfile.js
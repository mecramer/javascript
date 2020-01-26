// when something isn't working, the first step is to look at the console in the browser
// biggest clue is it usually tells you the file and line number where the error is occurring
// closing curly braces or parenthesis is often a problem, use the color code to make sure all are closed properly
// in addition to console.log, there is console.info
// console.error is another, like console.log but is red and may have more info about an error
// see https://developer.mozilla.org/en-US/docs/Web/API/console

// more advanced methods
// Sources tab in chrome inspector
// go to a line of code, set a break point
// from there, step into would go to next line of code

// you can also run through an online tool like JSLint, jslint.com
// it gives a ton of errors, its opinionated, focuses on small, irrelevant things
// JSHint is better, more leniant, jshint.com

// Automated linting tools
// can be installed with node package managers
// ESLint is good for integrated tools
// requires node.js and npm
// npm install -g eslint
// next, you need to set up an npm environment for your project
// npm init
// this will create a package.json in project file, which tells node which tools are needed
// eslint --init
// this will setup eslint in the project after you answer the questions
// to setup the IDE side - install an ESLint extension

// minifying can be done through task manager like uglify-js
// uglify-js-es6 will work with es6 commands
// npm install -g uglify-js-es6
// to run uglify filename.js -o filename.min.js (this would create it in same folder)
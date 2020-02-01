// with babel, we put ES6 code in and get ES5 code out
// one way to use babel is to have a script tag call a CDN library for babel
// usually a build tool is used for transpiling, for instance, webpack
// webpack is a tool that helps us load all of our dependencies
// to get started, we need to create a package.json file for our dependencies
// in terminal: npm init and then follow the prompts
// next - sudo npm install -g webpack
// intall babel - npm install --save-dev babel-loader
// now we need to create a webpack config file
// create a new file called webpack.config.js
// in that file:
// var webpack = require('webpack');
// module.exports = {
//   entry: '.scripts.js,,
//   output: {filemane: 'bundle.js'},
//   module: {
//     rules: [
//        {
//         test: /\.js?/, 
//         loader: 'babel-loader', 
//         exclude: /node_modules/,
//         query: {
//           presets: ['env']
//         }
//        }
//     ]
//   }
// };
//
// now we want to install webpack as a dev dependency:
// npm install webpack@1.12.2 --save-dev
// now we want to install our babl dependencies:
// npm install babel-core@5.8.29 --save-dev
// and finally install babel loader:
// npm install babel-loader@5.3.2 --save-dev

// all the above instruction are for webpack 2, to upgrade to webpack 3:
// npm install webpack@3.2.0 --save-dev
// npm install babel-core@6.25.0 --save-dev
// npm install babel-loader@7.1.1 --save-dev
// npm install babel-preset-env@1.6.0 --save-dev
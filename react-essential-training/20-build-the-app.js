import React from 'react'
import {render } from 'react-dom'
import Library from './Library'

let bookList = [
  {'title': 'The Sun Also Rises', 'author': 'Ernest Hemingway', 'pages': 260},
  {'title': 'White Teeth', 'author': 'Zadie Smith', 'pages': 480},
  {'title': 'Cat\'s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304},
  {'title': 'Add as Many as You Like', 'author': 'Books', 'pages': 2}
];

render(
  <Library books={bookList} />,
  document.querySelector('#root')
);

// to build the application, run: npm run build
// this will minify the files
// this is sent to a build folder

// this can be served locally using a static server called using an npm package called serve
// sudo npm install serve -g
// then: serve -s build
// serves it to localhost:5000

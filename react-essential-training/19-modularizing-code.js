import React from 'react'
import {render } from 'react-dom'
import Library from './Library'

// As files get larger, you may want to modularize by sending parts to other files
// they are then sent back and forth using import/export
// this also makes it easier for multiple people to work on files at the same time
// here we sent parts of the file to Book.js, Hiring.js, NotHiring.js, and  Library.js

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

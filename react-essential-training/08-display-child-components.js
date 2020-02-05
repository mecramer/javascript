import React, { Component } from 'react';
import {render } from 'react-dom';

// more real world, get the data to display from an array
let bookList = [
  {'title': 'The Sun Also Rises', 'author': 'Ernest Hemingway', 'pages': 260},
  {'title': 'White Teeth', 'author': 'Zadie Smith', 'pages': 480},
  {'title': 'Cat\'s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304},
  {'title': 'Add as Many as You Like', 'author': 'Books', 'pages': 2}  
];

const Book = ({title, author, pages}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  )
}

// passing thee books props set in the render function
// using arrow function, passing book and i (for a key) and returning the <Book /> for each book
// use .map to go through the array
// also add the key, React requests this
// title, author and pages are the props
const Library = ({books}) => {
  return (
    <div>
      {books.map(
        (book, i) => 
          <Book 
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages} />
      )}
    </div>
  )
}

// passing booklist as a prop books
render(
  <Library books={bookList} />,
  document.querySelector('#root')
);

import React, { Component } from 'react';
import {render } from 'react-dom';

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

// in order to use state, components must be a class rather than a funcgion
// refactoring Library function from 08-display-child..
// functions need a constructor object
// in the render method, using destructuring to put the books array in props
// the constructor method takes in props
// use super(props) to create a new instance of the class
// state is an object with keys on it
class Library extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  render() {
    console.log(this.state);
    const {books}= this.props
    return (
      <div>
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>  
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
}

render(
  <Library books={bookList} />,
  document.querySelector('#root')
);

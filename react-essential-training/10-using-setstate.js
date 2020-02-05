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

class Library extends Component {
  
  state = {open: false}
  
  // setState helps us change state, doing it here through a method
  // setState takes in an object which resets the state
  // open matches the state key variable and we do whatever the opposite of what it currently is (true or false)
  // .this is being binded by the arrow function for toggleOpenClosed
  // setStat is asynchronous, so a callback function can be used to find previous state
  // setState accepts a function with the first parameter being the current state, 
  //   the return value of the function will update the state
  // we are using an arrow function to bind this
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  // the button toggles the h1 to show open or closed
  // this.toggleOpenClosed means its referring to the ojbect its located in, the same as its being called from
  render() {
    const {books}= this.props;
    return (
      <div>
      <h1>The library is {this.state.open ? 'open' : 'closed'}</h1>  
      <button onClick={this.toggleOpenClosed}>Change</button>
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

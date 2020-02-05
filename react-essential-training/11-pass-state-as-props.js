import React, { Component } from 'react';
import {render } from 'react-dom';

let bookList = [
  {'title': 'The Sun Also Rises', 'author': 'Ernest Hemingway', 'pages': 260},
  {'title': 'White Teeth', 'author': 'Zadie Smith', 'pages': 480},
  {'title': 'Cat\'s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304},
  {'title': 'Add as Many as You Like', 'author': 'Books', 'pages': 2}  
];

// we are accessing the state to set some information about the bookmark
//   after adding freeBookmark to the props in the parameter
const Book = ({title, author, pages, freeBookmark}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? 'yes!' : 'no!'}</p>
    </section>
  )
}

// its a good rule of thumb to keep all state in the root of the tree, here, that's the Library component
// its called lifting state up, https://reactjs.org/docs/lifting-state-up.html
// reason: if state is listed in local components it's easy to lose track of that state
// the state at the root is sometimes called the source of truth
class Library extends Component {
  
  state = {
    open: true,
    freeBookmark: true
  }
  
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  
  // in freeBookmark e are passing the state
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
              pages={book.pages}
              freeBookmark={this.state.freeBookmark} />
        )}
      </div>
    )
  }  
}

render(
  <Library books={bookList} />,
  document.querySelector('#root')
);

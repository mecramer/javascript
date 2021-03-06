import React, { Component } from 'react';
import {render } from 'react-dom';

// lifecycles descbribes all of the functions that are called when component mounts, updates, unmounts, etc
// see http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

let bookList = [
  {'title': 'The Sun Also Rises', 'author': 'Ernest Hemingway', 'pages': 260},
  {'title': 'White Teeth', 'author': 'Zadie Smith', 'pages': 480},
  {'title': 'Cat\'s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304},
  {'title': 'Add as Many as You Like', 'author': 'Books', 'pages': 2}  
];

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

const Hiring = () =>
  <div>
    <p>The library is hiring. Go to www.library.com/jobs for more.</p>
  </div>

const NotHiring = () =>
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>

// component lifecycle methods are only available when using class syntax
// the only required component of lifecycle is render
// the constructor lifecycle method is called before the component is mounted, its a great place to initialize state
//   you can also bind event methods to the component using the constructor
class Library extends Component {
  
  // componentDidMount() runs when a component is mounted 
  componentDidMount() {
    console.log('The component is now mounted')
  }

  // componentDidUpdate() runs whenever the component is updated, such as changing state
  componentDidUpdate() {
    console.log('The component just updated')
  }
  
  state = {
    open: true,
    freeBookmark: true,
    hiring: false
  }
  
  toggleOpenClosed = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }
  
  render() {
    const {books}= this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}
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

import React, { Component } from 'react';
import {render } from 'react-dom';

// in a class component we handle default props by setting up the static property
// in a function component, we use the default argument syntax
let bookList = [
  {'title': 'The Sun Also Rises', 'author': 'Ernest Hemingway', 'pages': 260},
  {'title': 'White Teeth', 'author': 'Zadie Smith', 'pages': 480},
  {'title': 'Cat\'s Cradle', 'author': 'Kurt Vonnegut', 'pages': 304},
  {'title': 'Add as Many as You Like', 'author': 'Books', 'pages': 2}  
];

// in functions, you can set default values where we set the properties up
const Book = ({title='No Title Provide', author = 'No Author', pages=0, freeBookmark}) => {
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

class Library extends Component {  
  // in a class, you can set default properties with a static property called default props
  //   this default will show if there is no value available for books
  //   this is the way to do it in classes, in funtions, you use defaults in the argument
  static defaultProps = {
    books: [
      {'title': 'Tahoe Tales', 'author': 'Chet Whitley', 'pages': 1000}
    ]
  }
  
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
  }
  
  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log('The component just updated')
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
        {this.state.loading 
          ? 'loading...' 
          : <div>
              {this.state.data.map(product => {
                return (
                  <div key={product.id}>
                    <h3>Library Product of the Week</h3>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <img src={product.image} alt={product.name} height={product.height}></img>
                  </div>
                )
              })}
            </div>}
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

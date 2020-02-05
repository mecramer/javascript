import React, { Component } from 'react';
import {render } from 'react-dom';

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

class Library extends Component {  
  componentDidMount() {
    this.setState({loading: true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({data, loading: false}))
  }

  componentDidUpdate() {
    console.log('The component just updated')
  }
  
  state = {
    open: true,
    freeBookmark: true,
    hiring: true,
    data: [],
    loading: false
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
                  // we also had a warning about React wanting a key
                  // we'll set it to the product id
                  <div key={product.id}>
                    <h3>Library Product of the Week</h3>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    {/* React has accessibility testing built in from a11y, warns if we don't have alt tag */}
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

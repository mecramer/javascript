import React from 'react'; //import the React library in order to use it
import ReactDOM from 'react-dom'; // provides us with a render method for components

// styling a component
var style = {
  backgroundColor: 'orange', // notice in JS we use camel case, rather than dashes (background-color)
  color: 'white',
  fontFamily: 'Arial'
};

// create a React element
// const title = React.createElement (
//   'h1', // first argument is type of element we want to create
//   {id: 'title', className: 'header', style: style}, // second argument is attributes we want to provide (set as null if none)
//   'Hello World' // display any child elements
// );

// create a React element with a child element
const title = React.createElement (
  'ul', // first argument is type of element we want to create
  {id: 'title', className: 'header', style: style}, // second argument is attributes we want to provide (set as null if none)
  React.createElement (
    'li',
    {},
    'item on our list' // display any child elements
  ) 
);

// there's an easier way to do this, using JSX (JavaScript as XML), a tag based syntax
// we are creating the element(s) directly in the render method, not using the createElement method
ReactDOM.render(
  <div style={style}>
    <h1 id='heading-element'>Hello  World!</h1>
    <p>We're glad you are here!</p>
  </div>,
  document.querySelector('#root')
);

// rendering the element to the DOM
ReactDOM.render(
  title, // first argument, what do we want to render
  document.querySelector('#list') // second argument, where do we want to render
);


import React from 'react';

import  './Person.css';

// In its simplest form, a component is just a function, which returns some JSX
// this should be your default way of creating components
// if we want to do JS in our return statement, we wrap the JS part in curly braces
//   these are for executing 1 line expressions. if you wanted more involved returns, you would call a function in it
// using props, we can get access to properties passed with person
// props.name for function, this.name for classes!!
// .children is a React reserved word.
//   the children could be text, list items, other React components, anything

const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} and I am from {props.country}!</p>
      <p>{props.children}</p>
      {/* here we are giving an input box for user to change his name */}
      {/* props.name shows the current value, setting up a two way binding */}
      <input type='text' onChange={props.changed} value={props.name}></input>
    </div>    
  )
}

// function i wrote to only return p tag if there are children
// const children = (children) => {
//   let text = children;
//   if (text) {
//     return <p>{text}</p>;
//   }
//   else {
//     return false;
//   }
// }

export default person
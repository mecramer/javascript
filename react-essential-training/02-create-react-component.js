import React from 'react'; 
import ReactDOM from 'react-dom';

// creating a component using Reacts class syntax
// all React class components have a render() method which describes what we want to render to the DOM
// all components need to be capitalized
class Message extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Everyone</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <Message />,
  document.querySelector('#root')
);




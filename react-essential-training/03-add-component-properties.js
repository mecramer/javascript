import React from 'react'; 
import ReactDOM from 'react-dom';

// to make this message dynamic, we'd use props
// the first step is to pass data to the Message component
// its then sent to the class through this.props.name-of-property placed within curly quotes (because its JSX)
// props is an object, it can contain multiple properties
// the two sets of curly braces for style is 1 for the JSX expression and 2 for the style object
class Message extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{color: this.props.color}}>
          {this.props.msg}
        </h1>
        <p>I'll check back in {this.props.minutes} minutes.</p>
      </div>
    )
  }
}

// whenever we are passing a number or boolean as a property (props), we need to pass as a JSX expression with curly braces
ReactDOM.render(
  <Message color='blue' msg='how are you' minutes={10} />,
  document.querySelector('#root')
);




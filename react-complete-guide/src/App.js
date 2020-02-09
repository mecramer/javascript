import React, { Component } from 'react'; // component allows you to use
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // inside a class, we don't need the var, let or const keyword
  state = {
    persons: [
      { name: 'Mark', country: 'USA' },
      { name: 'Volker', country: 'Germany' },
      { name: 'Nadia', country: 'Pakistan' }
    ],
    otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Marky;
    // console.log('was clicked.')
    // 'this' works here because we are using an arrow function
    this.setState({
      persons: [
        { name: 'newName', country: 'USA' },
        { name: 'Volker', country: 'USA' },
        { name: 'Nadia', country: 'USA' }
      ]
    });
  };

  // function to get name from input box and change dynamically
  // only applying to second person right now
  // take a click event from person and get its target value (input in the box)
  nameChangedHander = (event) => {
    this.setState({
      persons: [
        { name: 'Mark', country: 'USA' },
        { name: event.target.value, country: 'USA' },
        { name: 'Nadia', country: 'USA' }
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      // syntatical sugar, not actual html, React turns it into html
      // class can't be used because its a reserved word in JavaScript
      // JSX expressions must have 1 wrapping element, like the div here
      // wrapping this in parenthesis allows you to use multiple lines
      // name and country are goign to get passed to Person as props
      
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* don't add parenthesis to the function call here */}
        {/* bind this binds 'this' into the class */}
        {/* the arrow function  is another way to send the newName to the handler, but bind is preferred for performance reasons */}
        <button 
          style={style}
          onClick={ () => this.switchNameHandler('Yes')}>Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          country={this.state.persons[0].country}
        />
        <Person
          name={this.state.persons[1].name}
          country={this.state.persons[1].country}
          click={this.switchNameHandler.bind(this, 'oh no')}
          changed={this.nameChangedHander}
        >
          My Hobbies: Tennis
        </Person>
        <Person
          name={this.state.persons[2].name}
          country={this.state.persons[2].country}
        />
      </div>
    );
    // the above JSX is compile to what's this:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

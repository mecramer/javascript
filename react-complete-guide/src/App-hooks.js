import React, { useState } from 'react'; // changing from Component to UseState for functional hooks
import './App.css';
import Person from './Person/Person';

// changing class component to functional component to use hooks
const app = props => {
    // useState returns an array with exactly 2 elements (1. current state, 2. a function to update the state)
    // using destructuring to pull elements out of the array (personsState and setPersonsState)
    // one key difference: the function that updates DOES NOT merge whatever you pass to it with the old state
    //    instead, it replaces it
    // to solve this, best solution is to use useState() multiple times
    const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Mark', country: 'USA' },
        { name: 'Volker', country: 'Germany' },
        { name: 'Nadia', country: 'Pakistan' },
      ],
      otherState: 'some other value'
    });

    // use of a second useState
    const [ otherState, setOtherState ] = useState({otherState: 'some other value'})

    console.log(personsState, otherState);

    // you can have functions inside of functions
    const switchNameHandler = () => {
      // DON't DO THIS: this.state.persons[0].name = 'Spark';
      // the setState method lets us update the property and make sure React knows and updates the DOM
      // it merges this updated data with existing data
      // in this case, otherState would not be affected, it only updates what changes
      // this.setState turns into setPersonsState, the function that updates the data
      setPersonsState({ 
        persons: [
        { name: 'Marky', country: 'USA' },
        { name: 'Volker', country: 'Germany' },
        { name: 'Nadia', country: 'USA' },
      ]
      })
    }

    return (
      // syntatical sugar, not actual html, React turns it into html
      // class can't be used because its a reserved word in JavaScript
      // JSX expressions must have 1 wrapping element, like the div here
      // wrapping this in parenthesis allows you to use multiple lines
      // name and country are goign to get passed to Person as props
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>I'm really working</p>
        {/* don't add parenthesis to the function call here */}
        {/* this.switchHander just becomes switchHandler, no 'this' wihout a class */}
        <button onClick={switchNameHandler}>Switch Name</button>
        {/* this.state.persons gets replaced by personsState.person to get original state */}
        <Person name={personsState.persons[0].name} country={personsState.persons[0].country} />
        <Person name={personsState.persons[1].name} country={personsState.persons[1].country}>My Hobbies: Tennis</Person>
        <Person name={personsState.persons[2].name} country={personsState.persons[2].country} />
      </div>
    );
    // the above code gets compiled to React.createElement code like below:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now'));

}

export default app;  

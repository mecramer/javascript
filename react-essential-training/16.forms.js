import React, { Component } from 'react';
import {render } from 'react-dom';

class FavoriteColorForm extends Component {
  // state is used to help parse info coming from the DOM -> form
  // we use state to setup an initial value and as new values come in from the form
  //   we can parse them and do what we want
  state = { value: null}
  
  // newColor sets the state for value, using setState
  newColor = e =>
    this.setState({ value: e.target.value})
  
  // on form submit, we are going to run this to log to console
  submit = e => {
    console.log(`New Color ${this.state.value}`)
    e.preventDefault()
  }
  
  render() {
    return (
      <form onSubmit={this.submit}>
        <label>Favorite Color:
          <input
            type='color'
            onChange ={this.newColor}
          />
          <button>Submit</button>
        </label>
      </form>
    )
  }
}

render(
  <FavoriteColorForm />,
  document.querySelector('#root')
);

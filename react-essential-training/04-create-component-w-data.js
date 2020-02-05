import React, { Component } from 'react'; // adding {Component} allows you to change React.Component to just Component 
import {render } from 'react-dom'; // importing {render} lets us change ReactDOM.render to just render

// creating some data to use
let skiData = {
  total: 50,
  powder: 20,
  backcountry: 10,
  goal: 100
}

// extends React.Component replaced by just Component due to importing Component in line 1
// if you'd like, you can destructure the props and then just refer to them as their property name
//   rather than something like this.props.total
class SkiDayCounter extends Component {
  render() {
    const {total, powder, backcountry, goal} = this.props;
    return (
      <section>
        <h1>Ski Days</h1>
        <div>
          <p>Total Days: {total}</p>
        </div>
        <div>
          <p>Powder Days: {powder}</p>
        </div>
        <div>
          <p>Backcountry Days: {backcountry}</p>
        </div>
        <div>
          <p>Goal: {goal}</p>
        </div>
      </section>
    )
  }
}

// with the {Component} added at top, you can also change ReactDOM.rener to just render, if you'd like
render(
  <SkiDayCounter 
    total={skiData.total} 
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.querySelector('#root')
);




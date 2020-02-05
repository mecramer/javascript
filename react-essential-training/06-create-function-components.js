import React, { Component } from 'react';
import {render } from 'react-dom';

let skiData = {
  total: 41,
  powder: 20,
  backcountry: 10,
  goal: 106
}

// we now have to have the methods as separate standing functions, instead of methods of a class object
const getPercent = decimal => {
  return (decimal * 100).toFixed(1) + '%';
}
const calcGoalProgress = (total, goal) => {
  return getPercent(total / goal);
}

// we can use functions instead of classes to create components
// as in the class, we can destructure the props (remove props and replace with all of the names of the props)
//   and when we destructure, we than call them without the props.name way, just the name
//   ie, total instead of props.total
const SkiDayCounter = ({total, powder, backcountry, goal}) => {
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
          <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
        </div>
      </section>
  )
}
render(
  <SkiDayCounter 
    total={skiData.total} 
    powder={skiData.powder}
    backcountry={skiData.backcountry}
    goal={skiData.goal}
  />,
  document.querySelector('#root')
);




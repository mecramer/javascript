// this is using recursion to loop through each employee
var orgChart = {
  name: 'Michael', subordinates: [
    {
      name: 'Andy', subordinates: [
        {
          name: 'Dwight', subordinates: []
        },
        {
          name: 'Kevin', subordinates: []
        }
      ]
    }
  ]
};

var fn = function (topEmployee) {
  console.log(topEmployee.name);
  for (var i = 0; i < topEmployee.subordinates.length; i++) {
    fn(topEmployee.subordinates[i]);
  }
};

fn(orgChart);
// result: Michael, Andy, Dwight, Kevin
// fn is the recursive call


// Now we are assigning fn to a new variable, fn2
// This is common, treating a function as a variable and reassigning it
var orgChart = {
  name: 'Michael', subordinates: [
    {
      name: 'Andy', subordinates: [
        {
          name: 'Dwight', subordinates: []
        },
        {
          name: 'Kevin', subordinates: []
        }
      ]
    }
  ]
};

var fn = function (topEmployee) {
  console.log(topEmployee.name);
  for (var i = 0; i < topEmployee.subordinates.length; i++) {
    fn(topEmployee.subordinates[i]);
  }
};

var fn2 = fn;
fn = null;
// fn2(orgChart);
// result: Michael, TypeError fn is not a function
// fn2 still exists, which is why we get Michael, but we wiped otu fn1


// we can fix this by naming the function
// fn is now a function expression that is named
// instead of calling fn, we call showAllEmployees()
var orgChart = {
  name: 'Michael', subordinates: [
    {
      name: 'Andy', subordinates: [
        {
          name: 'Dwight', subordinates: []
        },
        {
          name: 'Kevin', subordinates: []
        }
      ]
    }
  ]
};

var fn = function showAllEmployees (topEmployee) {
  console.log(topEmployee.name);
  for (var i = 0; i < topEmployee.subordinates.length; i++) {
    showAllEmployees(topEmployee.subordinates[i]);
  }
};

var fn2 = fn;
fn = null;
fn2(orgChart);
// result: Michael, Andy, Dwight, Kevin
// another big benefit of using named funtions rather than anonymous functions

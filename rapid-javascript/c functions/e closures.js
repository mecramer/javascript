// sometimes you want a function to persist, you want to use it over and over
// not only do you want the function to exist, you want the entire context of the function to exist
// that includes the function and all the variables in its parent functions
// closures occur at runtime
// closures can be though of as a function that persists
// functions are a lot like objects in JS, they get created, they have a lifecycle and then get garbage collected 
// when they can't be used anymore
// in a closure, we want to prevent that garbage collection, we want to hold onto a function

// here, updaeFn is a closure and it points back to the generator function
var SalaryUpdater = function (salary) {
  var currentSalary = salary;
  var generator = function () {
    currentSalary *= 2;
    return currentSalary;
  };
  return generator;
};
var updateFn = SalaryUpdater(50000);
console.log(updateFn());
// result: 100000
// as long as updateFn is going to persist, and long as it is in scope, the generator function will exist along with its context
// it will be able to access currentSalary through the function




// Here we are going to call updateFn twice, just to show that it is persisting
var SalaryUpdater = function (salary) {
  var currentSalary = salary;
  var generator = function () {
    currentSalary += 10000;
    return currentSalary;
  };
  return generator;
};
var updateFn = SalaryUpdater(50000);
updateFn();
console.log(updateFn());
// result: 70000
// each call to updateFn is increasing the salary by 10k
// we have a closure, currentSalary is persisting

// event handlers are a common place to see closures
// timer functions are another one

// Closures are useful because they let you associate some data (the lexical environment) with a function that 
// operates on that data. This has obvious parallels to object-oriented programming, where objects allow us to associate 
// some data (the object's properties) with one or more methods.

// Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

// Situations where you might want to do this are particularly common on the web. Much of the code we write in 
// front-end JavaScript is event-based — we define some behavior, then attach it to an event that is triggered 
// by the user (such as a click or a keypress). Our code is generally attached as a callback: a single function 
// which is executed in response to the event.

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
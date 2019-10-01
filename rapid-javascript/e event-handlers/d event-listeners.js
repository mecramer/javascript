// Event listeners are the most modern way of handling events, when using modern browsers
// event listeners handle many of the problems with the older methods


// <input id="submit1" type="button">
var button = document.getElementById('submit1');
button.addEventListener('click', function () {
  console.log('Button Clicked');
});
// result: Button Clicked
// two main arguments to addEventListner: first is the name of the event, second is the handler function
// this is probably the best way to setup events


// <input id="submit1" type="button">
var button = document.getElementById('submit1');
button.addEventListener('click', function () {
  console.log('Button Clicked');
});
var button = document.getElementById('submit1');
button.addEventListener('click', function () {
  console.log('Another Listener Function');
});
// result: Button Clicked Another Listener Function
// each one of these events gets run on a click, we can have as many listeners as we'd like


// <input id="submit1" type="button">
var button = document.getElementById('submit1');
var submitHandler = function formSubmitHandler() {
  console.log('in formSubmitHandler()');
};
button.addEventListener('click', submitHandler);
// result: in formSubmitHandler()
// this is a better way to call addEventListener, pass it a function expression instead of using an anonymous function


// <input id="submit1" type="button">
var button = document.getElementById('submit1');
var submitHandler = function formSubmitHandler() {
  console.log('in formSubmitHandler()');
};
button.addEventListener('click', submitHandler);
button.removeEventListener('click', submitHandler);
// result: nothing
// we created the event listener but then we removed it before it was run
// this way our code won't interfere with other code that may be working on the same event

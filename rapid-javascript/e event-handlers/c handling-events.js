// body of html
// <input type="button" value="Submit" onclick="alert('foo')">
// result: clicking will produce a system dialog popup with the text foo
// putting coce in the markup like this is not recommended, it coudl easily be lost




// body of html
// <input type="button" value="Submit" onclick="submitForm()">
function submitForm() {
  console.log('in submitForm');
}
// result: text in submitForm shows in console
// have to make sure the js file loads before the user clicks on the button




// body of html
// <input id="submit1" type="button" value="Submit" onclick="submitForm(this)">
function submitForm(element) {
  console.log(element.id);
}
// result: submit1
// in event handlers, this is going to be set to the DOM element we are working with




// body of html
// <input type="button" value="Submit" onclick="submitForm(this, event)">
function submitForm(element, event) {
  console.log(event.type);
}
// result: click
// Event will pass the event object, the type is a string

// these examples are not the best way to handle events




// body of html
// <input id="submit1" type="button">
var button = document.getElementById('submit1');
button.onclick = function () {
  console.log('Button Clicked');
};
// result: console message Button Clicked
// We've moved the click event from markup to JS




// body of html
// <input id="submit1" type="button">
var button = document.getElementById('submit1');
button.onclick = function () {
  console.log('Button Clicked');
};
button.onclick = null;
// result: nothing, the event isn't kicked off
// We are essentially wiping out our event handler
// any code can come along and wipe out our event handler, there is a better way of handling events

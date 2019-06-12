// many times controls are going to overlap on a web page
// if we click on a submit button, does it go to the button first or the form?
// we may want it to bubble up and then be handled at the form level
// we need to get control over this bubbling mechanism




// <div id="div1" style="width: 200px; height: 200px; background-color: blue;">
//   <div id="div2" style="width: 100px; height: 100px; background-color: red;"></div>
// </div>
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
};
div1.addEventListener('click', clickHandler, false);
div2.addEventListener('click', clickHandler, false);
// result when we click inside div2: div2 div1, since its inside div1, both events get processed
// we've set up add event listeners to the 2 divs
// the false argument allows for the bubbling




// <div id="div1" style="width: 200px; height: 200px; background-color: blue;">
//   <div id="div2" style="width: 100px; height: 100px; background-color: red;"></div>
// </div>
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
};
div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);
// result when we click inside div2: div1 div2, when set to true, the parent event goes first
// this is sometimes called the capture phase, where the parent captures the event before its children do




// <div id="div1" style="width: 200px; height: 200px; background-color: blue;">
//   <div id="div2" style="width: 100px; height: 100px; background-color: red;"></div>
// </div>
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
  event.stopPropagation();
};
div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);
// result when we click inside div2: div1
// remember, event is the first thing passed into the eventListener
// stopPropagation(), div1 gets to handle the event and then stops handling the event because of stopPropagation()




// <div id="div1" style="width: 200px; height: 200px; background-color: blue;">
//   <div id="div2" style="width: 100px; height: 100px; background-color: red;"></div>
// </div>
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var clickHandler = function divClickHandler(event) {
  console.log(this.id);
  event.stopPropagation();
  event.preventDefault();
};
div1.addEventListener('click', clickHandler, true);
div2.addEventListener('click', clickHandler, true);
// result when we click inside div2: div1
// preventDefault() is used a lot with stopPropagation() to prevent the default behavior of whatever is clicked

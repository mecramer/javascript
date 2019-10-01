// timers are part of the browser, accessed by the window object

console.log(window.screenLeft + ', ' + window.screenTop);
// result: The coordinates of where the browser window resides on the screen


console.log(window.innerWidth + ', ' + window.outerWidth);
// result: innerWidth refers to the size of the page viewport
// outerWidth includes the width of the frame in addition to the page


window.open('https://www.google.com', '_blank');
// result: a new browser window that opens with google.com


// We're going to grab the current date and then log the seconds
// Then we call setTimeout which is part of the browser, we can access if from the global window object
// We send a function, and the number of milliseconds to wait until we call that function
console.log(new Date().getSeconds());
setTimeout(function () {
  console.log(new Date().getSeconds());
}, 1000);
// result: will show the second of the time and then a second later runs again and shows the next second, ie 6, 7

// clearTimeout will clear the setTimeout before it has a chance to run
console.log(new Date().getSeconds());
var id = setTimeout(function () {
  console.log(new Date().getSeconds());
}, 1000);
clearTimeout(id);
// result: you only get 1 number, we canceled the setTimeout before it got called


// setInterval will call the past function over and over again
// we grab the seconds and log them out
// if the seconds happen to be 10, we cancel the timer
// we have a closure, Id, which is created in an outside function
console.log(new Date().getSeconds());
var id = setInterval(function () {
  var secs = new Date().getSeconds();
  console.log(secs);
  if (secs === 10)
    clearInterval(id);
}, 1000);
// result: whatever second of minute you are on and will count till it gets to 10 and then it will stop
// timers are important in JS, they fire asynchronously, so events can get handled and other code can get executed
// while waiting for a timer to fire
// timers are used for animation, to handle things with the user interface, for video games, and other uses




// setTimout() is a JS function that's accessible globally
// it lets us execute a function at one time in the future
let timeoutId = setTimeout( function() {
  console.log('1 second passed');
}, 1000);

// if need to cancel..
// clearTimeout(timeoutId);

// here we are calling setTimeout() and passing it a function
// the function simply logs out 1 second passed and the second argument sets the amount of time to wait before executing
// the local variable this is assigned to, timeoutId, can be used to cancer the timeout, if needed




// if you want to fire a function off repeatedly, we have setInterval
let intervalId = setInterval( function() {
  console.log('1 second passed');
}, 1000);

// if need to cancel..
// clearInterval(intervalId);
// in this case, the event will fire once every second
// there's another way to work with error handling and that's by using promises.
// promises are designed to work with asynchronous javascript
// so if you are working with a timer or http calls, you can think of a promise as a temporary holder for a value.
// you can think of it as a promise to get a value back to you
// it may take some time, but evenutally you will get a value back or at least an error




let promise = new Promise (
  function(resolve, reject) {
    setTimeout(resolve, 100, 'someValue');
  }
);
console.log(promise);
// promises came about in ES2015
// here we are creating a new promise and we are passing it one argument...
// its a function that will accept two more functions as parameters, resolve and reject
// this function will execute immediately once we create this promise
// setTimeout is a function where the resolve function will be called after 100 milliseconds
// and we pass resolve 1 argument, the string 'someValue'
// by calling resolve that means the promise resolved successfully
// if there was some kind of error we would use reject
// result: pending
// because the promise is still pending at the time of the console.log
// but if we look inside the promise object, will see the status is resolved

// if we called reject instead, the status would be rejected

// in this code we're only creating a promise, 
// not really working with it to get some value that will get returned by the promise
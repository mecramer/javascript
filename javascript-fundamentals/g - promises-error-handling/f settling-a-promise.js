// when we get the value of a promise, its referred to as settling a promise




let promise = new Promise (
  function(resolve, reject) {
    setTimeout(resolve, 100, 'someValue');
  }
);
promise.then (
  value => console.log('fulfilled: ' + value),
  error => console.log('rejected: ' + error)
);
// we save our promise in a local variable promise.
// in order to get the value, we execute promise.then
// its a function that takes two arguments that are also functions
// the first function will execute when the promise is fulfilled, it resolved succesfully
// the second argument is a function that executes if there is some kind of error
// because of the asynchronous nature of promises, you may need to wait for some time

// promises have many other advanced features. 
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

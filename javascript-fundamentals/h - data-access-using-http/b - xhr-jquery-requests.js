// XHR using jQuery


// assuming jquery is installed
import $ from 'jquery';
let promise = $.get('https://www.mockapi.io/projects/5d718e625acf5e001473063d',
  data => console.log('data: ', data)
);
promise.then(
  data => console.log('success: ', data),
  error => console.log('error: ', error)
);
// the get method returns a promise
// we are using a local variable, promise, and sending the promise to the then function
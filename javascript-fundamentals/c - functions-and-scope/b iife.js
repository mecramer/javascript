// before modules came along, we needed a way to group our code and have it work in isolation
// where it wouldn't interfere with other code, which led to the IIFE pattern
// an IIFE is an expression, that's a function, that is usually assigned to a variable and run immediately

// function() {
//   console.log('in function');
// }
// this function does not have a name and nothing is calling it


(function() {
  console.log('in function');
}) ();
// This can be turned into an IIFE by adding a parenthesis around the function and that using the () to initiate and
// a semi colon to end the statement


let app = ( function() {
  let carId = 123;
  console.log('in function');
  return { };
}) ();
console.log(app);
// the return value of an IIFE is very important, because that is what gets assigned to app.
// result: {}, an empty object

// The real value of an IIFE is when the IIFE is used as a closure and we can access functions within that module
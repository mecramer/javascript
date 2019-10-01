// when a function finishes running, normally all its variables, functions
// but sometimes we want that function and its variables and nested functions to hang around
// that's what closure is




let app = ( function() {
  let carId = 123;
  let getId = function() {
    return carId;
  };
  return {
    getId: getId
  };
}) ();
console.log( app.getId() );
// we return an object where the value is getId and its value is the function getId.
// the property could have been named anything, but usually the property and function name are the same
// the object in the return value gets assigned to app
// the variables and functions declared in this IIFE persist, that is the closure
// arrow functions were created to be able to create easy anonymous functions

// anonymous function example
var sumTotal = function ( price, tax ) {
  return price*((tax/100)+1);
};
console.log(sumTotal(6,12));

// same function with an arrow function
var sumTotal2 = ( price, tax ) => price*((tax/100)+1);
console.log(sumTotal2(6,12));
// don't need to use the function keyword
// what's on the right of the arrow is whats returned, don't need to use the return keyword
// if you aren't passing in any values, you just put an empty parenthesis, () =>

// you'll see arrow functions used a lot in anonymous functions or in event listeners
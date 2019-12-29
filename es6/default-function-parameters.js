'use strict';

// in ES5 if we didn't specify a parameter, its value would be set to undefined
// in ES6 we can set a default


var getProduct = function(productId = 1000) {
  console.log(productId);
};
getProduct();
// result: 1000
// this is how we specify defaults in es6


var getProduct = function(productId = 1000, type = 'software') {
  console.log(productId + ', ' + type);
};
getProduct(undefined, 'hardware');
// result: 1000, hardware
// since we are passing in undefined, js is going to go ahead and use the default, 1000


var getTotal = function(price, tax = price * 0.07) {
  console.log(price + tax);
};
getTotal(5.00);
// result: 5.35


var baseTax = 0.07;
var getTotal = function(price, tax = price * baseTax) {
  console.log(price + tax);
};
getTotal(5.00);
// result: 5.35
// when we set up a default, we have access to variable that are in the context


var generateBaseTax = () => 0.07;
var getTotal = function(price, tax = price * generateBaseTax()) {
  console.log(price + tax);
};
getTotal(5.00);
// result: 5.35
// we can access a function when specifying defaults


var getTotal = function(price, tax = 0.07) {
  console.log(arguments.length);
};
getTotal(5.00);
// result: 1 NOT 2
// arguments only look at arguments sent to the function, it ignores defaults that get set
// sidenote: arguments method should not be used inside a function, not a best practice


var getTotal = function(price = adjustment, adjustment = 1.00) {
  console.log(price + adjustment);
};
getTotal();
// result: syntax error
// the  function has its own scope, javascript doesn't know about adjustment the first time it is called


var getTotal = function(price = adjustment, adjustment = 1.00) {
  console.log(price + adjustment);
};
getTotal(5.00);
// result: 6
// because javascript didn't need to look up the default (price = adjustment), we didn't get the error


var getTotal =  new Function('price = 20.00', 'return price;');
console.log(getTotal());
// result: 20
// these default parameters work even when we are creating a dynamic function
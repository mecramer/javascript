// Rest refers to gathering up parameters and putting them in a single array
// Spread refers to spreading out the elements of an array or a string

'use strict';

var showCategories = function (productId, ...categories) {
  console.log(categories instanceof Array);
};
showCategories(123, 'search', 'advertising');
// result: true
// categories is part of an array
// the three dots is the rest symbol
// it gathers up all the remaining parameters to the function and puts into categories


var showCategories = function (productId, ...categories) {
  console.log(categories);
};
showCategories (123, 'search', 'advertising');
// result: ['search', 'advertising']
// 123 belongs to productID, the rest to categories


var showCategories = function (productId, ...categories) {
  console.log(categories);
};
showCategories (123);
// result: []
// an empty array


var showCategories = function(productID, ...categories) {

};
console.log(showCategories.length);
// result: 1
// the rest parameter gets ignored


var showCategories = function(productID, ...categories) {
  console.log(arguments.length);
};
showCategories(123, 'search', 'advertising');
// result: 3
// arguments refers back to the original function call where we passed in 3 arguments


var showCategories = new Function ('... categories', 'return categories;');
console.log(showCategories('search', 'advertising'));
// result: ['search', 'advertising']
// it is valid to use these parameters within new dynamic functions


// spread is pretty much the opposite of rest
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice);
// result: 20
// we're using the spread operator on prices
// the spread operator took the prices array and converted it into a list of parameters the the function Math.max


var prices = [12, 20, 18];
var newPriceArray = [...prices];
console.log(newPriceArray);
// result: [12, 20, 18]
// we used a spread operator to spread out the prices, but then immediately created a new array


var newPriceArray = Array(...[,,]);
console.log(newPriceArray);
// result: [undefined, undefined]
// when we create a new array, we can assume that the values are undefined and that there's nothing after the last comma


var newPriceArray = [...[,,]];
console.log(newPriceArray);
// result: [undefined, undefined]
// this is just another way to create an array


// what if we try and spread out a string?
var maxCode = Math.max(..."43210");
console.log(maxCode);
// result: 4
// the numbers got put into its individual characters and then 4 was the max number in the individual numbers


var codeArray = ['A', ...'BCD', 'E'];
console.log(codeArray);˜
// result: ['A', 'B', 'C', 'D', 'E']
// 'BCD' are getting spread
// reduce it the multi tool of list transformations
// it can be used to express any list transformation
// in fact, you can use reduce to implement map, filter, find, reject or any other list transformation
// reduce is the super list tranformation that you can fall back on if you can't find another pre built transformation
// that fits your problem


var orders = [
  { amount: 250},
  { amount: 400},
  { amount: 100},
  { amount: 325}
];
// our mission is to come up with the sum of all the values


// first, with a for loop
var totalAmount = 0;
for (var i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount;
}
console.log(totalAmount);
// 1. create a variable called totalAmount
// 2. loop through orders and add each amount to totalAmount

// now lets do  it with reduce
var totalAmount =  orders.reduce(function(sum, order) {
  return sum + order.amount;
}, 0);
console.log(totalAmount);
// unlike map and filter, reduce wants an object as a second parameter
// you can think of this object as a starting point for our sum, 0
// the sum is going to be passed as the first argument to the anonymous function
// reduce will also receive the iterated item (oders) as filter and map, but it will be the second argument
// we take the sum (0 inititial value) and we are going to add the order amount and return it
// this return value will be passed as then sum in the next iteration
// which in turn will add this amount to it and so forth until we are finished


// lets add a console.log to see it in action through each iteration
var totalAmount =  orders.reduce(function(sum, order) {
  console.log('hello', sum, order);
  return sum + order.amount;
}, 0);
console.log(totalAmount);
// this shows us
// hello 0 {amount 250}
// hello 250 {amount 400}
// hello 650 {amount 100}
// hello 750 {amount 325}
// 1075


// now we shorten with an arrow function
var totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
console.log(totalAmount);


// this is the basic map of reduce
const numbers = [1, -1, 2, 3];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);
// reduce takes two arguments
// currentValue cycles through the array
// if you don't set the second argument (0), it starts at the value of first item in array
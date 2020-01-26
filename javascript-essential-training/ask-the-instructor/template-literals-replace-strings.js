// in JS, strings can be concatonations of strings and variables such as this
let a = 12;
let b = 4;

console.log(a + ' divided by ' + b + ' is ' + (a/b) + '.');

// template literals (or template strings) in ES6 makes this easier
console.log (`${a} divided by ${b} is ${a/b}.`);
// use backticks instead of single or double quotes
// use ${} to insert variables
// this is easier to write, its like one string
// it also honors line breaks, no need to use /n
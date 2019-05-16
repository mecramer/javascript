// create a new array and test if it is an array
// result: true
var entries = new Array('Orioles', 'Yankees', 'Rays');
console.log(entries instanceof Array);

// arrays can contain different types
// result: true
var entries = new Array('Orioles', 5, true);
console.log(entries instanceof Array);

// if we leave out the 'new' keyword, it still works. Javascript doesn't require new
// result: true
var entries = Array('Orioles', 5, true);
console.log(entries instanceof Array);

// another shorthand way of creating arrays
// result: true
var entries = ['Orioles', 33, true];
console.log(entries instanceof Array);

// ask for the first item in the array
// result: Orioles
var entries = ['Orioles', 33, true];
console.log(entries[0]);

// create an array and assign it 5 items and and then ask for its length. this works if its a single numeric value
// result: 5
var entries = new Array(5);
console.log(entries.length);

// create an array with a string value of 5
// result: 1
var entries = new Array("5");
console.log(entries.length);

// create an array with no values
// result: 0
var entries = [];
console.log(entries.length);

// create an array with empty values
// result: 3
var entries = [,,,];
console.log(entries.length);

// create an array 2 values, but then set the length to 10. It creates 10 items, with 8 of them being undefined
// result: 10
var entries = ['Orioles', 'Yankees'];
entries.length = 10;
console.log(entries.length);

// here we set an array with 2 items, but then set the length to 1. In this case it chops off all the items after 1
// result: undefined
var entries = ['Orioles', 'Yankees'];
entries.length = 1;
console.log(entries[1]);

// here we set an array with 3 items, but then change the third item of the array
// result: Red Sox
var entries = ['Orioles', 'Yankees', 'Rays'];
entries[2] = 'Red Sox';
console.log(entries[2]);

// here we set an array with 3 items, then we set item 42 to Red Sox, even though there were only 3 items, JS lets you do this
// the new length of the array is 43, 3 - 41 are set to undefined
// result: Red Sox
var entries = ['Orioles', 'Yankees', 'Rays'];
entries[42] = 'Red Sox';
console.log(entries[42]);
console.log(entries.length);

// you can add a new item by getting the length, which will be same as next index position available
// result: 4
var entries = ['Orioles', 'Yankees', 'Rays'];
entries[entries.length] = 'Blue Jays';
console.log(entries.length);

// toString() will concactanate the values into one comma separated list
// result: Orioles, Yankees, Rays
var entries = ['Orioles', 'Yankees', 'Rays'];
console.log(entries.toString());

// with numeric values, you can run the valueOf method
// result: [5, 2, 4]
var ratings = [5, 2, 4];
console.log(ratings.valueOf());

// If you run the join method, you can join the items in array (any type)
// result: 5|2|4
var ratings = [5, 2, 4];
console.log(ratings.join('|'));
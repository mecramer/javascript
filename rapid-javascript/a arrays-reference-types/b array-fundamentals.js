// create a new array and test if it is an array
var entries = new Array('Orioles', 'Yankees', 'Rays');
console.log(entries instanceof Array);
// result: true


// arrays can contain different types
var entries = new Array('Orioles', 5, true);
console.log(entries instanceof Array);
// result: true


// if we leave out the 'new' keyword, it still works. Javascript doesn't require new
var entries = Array('Orioles', 5, true);
console.log(entries instanceof Array);
// result: true


// another shorthand way of creating arrays
var entries = ['Orioles', 33, true];
console.log(entries instanceof Array);
// result: true


// ask for the first item in the array
var entries = ['Orioles', 33, true];
console.log(entries[0]);
// result: Orioles


// create an array and assign it 5 items and and then ask for its length. this works if its a single numeric value
var entries = new Array(5);
console.log(entries.length);
// result: 5


// create an array with a string value of 5
var entries = new Array("5");
console.log(entries.length);
// result: 1


// create an array with no values
var entries = [];
console.log(entries.length);
// result: 0


// create an array with empty values
var entries = [,,,];
console.log(entries.length);
// result: 3


// create an array 2 values, but then set the length to 10. It creates 10 items, with 8 of them being undefined
var entries = ['Orioles', 'Yankees'];
entries.length = 10;
console.log(entries.length);
// result: 10


// here we set an array with 2 items, but then set the length to 1. In this case it chops off all the items after 1
var entries = ['Orioles', 'Yankees'];
entries.length = 1;
console.log(entries[1]);
// result: undefined


// here we set an array with 3 items, but then change the third item of the array
var entries = ['Orioles', 'Yankees', 'Rays'];
entries[2] = 'Red Sox';
console.log(entries[2]);
// result: Red Sox


// here we set an array with 3 items, then we set item 42 to Red Sox, even though there were only 3 items, JS lets you do this
// the new length of the array is 43, 3 - 41 are set to undefined
var entries = ['Orioles', 'Yankees', 'Rays'];
entries[42] = 'Red Sox';
console.log(entries[42]);
console.log(entries.length);
// result: Red Sox


// you can add a new item by getting the length, which will be same as next index position available
var entries = ['Orioles', 'Yankees', 'Rays'];
entries[entries.length] = 'Blue Jays';
console.log(entries.length);
// result: 4


// toString() will concactanate the values into one comma separated list
var entries = ['Orioles', 'Yankees', 'Rays'];
console.log(entries.toString());
// result: Orioles, Yankees, Rays


// with numeric values, you can run the valueOf method
var ratings = [5, 2, 4];
console.log(ratings.valueOf());
// result: [5, 2, 4]


// If you run the join method, you can join the items in array (any type)
var ratings = [5, 2, 4];
console.log(ratings.join('|'));
// result: 5|2|4

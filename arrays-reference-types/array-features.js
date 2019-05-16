// create an empty array and then use the push method to add items, then ask for length
// result: 3
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log(ratings.length);

// create an empty array and then use the push method to add items, then run a pop, which will pop last item off
// result: 4, with is the value of the last item. that is what the method returns
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log(ratings.pop());

// create an empty array and then use the push method to add items, then run a pop, then ask for remaining length of array
// result: 2, values of 5 and 2 remain in the array after popping 4 off
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
ratings.pop();
console.log(ratings.length);

// create an empty array and then use the push method to add items, then run a shift method, which takes the first item
// result: 5
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(firstRating);

// create an empty array and then use the push method to add items, then run a shift method, and ask for the length remaining
// result: 2
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(ratings.length);
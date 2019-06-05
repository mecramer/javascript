// create an empty array and then use the push method to add items, then ask for length
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log(ratings.length);
// result: 3




// create an empty array and then use the push method to add items, then run a pop, which will pop last item off
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
console.log(ratings.pop());
// result: 4, with is the value of the last item. that is what the method returns




// create an empty array and then use the push method to add items, then run a pop, then ask for remaining length of array
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
ratings.pop();
console.log(ratings.length);
// result: 2, values of 5 and 2 remain in the array after popping 4 off




// create an empty array and then use the push method to add items, then run a shift method, which takes the first item
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(firstRating);
// result: 5




// create an empty array and then use the push method to add items, then run a shift method, and ask for the length remaining
// shift removes items from the beginning
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(ratings.length);
// result: 2




// the unshift method adds one or more elements to the beginning of the array and changes its length
var ratings = [];
ratings.push(5);
ratings.push(2, 4);
var newCount = ratings.unshift(3);
console.log(ratings[0]);
console.log(newCount);
// result: 3, 4




// concat adds on to the end of an array
var ratings = [1, 2, 3];
var newRatings = ratings.concat([4, 5, 6]);
console.log(newRatings.length);
// result: 6




// concat can take several arguments
var ratings = [1, 2, 3];
var newRatings = ratings.concat([4, 5, 6], 7, 8);
console.log(newRatings.length);
// result: 8




// what happens to the original array? It stays the same
var ratings = [1, 2, 3];
var newRatings = ratings.concat([4, 5, 6], 7, 8);
console.log(newRatings.length);
// result: 3




// slice gives an index and creates a new array for it and everything after
var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(2);
console.log(newRatings.toString());
// result: 3, 4




// if you include a second value, thats where it end, BUT, it ends at the one before, unlike the beginning of the slice
var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(1, 3);
console.log(newRatings.toString());
// result: 2, 3




// what happens to the original array? It is not sliced, the method is being applied to a new variable
var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(1, 3);
console.log(newRatings.toString());
// result: 1, 2, 3, 4




// a negative slice starts counting from the back of the array, but still slices off whats to the left of the index value
var ratings = [1, 2, 3, 4];
var newRatings = ratings.slice(-2);
console.log(newRatings.toString());
// result: 3, 4




// splice: first argument tells us what index to start at, the second argument says how many items to delete
// here, the original array is getting modified, no creation of a new one
var ratings = [1, 2, 3, 4];
ratings.splice(1, 2);
console.log(ratings.toString());
// result: 1, 4




// here, we are assigning it to new variable
var ratings = [1, 2, 3, 4];
var removeRating = ratings.splice(0, 1);
console.log(removeRating.toString());
// result: 1




// the third argument is a value to insert. here we go to position 2, delete 0 items and insert number 99
var ratings = [1, 2, 3, 4];
ratings.splice(2, 0, 99);
console.log(ratings.toString());
// result: 1, 2, 99, 3, 4




// the third argument can have an unlimited number of items
var ratings = [1, 2, 3, 4];
ratings.splice(2, 0, 99, 100, 101);
console.log(ratings.toString());
// result: 1, 2, 99, 100, 101, 3, 4




// in this case, we want to delete one value before inserting a value
var ratings = [1, 2, 3, 4];
ratings.splice(2, 1, 99);
console.log(ratings.toString());
// result: 1, 2, 99, 4




// the third argument can have an unlimited number of items, and in this case, we are also removing one item
var ratings = [1, 2, 3, 4];
ratings.splice(2, 1, 99, 100, 101);
console.log(ratings.toString());
// result: 1, 2, 99, 100, 101, 4




// reverse reverses the order of the array
var ratings = [1, 2, 3, 4];
ratings.reverse();
console.log(ratings.toString());
// result: 4, 3, 2, 1




// sort puts the array in numerical order
var ratings = [4, 1, 3, 2];
ratings.sort();
console.log(ratings.toString());
// result: 1, 2, 3, 4




// sort can lead to bugs
var ratings = [4, 1, 3, 2, 10];
ratings.sort();
console.log(ratings.toString());
// result: 1, 10, 2, 3, 4




// fixing the sort but with a function
// the function looks for a positive or negative return value when comparing numbers
// The .sort() method accepts a function that accepts two parameters (two elements), and returns a number to determine which element should come first. If the number is negative, value2 is bigger. If the number is positive, value1 is bigger. And if the number is equal to 0, both elements are of the same size, and their order doesn't matter.
// Therefore, returning value1 - value2 only works in this case because your elements are numbers. You'd have to employ some more sophisticated logic if they were something else.
var ratings = [4, 1, 3, 2, 10];
ratings.sort(function (value1, value2) {
  return value1 - value2;
});
console.log(ratings.toString());
// result: 1, 2, 3, 4, 10




// indexOf searches for all the occurrences of the parameter and returns the index value of the first occurrence
var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.indexOf(3));
// result: 2




// here we are trying to find the index of a string that doesn't appear in the array. No conversion is done from a string to number
// when a value can't be found, it returns a value of -1
var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.indexOf('3'));
// result: -1




// lastIndexOf searches for the index position of the last occurrence of an item
var ratings = [1, 2, 3, 4, 5, 4, 3, 2, 1];
console.log(ratings.lastIndexOf(1));
// result: 8

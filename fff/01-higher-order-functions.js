// why functional programming?
// less bugs (easier to reason about), less time (more reusable)

// in javascript, functions are values


// not all programming languages can do this:
var triple = function (x) {
  return x * 3;
};
// create an anonymous function and assign it to a variable

// just like any other value, we can pass it around
var waffle = triple;

waffle(30); // 90

//  functions can be passed into variables OR passed into other functions, higher order functions

// what is this good for?
// composition: we can have a lot of smaller functions combine to create a larger function

// example, filter. Filter is a function on the array that accepts another function as its argument
// which it will use to return a new filtered version of the array


var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'},
];
// Here we have an array full of objects assigned to a variable
// We want to filter out the dogs
// first, lets look how this would be done with a normal for loop
var dogs = [];
for (var i = 0; i < animals.length; i++) {
  if (animals[i].species === 'dog') {
    dogs.push(animals[i]);
  }
}
console.log(dogs);
// this creates a new array (dogs) and then iterates through the animals array and if the current item is a dog
// adds it to the dogs array

// and now doing the same thing as a filter
var dogs = animals.filter(function(animal) {
  return animal.species === 'dog';
});
console.log(dogs);
// filter accepts one argument, another function
// functions that you send into another function are called, callback functions
// filter will loop through each item in the array and for each item its going to pass it into the callback function
// it will expect the callback function to return either true or false to tell filter whether or not this item
// should be in the new array (if true, then yes)
// after its done, it will return the new filtered array

// the filter function does a lot of the work behind the scenes, like writing an item to the new array (push)
// when we write our software in small, simple functions, they compose together which allows us to reuse
// functions all over the place
// In the filter example, we are writing one line of login, really

// the callback function and the filter function slopped into each other. They are composable

// lets break out the callback into a separate variable
var isDog = function(animal) {
  return animal.species === 'dog';
};
var dogs = animals.filter(isDog);
console.log(dogs);
// by doing this, we can separate the problem into two distinct parts
// first, is the animal a dog
// second, create an array

// In Javascript, functions are values and you can exploit this by dividing your code into small, simple functions
// and compose them together using higher-order functions like filter

// Summary: A higher order function is a function that takes a function as an argument or returns a function.
// Examples: filter, map
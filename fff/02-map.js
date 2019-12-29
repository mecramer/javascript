// Just like filter, map is a higher order function
// like filter, it goes through an array, but it doesn't throw them away it transforms them, puts in a new array


var animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'},
];

// goal: get an array of the names of all the animals


// how we would solve using a for loop
var names = [];
for (var i = 0; i < animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);
// 1. create a new empty array (names)
// 2. iterate with a for loop through the animals array and push the name of each animal to the new array


// Now, lets do the same with the high order function, map
var names = animals.map(function(animal) {
  return animal.name;
});
console.log(names);
// .map will take a callback function
// the callback function will be passed each item in the animals array
// .map will return all items in the array (animals)
// but it expects the callback function to return a transformed object
// in this case, that will be the name
// .map is used to return a subset of an object


// less code almost always means less bugs
// it could be eveen shorter using arrow functions
var names = animals.map((animal) => animal.name);
console.log(names);
// using an arrow function doesnt require function keyword
// or return statement if on the one line, whatever is after the arrow will be implicitly returned
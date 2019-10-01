// you can iterate through an array using a for loop, but there are easier ways


let carIds = [
  {carId: 123, style: 'sedan'},
  {carId: 456, style: 'convertible'},
  {carId: 789, style: 'sedan'}
];
carIds.forEach( car => console.log( car ));
carIds.forEach((car, index) => console.log( car, index));
// result: {carId: 123, style: "sedan"}
// index.js?0af5:11 {carId: 456, style: "convertible"}
// index.js?0af5:11 {carId: 789, style: "sedan"}
// index.js?0af5:12 {carId: 123, style: "sedan"} 0
// index.js?0af5:12 {carId: 456, style: "convertible"} 1
// index.js?0af5:12 {carId: 789, style: "sedan"} 2
// arrays have a method called forEach. It calls a function on each element of the array
// we're using an arrow function.
// in the first call, the parameter is car and we'll simply log out car, so this line will log out our 3 car objects
// the second call has 2 parameters, this will log the object and its index number in the array


// we can also filter an array
let carIds1 = [
  {carId: 123, style: 'sedan'},
  {carId: 456, style: 'convertible'},
  {carId: 789, style: 'sedan'}
];
let convertibles = carIds1.filter(
  car => car.style === 'convertible'
);
console.log(convertibles);
// result: {carId: 456, style: "convertible"}
// .filter will loop through the entire array and call the function
// the function passes car and checks to see if the car.style is convertible


// another method is called .every
let carIds2 = [
  {carId: 123, style: 'sedan'},
  {carId: 456, style: 'convertible'},
  {carId: 789, style: 'sedan'}
];
let result = carIds2.every (
  car => car.carId > 0
);
console.log(result);
// result: true
// this is validating that the car id exists on every element


// another method is called .find
let carIds3 = [
  {carId: 123, style: 'sedan'},
  {carId: 456, style: 'convertible'},
  {carId: 789, style: 'sedan'}
];
let car = carIds3.find (
  car => car.carId > 500
);
console.log(car);
// result: {carId: 789, style: "sedan"}
// this finds the first instance in the array that matches whats in the arrow function
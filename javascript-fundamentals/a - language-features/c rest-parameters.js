// rest parameters are a modern feature of javascript that allows a function to store multiple arguments in a single array

// function sendCars (...allCarIds) {
//   allCarIds.forEach( id => console.log(id));
// }
// sendCars(100, 200, 555);
// result: 100, 200, 555
// this syntax creates a rest parameter called allCarIds. AllCarIds will be an array
// within this function we're calling forEach on the array, so we're iterating over the array
// so we can send any number of arguments to a function and use a rest paramerter to collect them




function sendCars (day, ...allCarIds) {
  allCarIds.forEach( id => console.log(id));
}
sendCars('Monday', 100, 200, 555);
// result: 100, 200, 555
// we're not printing out day, but its part of the function parameters
// the rest parameters always need to be listed last
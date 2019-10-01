// spread syntax is the opposite of rest parameters
// we take an array and break it out instead of collecting them up




// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }

// let carIds = [100, 300, 500];
// startCars(...carIds);
// result: 100 300 500




function startCars(car1, car2, car3) {
  console.log(car1, car2, car3);
}

let carIds = 'abc';
startCars(...carIds);
// result: a b c
// it works on strings as well as arrays
// strings and arrays are what is called iterables
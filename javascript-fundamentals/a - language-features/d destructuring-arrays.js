// destructing allows us to easily assign the values of an array to variables

// let carIds = [1, 2, 5];
// let[car1, car2, car3] = carIds;
// console.log(car1, car2, car3);
// result: 1 2 5
// because the square brackets in line 4 are in the left side of the equal sign, that means destructuring is going to take place
// because CarIds is an array, the first element fo the array will be stored in car1.. etc
// destructuring an array means taking the array and assigning it to variables in a short, concise syntax




// let carIds = [1, 2, 5];
// let car1, remainingCars;
// [car1, ...remainingCars] = carIds;
// console.log(car1, remainingCars);
// result: 1 [2, 5]
// we declare two variables without initializing, car1 and remainingCars
// then in the next line we destructure the array, the first element of carIds gets stored in car1
// and the rest get put in a rest parameter, remainingCars, which will be 2 and 5




let carIds = [1, 2, 5];
let remainingCars;
[, ...remainingCars] = carIds;
console.log(remainingCars);
// result: [2, 5]
// the comma says skip the first element. You can have as many commas as you would like
// if you had 2 commas, you would have just been left with 5
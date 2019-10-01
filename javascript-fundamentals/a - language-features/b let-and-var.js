// let helps you catch errors earlier

// console.log(carID);
// var carID = 41;
// result: undefined

// console.log(carID);
// let carID = 41;
// result: uncaught reference error, cannot access carID before initialization
// this is one difference between var and let. Let  doesn't set an uninitialized variable to undefined
// this is the preferred behavior, we want an error if trying to use something before it is defined

// if (true) {
//   var foo = 9;
// }
// console.log(foo);
// result: 9

// if (true) {
//   let foo = 9;
// }
// console.log(foo);
// result: error, foo is not defined
// let has block scope, so its not available outside the block



// A constructor function is used to instantiate new objects
// it looks like a regular function, but behaves very differently




// function Car() {

// }
// let car = new Car();
// first, notice the function name starts with a capital letter
// this is a convention for contstructor functions
// in order to create a new Car object, we use the new keyword, we put new before the function call
// so new Car() will create a new car object
// constructor function were the primary way objects were created before Classes came along
// they are still used




function Car(id) {
  this.carId = id;
}
let car = new Car(123);
console.log( car);
// result: 123
// when you use the new keyworkd, the function gets a brand new, empty context
// its important to use the this, this.carID instead of just carId = id




function Car1(id) {
  this.carId = id;
  this.start = function() {
    console.log('start: ' + this.carId);
  };
}
let car1 = new Car1(123);
car1.start();
// result: start: 123
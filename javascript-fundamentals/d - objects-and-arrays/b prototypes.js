// prototypes are used mostly for methods that would be created over and over again in a constructor function
// you do not want to create a bunch of new objects from a constructor function with the same method
// a prototype exists directly under a function

function Car(id) {
  this.carId = id;
}

Car.prototype.start = function() {
  console.log('start: ' + this.carId);
};
let car = new Car(123);
car.start();
// result: start: 123
// the result is the same as if the start method was in the Car function
// but by putting it in the Car functions prototype, it doesn't get recreated each time a new Car object is created
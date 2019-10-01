// we want to avoid duplicating code and one way is the concept of inheritence
// Classes make this easy


class Vehicle {
  constructor() {
    this.type = 'car';
  }
  start() {
    return `Starting: ${this.type}`;
  }
}
class Car extends Vehicle {
  constructor() {
    super();
  }
  start() {
    return `in Car start ` + super.start();
  }
}
let car = new Car();
console.log( car.type );
console.log( car.start() );
// result: car
// Car is inheriting from Vehicle, through the extends keyword
// for the constructor, super is a special function that refers us back to the constructor in Vehicle, the super class
// with car.start, we can override Vehicle in Car, or we can call to it using super

// So this shows we can have a main class and then sub classes with things pertaining to specific subsets of the main (super) class

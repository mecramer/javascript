// A constructor is a function that gets executed when a new instance of an object gets created
// classes are basically syntatic sugar over prototype based inheritance




class Car {
  constructor(id) {
    this.id = id;
  }
}
let car = new Car(123);
console.log(car.id);
// result: 123
// the constructor method is a special method for creating and initializing an object created with a class
// there can only be one constructor in a class
// once again, we always need to be working with the this keyword
// this is only used within the class itself
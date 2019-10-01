// methods are functions that exist on an object




class Car {
  constructor(id) {
    this.id = id;
  }
  identify() {
    return `Car Id: ${this.id}`;
  }
}
let car = new Car(123);
console.log( car.identify() );
// result: Car Id: 123
// identify is a method that has been added to the Car object
// methods don't need the function keyword
// methods also need to use the this keyword
// methods can take in parameters
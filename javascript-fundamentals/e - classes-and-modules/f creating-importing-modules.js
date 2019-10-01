// how do we organize classes? the answer is within modules
// any javascript code can be placed in a module


// in another file, we'd put some code, say car.js
export class Car {
  constructor(id) {
    this.id = id;
  }
}
// this is a module


// to import the module
import { Car } from './car.js';

let car = new Car(123);
console.log( car.id);
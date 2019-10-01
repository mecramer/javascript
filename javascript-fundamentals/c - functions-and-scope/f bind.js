// sometimes we need to make a copy of a function and also change the this value
// that's what bind does
// we call bind on a function and it makes a copy of that function and assigns a new context


let o = {
  carId: 123,
  getId: function () {
    return this.carId;
  }
};
let newCar = { carId: 456 };
let newFn = o.getId.bind(newCar);
console.log( newFn() );
// result: 456;
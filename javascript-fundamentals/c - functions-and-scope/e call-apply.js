// most times when you call a function, you provide arguments in the parenthesis
// but there are two different ways to call a function
// you can use the call function and the apply function
// the main purpose of these two functions is to change the value of this
// that is, to change the object which is the context of the function
// this is important for object oriented scenarios


let o = {
  carId: 123,
  getId: function() {
    return this.carId;
  }
};
let newCar = { carId: 456 };
console.log( o.getId.call(newCar) );
// result: 456, not 123
// here we are changing the context of this to newCar
// instead of calling o.getId directly, we use a special function called call to change the context


// apply is similar to call, the only difference is that with apply, you can pass arguments
let ob = {
  carId: 123,
  getId: function(prefix) {
    return prefix + this.carId;
  }
};
let newCar2 = { carId: 456 };
console.log( ob.getId.apply(newCar2, ['ID: ']) );
// result: ID: 456
// not only do we change the context of this, but we add a new parameter for ID

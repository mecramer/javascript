// this is a special keyword within functions
// this refers to an object but it doesn't refer to the function as an object itself
// its a special object called a context for the function

let fn = function () {
  console.log(this === window);
};
fn();
// result: true;
// window is our global object
// because we are not in strict mode and, here the this keyword does equal the global object


// but usually we are working with objects when using this
let o = {
  carId: 123,
  getId: function() {
    console.log(this); // to prove that this is referring to the object o
    return this.carId;
  }
};
console.log( o.getId() );
// result: 123
// this refers to the object, o

// every function gets associated with the this object. 
// the object is usually the object where the function is defined
// but only usually, because functions in JS can be passed around from object to object
// they can have different contexts and the this value can change,.
'use strict';


var getPrice = () => 5.99;
console.log(typeof getPrice);
// this is an arrow function
// => is the symbol for an arrow function
// to the left of => is the input to the function, empty parenthesis mean there is no input
// the arrow means goes to, maps to, or this input results in this output
// 5.99 is the return value
// an arrow function is shorthand
// we can leave off the function keyword and we can leave off the return statement


var getPrice = () => 5.99;
console.log(typeof getPrice);
// result: function


var getPrice = () => 5.99;
console.log(getPrice());
// result: 5.99
// we can leave off the return keyword, the expression gets returned


var getPrice = count => count * 4.00;
console.log(getPrice(2));
// result: 8
// if we have 1 arguement, we can leave off the parenthesis


var getPrice = (count, tax) => count * 4.00 * (1 + tax);
console.log(getPrice(2, 0.07));
// result: 8.56


var getPrice = (count, tax) => {
  var price = count * 4.00;
  price *= (1 + tax);
  return price;
}
console.log(getPrice(2, 0.07));
// result 8.56
// more than 1 line requires a block
// in this case, we also need to use the return keyword to specify a return statement


// arrow functions save some keystrokes, but the real purpose is to handle the 'this' keyword within functions
document.addEventListener('click', function () {
  console.log(this);
});
// result: #document
// this can cause problems as you don't get the context of the event, 
// only the element that receives the event


// but.. using an arrow function instead..
document.addEventListener('click', () =>  console.log(this));
// result: Window {...}
// this refers to the actual context of the code we are running, which is window, the global object
// this is NOT being set to the element we are in, but rather the context of the code we are in


// in ES5
var invoice = {
  number: 123,
  process: function () {
    console.log(this);
  }
};
invoice.process();
// result: Object { number: 123 }
// this is being set to the object on which the function is called


// but now using an arrow function in its place..
var invoice = {
  number: 123,
  process: () => console.log(this)
};
invoice.process();
// result: Window {...}
// again, we get the context of the code, our global Window object
// if we were inside a function, we'd get the functions context


var invoice = {
  number: 123,
  process: function () {
    return () => console.log(this.number);
  }
};
invoice.process()();
// result: 123
// process is a function, but it returns a function
// process is the context of the function we are working in


var invoice = {
  number: 123,
  process: function () {
    return () => console.log(this.number);
  }
};
var newInvoice = {
  number: 456
};
invoice.process().bind(newInvoice) ();
// result: 123 NOT 123456
// you cannot bind a new object to an arrow function
// the engine didn't even throw an error, it just ignored the bind


var invoice = {
  number: 123,
  process: function () {
    return () => console.log(this.number);
  }
};
var newInvoice = {
  number: 456
};
invoice.process().call(newInvoice) ();
// result: 123
// .call and .apply are also useless


var getPrice = () 
  => 5.99;
console.log(typeof getPrice);
// result: syntax error
// the fat arrow symbol cannot be on a new line, this is a quirk


var getPrice = () => 5.99;
console.log(getPrice.hasOwnProperty("prototype"));
// result: false
// arrow functions do not get prototypes

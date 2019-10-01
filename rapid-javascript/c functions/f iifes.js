// iife - Immediately Invoked Function Expressions, pronounced 'Iffy'

// main purpose is to prevent your code from polluting the global namespace.

(function () {
  console.log('Executed!');
}) ();
// result: Executed!
// The opening and closing parenthesis around the function and calling the function with the (), creates an iife


(function () {
  var employeeName = 'Mark';
}) ();
// console.log(employeeName);
// result: ReferenceError, employeeName exists only in the scope of the function, its being called from global scope
// an iife does not pollute the global environment


// there is an unwritten rule that every application and every library can have one single global variable
// example, jQuery has the jQuery variable, $
// this is a very common pattern
var app = {};
(function (ns) {
  ns.name = 'None';
}) (app);
console.log(app.name);
// result: none;
// you can pass an object or anything into an iife and use it internally within the function


// assuming with have jQuery loaded up
// here we are passing the app object, but also the jQuery global object
var app = {};
var jQuery = {};

(function (ns, $) {
  ns.name = 'None';
  console.log($ === jQuery);
}) (app, jQuery);
// result: true
// the reason why you see this is some code might alter the $ sign symbol. but this way the iffe is guaranteed
// that the $ will equal jQuery


// sometimes you'll see undefined being passed as another argument in the iife function
// this will make sure that the systems undefined object will get set to undefined
// in some older JS code, the keyword undefined can get redefined - bad practice
var app = {};
var jQuery = {};

(function (ns, $, undefined) {
  ns.name = 'None';
  console.log(undefined);
}) (app, jQuery);
// result: undefined


// another way to do an iife is using the unary + instead of parenthesis
+function () {
  var employeeName = 'Mark';
  console.log('Exectuted');
}();
// console.log(employeeName);
// result: Executed and undefined because employeeName is not in the global scope

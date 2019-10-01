// another common use  of prototypes is to expand objects and give new functionality to all instances of an object
// polyfills typically use prototyes in this way

String.prototype.hello = function() {
  return this.toString() + ' Hello';
};
console.log('foo'.hello());
// result: foo hello
// Here we are adding onto JS's built in string function
// we are creating a method where we can add the text string 'hello' to the end of any string

// So using a prototype this way we can add functionality to any of our own objects or any built in object
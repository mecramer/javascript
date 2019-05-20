/*
Every JavaScript Object has a prototype property. We don't always have access to it.
The prototype property is simply an object.
var project = anyObject;
project.someFunction();

How does JS locate someFunction()?

1. project.someFunction()
2. project.prototype.someFunction()
3. project.prototype.prototype.someFunction();
4. project.prototype.prototype.prototype.someFunction();

This is the prototype chain.

In most cases we can access the prototype property by using the symbol __proto__ in most browsers. 
Underscores are called dunder (double underscore)
The prototype property is most easily accessed on constructor functions
*/

// reference a property that doesn't exist
// result: TypeError: project.foo is not a function
var project = {
  name: 'Project Phoenix'
};
// console.log(project.foo());

// calling a method that doesn't exist on the object, but does on a prototype
// result: [object object]
var project = {
  name: 'Project Phoenix'
};
console.log(project.toString());

// result: object
console.log(typeof Object.prototype);

// the toString() function exists on Object.prototype
// result: function
console.log(typeof Object.prototype.toString);

// the prototype is not accessible, its more of an internal field
// result: undefined, it exists, but we don't have access to it, unless its a constructor function
var project = {
  name: 'Project Phoenix'
};
console.log(project.prototype);

// we can access it in most browsers by using dunder proto
// you don't usually want this in production code
// result: object, this is our prototype object
console.log(typeof project.__proto__);

// result: false, Object is a constructor function, whereas dunder proto is an object
console.log(project.__proto__ === Object);

// result: true, every object has a prototype attached to it
console.log(project.__proto__ === Object.prototype);

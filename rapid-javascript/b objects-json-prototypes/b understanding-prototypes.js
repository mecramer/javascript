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
var project = {
  name: 'Project Phoenix'
};
// console.log(project.foo());
// result: TypeError: project.foo is not a function




// calling a method that doesn't exist on the object, but does on a prototype
var project = {
  name: 'Project Phoenix'
};
console.log(project.toString());
// result: [object object]




console.log(typeof Object.prototype);
// result: object




// the toString() function exists on Object.prototype
console.log(typeof Object.prototype.toString);
// result: function




// the prototype is not accessible, its more of an internal field
var project = {
  name: 'Project Phoenix'
};
console.log(project.prototype);
// result: undefined, it exists, but we don't have access to it, unless its a constructor function




// we can access it in most browsers by using dunder proto
// you don't usually want this in production code
console.log(typeof project.__proto__);
// result: object, this is our prototype object




console.log(project.__proto__ === Object);
// result: false, Object is a constructor function, whereas dunder proto is an object




console.log(project.__proto__ === Object.prototype);
// result: true, every object has a prototype attached to it

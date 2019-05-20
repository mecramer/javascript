// hosOwnProperty will tell us if the object itself has the property, not its prototype
// result: true
var project = {
  name: 'Top Secret Project',
  dueDate: '1/1/20'
};
console.log(project.hasOwnProperty('name'));

// toString is located on the Object.prototype, not the object itself
// result: false
var project = {
  name: 'Top Secret Project',
  dueDate: '1/1/20'
};
console.log(project.hasOwnProperty('toString'));

// result: true, dunder proto here is Object.prototype
var project = {
  name: 'Top Secret Project',
  dueDate: '1/1/20'
};
console.log(project.__proto__.hasOwnProperty('toString'));

// here we check whether Object.prototpye is a prototype of the object
// result: true
var project = {
  name: 'Top Secret Project',
  dueDate: '1/1/20'
};
console.log(Object.prototype.isPrototypeOf(project));

// create project as a prototype for secretProject
// result: true
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(project.isPrototypeOf(secretProject));

// Object.prototype is also a prototype of project
// result: true
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(Object.prototype.isPrototypeOf(secretProject));

// result: true, __proto__ and .prototype are essentially the same
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(project.__proto__.isPrototypeOf(secretProject));

// result: true, securityLevel is in the prototype
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log('securityLevel' in secretProject);

// result: true, toString is in the prototype through Object.prototype
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log('toString' in secretProject);

// result: false, its in the object, not its prototype
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log('securityLevel' in Object.prototype);
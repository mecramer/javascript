// When we need control over the prototypes, we need to create the object using Object.create()

// Object.create creates an object, but importantly, the first argument becomes a prototype
// project becomes a prototype of secretProject
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.securityLevel);
// result: 2




// how does js find the toString function?
// 1. look at secretProject (not found there), 2. look at project as its the prototype (not found there) 
// 3. look at Object.prototype (found)
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(typeof secretProject.toString);

// result: false, project is the prototype
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.__proto__ === Object.prototype);
// result: function




// Object.prototype is the prototype of project
var project = {
  securityLevel: 2
};
var secretProject = Object.create(project);
console.log(secretProject.__proto__.__proto__ === Object.prototype);
// result: true




// This is called walking the prototype chain

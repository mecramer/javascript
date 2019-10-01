// create a new object using the Object constructor function
var project = new Object();
project.name = "Project Phoenix";
console.log(project.name);
// result: Project Phoenix


// an object can hold data, strings, functions, booleans...
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function() {
  return true;
};
console.log(project.updateDueDate());
// result: true


// brackets can be used for object properties
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function() {
  return true;
};
console.log(project["securityLevel"]);
// result: 15


// a variable can be created to access a field
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function() {
  return true;
};
var field = "securityLevel";
console.log(project[field]);
// result: 15


// here, we can use JSON to create an object
var project = {};
project.name = "Project Phoenix";
console.log(project.name);
// result: Project Phoenix


// using JSON, we can create the properties for the ojbect
var project = {
  name: "Project Phoenix",
  securityLevel: 15,
  updateDueDate: function() {
    return true;
  }
};
console.log(project.name);
// result: Project Phoenix


// we can also have arrays in our objects
var project = {
  name: "Project Phoenix",
  securityLevel: 15,
  updateDueDate: function() {
    return true;
  },
  team: ['iguanaboy', 'cactusgirl', 'Buffy']
};
console.log(project.team[2]);
// result: Buffy


// we can have objects within objects
var project = {
  tasks: [
    {
      taskName: 'first'
    },
    {
      taskName: 'second'
    }
  ]
};
console.log(project.tasks[1].taskName);
// result: second

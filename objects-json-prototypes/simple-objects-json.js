// create a new object using the Object constructor function
// result: Project Phoenix
var project = new Object();
project.name = "Project Phoenix";
console.log(project.name);

// an object can hold data, strings, functions, booleans...
// result: true
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function() {
  return true;
};
console.log(project.updateDueDate());

// brackets can be used for object properties
// result: 15
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function() {
  return true;
};
console.log(project["securityLevel"]);

// a variable can be created to access a field
// result: 15
var project = new Object();
project.name = "Project Phoenix";
project.securityLevel = 15;
project.updateDueDate = function() {
  return true;
};
var field = "securityLevel";
console.log(project[field]);

// here, we can use JSON to create an object
// result: Project Phoenix
var project = {};
project.name = "Project Phoenix";
console.log(project.name);

// using JSON, we can create the properties for the ojbect
// result: Project Phoenix
var project = {
  name: "Project Phoenix",
  securityLevel: 15,
  updateDueDate: function() {
    return true;
  }
};
console.log(project.name);

// we can also have arrays in our objects
// result: Buffy
var project = {
  name: "Project Phoenix",
  securityLevel: 15,
  updateDueDate: function() {
    return true;
  },
  team: ['iguanaboy', 'cactusgirl', 'Buffy']
};
console.log(project.team[2]);

// we can have objects within objects
// result: second
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

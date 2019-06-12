// Important: with constructor functions, we get access to a prototype

console.log(typeof Object);
// result: function, Ojbect is a constructor function. Its not an object, as you might think

// constructor functions should always begin with an uppercase letter




// a new constructor function, Employee. think of it as a new data or object type
// to create a new contructor function, we just create it as a new function
// this refers to the current object, the object that gets passed into the function
// the new keyword creates a brand new, empty object and passed the object as the this keyword, not as an argument
var Employee = function (name) {
  this.name = name;
};
var newEmployee = new Employee('Mark');
console.log(typeof newEmployee);
// result: object




var Employee = function (name) {
  this.name = name;
};
var newEmployee = new Employee('Mark');
console.log(newEmployee.name);
// result: Mark




// constructor functions can have multiple arguments
var Employee = function (name, boss) {
  this.name = name;
  this.boss = boss;
};
var newEmployee = new Employee('Mark', "Acme Inc.");
console.log(newEmployee.boss);
// result: Acme Inc.




var Employee = function (name) {
  this.name = name;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1 === e2);
// result: false, these are 2 separate unique objects




var Employee = function (name) {
  this.name = name;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.__proto__ === e2.__proto__);
// result: true, they both share the same prototype




var Employee = function (name) {
  this.name = name;
  this.giveRaise = function () {

  };
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.giveRaise === e2.giveRaise);
// result: false, they are unique instances

// problem: what if we have many objects produced by this, we would have unique items for each one even though the 
// function does the same thing
// We DON'T want to add functions directly to the constructor function




// we can access the prototype on constructor functions, we couldn't do this on JSON object's prototypes
console.log(typeof Employee.prototype);
// result: object




// JSON objects have their prototype set to Object, but not constructor functions
console.log(Employee.prototype === Object.prototype);
// result: false




// solution: put it in the prototype
var Employee = function (name) {
  this.name = name;
};
Employee.prototype.giveRaise = function () {

};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
console.log(e1.giveRaise === e2.giveRaise);
// result: true, all the objects will now point to the same function, great optimization




var Employee = function (name) {
  this.name = name;
  this.salary = 50000;
};
Employee.prototype.giveRaise = function (raise) {
  this.salary += raise;
};
var e1 = new Employee('JJ');
var e2 = new Employee('JV');
e1.giveRaise(100000);
console.log(e1.salary);
console.log(e2.salary);
// result: JJ: 150,000, JV: 50,000

// Event handlers use this in a different way, this is how functions use them

// result: object
console.log(typeof this);

// result:
// doens't work in node, only a browser window
// console.log(this === window);

// result: Mark, we are in the global area
var name = "Mark";
console.log(this.name);

// result: true, the function is called from the global namespace
// var updateSalary = function () {
//   console.log(this === window);
// }
// updateSalary();

// result: object { name: 'Mark', updateSalary: [Function updateSalary] }
var employee = {
  name: "Mark",
  updateSalary: function() {
    console.log(this);
  }
};
employee.updateSalary();

// result: window object
// because employee calls another function (fn), which has no object attached to it, so it refers back to the global object
var employee = {
  name: "Mark",
  updateSalary: function() {
    var fn = function() {
      console.log(this);
    };
    fn();
  }
};
employee.updateSalary();

// result: Address [line1: '123 State St.']
// new creates a new object and when it calls the constructor function, this gets assigned to the object that called it
var Address = function (line1) {
  this.line1 = line1;
  console.log(this);
};
var addr = new Address('123 State St.');

// result: Address [line1: '123 State St.']
// updateZipCode is attached to a real object, which gets assigned to this
var Address = function (line1) {
  this.line1 = line1;
};
Address.prototype.updateZipCode = function () {
  console.log(this);
};
var addr = new Address('123 State St.');
addr.updateZipCode();
// result: function
var hireEmployee = function (name) {

};
console.log(typeof hireEmployee);

// many devs are moving away from anonymous functions
// result: Uncaught Error, myHireEmployeeFn, the name allows a trace between action and myHireEmployeeFn vs
// if the first function was an anonymous function
var hireEmployee = function myHireEmployeeFn (name) {
  throw ('Error');
};
var action = hireEmployee;
action('JJ');
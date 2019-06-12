// arguments exist in every function, normally access through the argument list, the comma separated list in the declatation
// but there is also an arguments property that can be used




var validateValues = function () {
  console.log(arguments.length);
};
validateValues(1, true, 'Settings');
// result: 3
// even though the function has 0 arguments, we can still get access to any arguments passed to the function




var validateValues = function () {
  console.log(arguments[0]);
};
validateValues(1, true, 'Settings');
// result: 1
// arguments can be treated as an array




var validateValues = function () {
  arguments[0] = 9;
  console.log(arguments[0]);
};
validateValues(1, true, 'Settings');
// result: 9
// we can change values of arguments
// this might be useful if we want to change some setting or do some cleanup before executing code
// javascript has the try, catch, finally construct
// we'll look at that here, but more likely, we'll use promises for error handling




try {
  throw new Error ('Custom Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
// we need to create a new instance of our Error object
// because we are throwing an error, the catch block will execute
// the variable e, is the error
// result: Error - Custom Error
// this catch block will only execute in case an error gets thrown




try {
  throw new Error ('Custom Error');
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
finally {
  console.log('Finally done.');
}
// if there is an error or not, the finally block will exectue, whereas the catch block only executes if an error
// result: Error - Custom Error Finally done.




try {
  var i = 42;
}
catch (e) {
  console.log(e.name + ' - ' + e.message);
}
finally {
  console.log('Finally done.');
}
// here the catch block does not run, but the finally block does
// result: Finally done.




try {
  throw new RangeError ('Range Error');
}
catch (e) {
  if (e instanceof RangeError) {
    console.log(e.name);
  }
}
// sometimes in our catch clause, we want to find out what error was thrown
// we can use the instance of operator on our error object to compare it to a given error name
// result: RangeError
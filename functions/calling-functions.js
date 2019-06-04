// sometimes we want to take control over the 'this' variable in a function
// we can do this using call() and apply()
// jquery and angular use this all the time

var updateZipCode = function () {
  console.log(this);
};
updateZipCode();
// result: window


var updateZipCode = function () {
  console.log(this);
};
updateZipCode.call({});
// now we are using the call method and passing an empty object {}
// result: {}, the empty object


var updateZipCode = function () {
  console.log(this);
};
updateZipCode.call({zip: '11787'});
// now we are using the call method and passing an object {}
// result: {zip: '11787'},
// the call passes the object which becomes the this in the function


var updateZipCode = function () {
  console.log(this);
};
var zipCode = {
  zip: '11787'
};
updateZipCode.call({zipCode});
// now we are using the call method and passing a variable which contains an object
// result: { zipCode: { zip: '11787' } }
// its more common to do it this way


var updateZipCode = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
var zipCode = {
  zip: '11787'
};
updateZipCode.call(zipCode, '11888', 'us');
// result: 1888 us
// the call function can also pass arguments


var updateZipCode = function (newZip, country) {
  console.log(newZip + ' ' + country);
};
var zipCode = {
  zip: '11787'
};
updateZipCode.apply(zipCode, ['11888', 'us']);
// result: 1888 us
// apply requires passing an array instead of a comma separated list
// the apply method breaks down the array into arguments
// this is better for complex code, don't need to know how many arguments to pass

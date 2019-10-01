// result: full date readout, such as 2019-05-16T20:08:44.276Z
var dt = new Date();
console.log(dt);
// using the built in Date object


// if we pass a 0 to the Date
var dt = new Date(0);
console.log(dt);
// result: 0 represents Janaury 1, 1970


// we can pass a month, day and year
var dt = new Date('6/13/2019');
console.log(dt);
// result: The time will read out with that date


// date can also be spelled out with this format
var dt = new Date('June 13, 2019');
console.log(dt);
// result: The time will read out with that date


// if we pass invalid information...
var dt = new Date('Hello World');
console.log(dt);
// result: we get message Invalid Date, this is not an exception


// if we try and parse invalid information...
var dt = Date.parse('Hello World');
console.log(dt);
// result: NaN


// if we pass a date to the UTC function
var dt = Date.UTC(2000, 0);
console.log(dt);
// result: the number of seconds since January 1, 1970


// if we pass the UTC numbers of seconds to the new Date object
var dt = new Date(Date.UTC(2000, 0));
console.log(dt);
// result: we get a more readable date


// running the now function on Date
var dt = Date.now();
console.log(dt);
// result: gives number of seconds since January 1, 1970 to now


// running the toDateString method on the date
var dt = new Date();
console.log(dt.toDateString());
// result: gives the current date in a more readable fashion


// running the toTimeString method on the date
var dt = new Date();
console.log(dt.toTimeString());
// result: gives the current hours, minutes and seconds


// there are many functions we can run on Date
var dt = new Date();
console.log(dt.getFullYear());
// result: gives the current year


// setFullYear can change the year
var dt = new Date();
dt.setFullYear(2025);
console.log(dt.getFullYear());
// result: 2025


// more documentation on Date, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

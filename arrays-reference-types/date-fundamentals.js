// using the built in Date object
// result: full date readout, such as 2019-05-16T20:08:44.276Z
var dt = new Date();
console.log(dt);

// if we pass a 0 to the Date
// result: 0 represents Janaury 1, 1970
var dt = new Date(0);
console.log(dt);

// we can pass a month, day and year
// result: The time will read out with that date
var dt = new Date('6/13/2019');
console.log(dt);

// date can also be spelled out with this format
// result: The time will read out with that date
var dt = new Date('June 13, 2019');
console.log(dt);

// if we pass invalid information...
// result: we get message Invalid Date, this is not an exception
var dt = new Date('Hello World');
console.log(dt);

// if we try and parse invalid information...
// result: NaN
var dt = Date.parse('Hello World');
console.log(dt);

// if we pass a date to the UTC function
// result: the number of seconds since January 1, 1970
var dt = Date.UTC(2000, 0);
console.log(dt);

// if we pass the UTC numbers of seconds to the new Date object
// result: we get a more readable date
var dt = new Date(Date.UTC(2000, 0));
console.log(dt);

// running the now function on Date
// result: gives number of seconds since January 1, 1970 to now
var dt = Date.now();
console.log(dt);

// running the toDateString method on the date
// result: gives the current date in a more readable fashion
var dt = new Date();
console.log(dt.toDateString());

// running the toTimeString method on the date
// result: gives the current hours, minutes and seconds
var dt = new Date();
console.log(dt.toTimeString());

// there are many functions we can run on Date
// result: gives the current year
var dt = new Date();
console.log(dt.getFullYear());

// setFullYear can change the year
// result: 2025
var dt = new Date();
dt.setFullYear(2025);
console.log(dt.getFullYear());

// more documentation on Date, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
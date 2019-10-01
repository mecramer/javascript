// Testing if pattern is a type of RegExp
// RegExp is a constructor that creates a regular expression object for matching text with a pattern
var blogText = "Sam I Am";
var pattern = new RegExp('am', 'g');
console.log(pattern instanceof RegExp);
// result: true


// This is a shorthand way to do the same thing for creating a RegExp
// g stands for global, find all matches rather than first one only
var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern instanceof RegExp);
// result: true


// run the test method on the string
var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern.test(blogText));
// result: true 


// run the test method on the string, a string that doesn't exist
var blogText = "Sam I Am";
var pattern = /m/g;
console.log(pattern.test(blogText));
// result: false


// run the test method on the string 3 times
var blogText = "Sam I Am";
var pattern = /m/g;
console.log(pattern.test(blogText));
console.log(pattern.test(blogText));
console.log(pattern.test(blogText));
// result: true, true, false, it finds it twice, but not the third time


// run the exec method on the string
// this method returns the matched text if it finds a match, or null if it doesn't, as well as the input string
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result);
// result: [ 'm', index: 2, input: 'Sam I Am', groups: undefined ]


// the result of exec is an array
// here we are asking for the first item in the array, which is the match
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result[0]);
// result: m


// even though exec produces an array, it has a special property put on it by RegExp, called index
// which gives us the index of whatever was found
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index);
// result: 2


// even though exec produces an array, it has a special property put on it by RegExp, called input
// which gives us the string that is being tested
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.input);
// result: Sam I Am


// here, we call the index twice
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index);
var result = pattern.exec(blogText);
console.log(result.index);
// result: 2, 7


// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
var blogText = "Sam I Am";
var pattern = /m/g;
var result = blogText.match(pattern);
console.log(result);
// result: ['m', 'm']


// searching for a match of 'am', lower and upper case matters
var blogText = "Sam I Am";
var pattern = /am/g;
var result = blogText.match(pattern);
console.log(result);
// result: ['am']


// gi, with the added i, makes it case insensitive
var blogText = "Sam I Am";
var pattern = /am/gi;
var result = blogText.match(pattern);
console.log(result);
// result: ['am', 'Am']


// the brackets are another way to say upper or lower case
var blogText = "Sam I Am";
var pattern = /[aA]m/g;
var result = blogText.match(pattern);
console.log(result);
// result: ['am', 'Am']


// the dot before the m represents any character, ie fm, am, um
var blogText = "Sam I Am";
var pattern = /.m/g;
var result = blogText.match(pattern);
console.log(result);
// result: ['am', 'Am']


// more information on RegExp, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

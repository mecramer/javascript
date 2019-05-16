// Testing if pattern is a type of RegExp
// RegExp is a constructor that creates a regular expression object for matching text with a pattern
// result: true
var blogText = "Sam I Am";
var pattern = new RegExp('am', 'g');
console.log(pattern instanceof RegExp);

// This is a shorthand way to do the same thing for creating a RegExp
// g stands for global, find all matches rather than first one only
// result: true
var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern instanceof RegExp);

// run the test method on the string
// result: true
var blogText = "Sam I Am";
var pattern = /am/g;
console.log(pattern.test(blogText));

// run the test method on the string, a string that doesn't exist
// result: false
var blogText = "Sam I Am";
var pattern = /m/g;
console.log(pattern.test(blogText));

// run the test method on the string 3 times
// result: true, true, false, it finds it twice, but not the third time
var blogText = "Sam I Am";
var pattern = /m/g;
console.log(pattern.test(blogText));
console.log(pattern.test(blogText));
console.log(pattern.test(blogText));

// run the exec method on the string
// this method returns the matched text if it finds a match, or null if it doesn't, as well as the input string
// result: [ 'm', index: 2, input: 'Sam I Am', groups: undefined ]
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result);

// the result of exec is an array
// here we are asking for the first item in the array, which is the match
// result: m
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result[0]);

// even though exec produces an array, it has a special property put on it by RegExp, called index
// which gives us the index of whatever was found
// result: 2
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index);

// even though exec produces an array, it has a special property put on it by RegExp, called input
// which gives us the string that is being tested
// result: Sam I Am
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.input);

// here, we call the index twice
// result: 2, 7
var blogText = "Sam I Am";
var pattern = /m/g;
var result = pattern.exec(blogText);
console.log(result.index);
var result = pattern.exec(blogText);
console.log(result.index);

// The match() method searches a string for a match against a regular expression, and returns the matches, as an Array object.
// result: ['m', 'm']
var blogText = "Sam I Am";
var pattern = /m/g;
var result = blogText.match(pattern);
console.log(result);

// searching for a match of 'am', lower and upper case matters
// result: ['am']
var blogText = "Sam I Am";
var pattern = /am/g;
var result = blogText.match(pattern);
console.log(result);

// gi, with the added i, makes it case insensitive
// result: ['am', 'Am']
var blogText = "Sam I Am";
var pattern = /am/gi;
var result = blogText.match(pattern);
console.log(result);

// the brackets are another way to say upper or lower case
// result: ['am', 'Am']
var blogText = "Sam I Am";
var pattern = /[aA]m/g;
var result = blogText.match(pattern);
console.log(result);

// the dot before the m represents any character, ie fm, am, um
// result: ['am', 'Am']
var blogText = "Sam I Am";
var pattern = /.m/g;
var result = blogText.match(pattern);
console.log(result);

// more information on RegExp, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

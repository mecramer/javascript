// these functions deal with things like parsing numbers, encoding and decoding strings and using the eval function


var value = parseInt('1234');
console.log(value);
// result: 1234 as a number


var value = parseInt('b1234');
console.log(value);
// result: NaN, parser stops when it doesn't understand something


var value = parseInt('12z34');
console.log(value);
// result: 12, it parses until it gets to an unrcongnizable character


var value = parseInt('1234.8');
console.log(value);
// result: 1234, it returns an integer


var value = parseInt(' ');
console.log(value);
// result: NaN


var value = parseInt('C000', 16);
console.log(value);
// result: 49152
// the second argument is the radix, the base in mathematical numerical systems
// here base 16 is a hex number


var value = parseFloat('123.9');
console.log(value);
// result: 123.9
// parseFloat will show decimals


var value = parseFloat('z123.9');
console.log(value);
// result: NaN


var value = parseFloat('1239e-1');
console.log(value);
// result: 123.9
// this is exponental value


var value = isFinite(Number.POSITIVE_INFINITY);
console.log(value);
// result: false
// isFinite is used to test whether a number is set to one of the infinity values


var value = isFinite(42);
console.log(value);
// result: true, 42 is a finite number


var value = isNaN(NaN);
console.log(value);
// result: true
// NaN is NaN


var value = isNaN(9 / 0);
console.log(value);
// result: false, 9/0 is infinity


var path = "\\start\\";
console.log(encodeURI(path));
// result: %5Cstart%5C
// The encodeURI() function encodes a Uniform Resource Identifier (URI) by replacing each instance of certain characters by 
// one, two, three, or four escape sequences representing the UTF-8 encoding of the character


var path = "\\start\\+";
console.log(encodeURI(path));
// result: %5Cstart%5C+
// not all characters are encoded, notice the + stays the same


var path = "\\start\\+";
console.log(encodeURIComponent(path));
// result: %5Cstart%5C%2B
// URIComponent encodes characters like the +


var path = "5Cstart%5C+";
console.log(decodeURI(path));
// result: \\start\\+%
// opposite of encode


var globalVar = 'foo';
var code = 'console.log(globalVar)';
eval(code);
// result: foo
// in general you want to avoid eval, it allows strings to be operated as code, which can open you to attacks

var value = 'My String';
console.log(value.charAt(3));
// result: S, its 0 based
// charAt is a character at a certain index




var value = 'My String';
console.log(value.concat(' Lives!'));
// resulte: My String Lives!
// the concat function adds a string to another string




var value = 'My String';
console.log(value.includes(' '));
// result: true
// boolean checking for presence of a string partiel




var value = 'My String';
console.log(value.endsWith('ing'));
// result: true
// boolean checking for string ending with the value given




var value = 'My String';
console.log(value.endsWith('ing '));
// result: false




var value = 'My String';
console.log(value.indexOf('M'));
// result: 0
// indexOf shows the position of the character




var value = 'My String';
console.log(value.indexOf('Z'));
// result: -1
// indexOf shows -1 if it can't find




var value = 'Some String';
console.log(value.lastIndexOf('S'));
// result: 5
// the array index of the last occurrence of the character




var value = 'Some String';
console.log(value.slice(5));
// result: String
// slices off everything before the index number




var value = 'Some String';
console.log(value.slice(5, 8));
// result: Str
// start at index 5 and stop just before, but not including 8. So characters 5, 6, 7




var value = 'Some String';
console.log(value.slice(-3));
// result: ing
// starts at the end of the string




var value = 'Some String';
console.log(value.split(' ').length);
// result: 2. 
// an array of 2 is created split at the spaces. The lentgth of that array is 2




var value = 'Some String';
console.log(value.substr(0, 4));
// result: Some
// this function takes the starting position and the length




var value = 'Some String';
console.log(value.substring(5, 6));
// result: S
// substring, spelled out takes the starting index and ending, but the ending index is not inclusive




var value = 'Some String';
console.log(value.substr(5, 6));
// result: String
// subst is different in that the second number refers to the numbers of characters to get

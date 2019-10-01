var message = 'Outside';
if (5 === 5) {
  var message = 'Equal';
  console.log(message);
}
console.log(message);
// result: Equal Equal
// because var doesn't have block scope, resetting it to Equal changes it up the chain




let message1 = 'Outside';
if (5 === 5) {
  let message1 = 'Equal';
  console.log(message1);
}
console.log(message1);
// result: Equal Outside
// let has block scope, so settint to 'Equal' only affects it inside the block
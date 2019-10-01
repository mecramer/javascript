// && has higher precedence over ||
// var1 || var2; if var1 is valid, the result will be that, if var1 is falsy, then var2 will be the result
// !var1; this will convert var1 into a boolean value and then flip it




if (5 === 5 && 6 === 7) {
  console.log(true);
}
else {
  console.log(false);
}
// result: false; both conditions need to be true




if (5 === 5 || 6 === 7) {
  console.log(true);
}
else {
  console.log(false);
}
// result: true; only one needs to be true




let userSettings = null;
let defaultSettings = { name: 'Default' };
console.log(userSettings || defaultSettings);
// result: { name: 'Default' }
// this is often used to set a default setting if user data isn't available




let userSettings1 = { name: 'Mark'};
let defaultSettings1 = { name: 'Default' };
console.log(userSettings1 || defaultSettings1);
// result: { name: 'Mark; }
// because userSettings is not false, the operator takes that value




let car = null;
console.log(!car);
// result: true
// since car was set to falsy, the not property flips it to thruthy




let truck = null;
if ( !truck) {
  truck = {type: 'heavy'};
}
console.log(truck);
// result { type: heavy}
// common usage, check if the value has been set and if not, set a default value
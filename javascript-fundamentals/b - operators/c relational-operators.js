// relational operators: >  <  >=   <=


let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1 < s2) {
  console.log(true);
}
else {
  console.log(false);
}
// result: true
// reason, uppercase letters come first, based on ASCII characters


let z1 = 'Zoo';
let z2 = 'alphabet';

if (z1.toLowerCase() < z2.toLowerCase()) {
  console.log(true);
}
else {
  console.log(false);
}
// result: false
// we use the toLowerCase() function to make the casing same on all variables
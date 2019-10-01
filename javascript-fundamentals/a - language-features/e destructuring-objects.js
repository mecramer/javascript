// let car = { id: 5000, style: 'convertible' };
// let { id, style } = car;
// console.log(id, style);
// result 5000 convertible
// destrucuring objects works with curly braces rather than the square brackets




// let car = { id: 5000, style: 'convertible' };
// let id, style;
// { id, style } = car;
// console.log(id, style);
// result: error on line 12
// reason, the curly brace is also used for code blocks, the parser gets confused




let car = { id: 5000, style: 'convertible' };
let id, style;
({ id, style } = car);
console.log(id, style);
// result: 5000 'convertible'
// to fix the curly brace problem in example above, put parentheses around entire statement
// we only need to use the parenthesis if we are destructoring objects (not arrays) and we declare the variables and
// destructore in separate statements
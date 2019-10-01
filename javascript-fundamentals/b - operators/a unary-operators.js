// ++ increments variables, -- decrements the variable
// the ++/-- can be placed before or after the variable
// if placed before, the variable value will change before it gets used in an expression
// if placed after, it gets changed after being used in the expression
// +var, plus is another unary operator that can be used to convert a string to a number
// -var, the minus unary operator changes the sign of a numeric variable

let year = 1967;
console.log(++year);
// result: 1968


let year1 = 1967;
console.log(year1++);
// result: 1967


let year2 = 1967;
console.log(year2++);
console.log(year2);
// result: 1967
// result: 1968
// when ++ is used after, the value changes, but only after the line is completed


let year3 = "1967";
console.log(typeof (+year3));
// result: number
// + has changed the type from string to number


let year4 = "-1967";
console.log(-year4);
// result: 1967
// - has converted type to number and changed from negative value to positive
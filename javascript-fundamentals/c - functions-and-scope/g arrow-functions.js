import { get } from "https";

// arrow functions are more modern and concise in syntax


let getId = () => 123;
console.log( getId() );
// result: 123
// the empty braces mean there are no parameters to this function
// we then use the equal-greater symbol, thats where the arrow function gets its name
// and after that symbol, we have the return value
// so its parameters, arrow function symbol and return value

let getIda = _ => 123;
console.log( getIda() );
// result: 123
// the underscore can be used in place of empty parenthesis
// this usually signifies a variable that may or may not be used in the function


let getId2 = prefix => prefix + 123;
console.log( getId2('ID: ') );
// result: ID: 123
// prefix is a parameter, we don't need to put it in parenthesis if there is only one parameter
// the return values is prefix + 123


let getId3 = (prefix, suffix) => prefix + 123 + suffix;
console.log( getId3('ID: ', '!') );
// result: ID: 123!
// because we are using multiple parameters, we need parenthesis


let getId4 = (prefix, suffix) => {
  let a = 100 + 23;
  return prefix + a + suffix;
};
console.log( getId4('ID: ', '!') );
// result: ID 123!
// if you need more complex logic, you need the braces to get a function body, but you also need to use a return statement


// Arrow functions do not have their own "this" value
// 'this' refers to the enclosing context
// arrow functions were designed to get around the problems with the this value 
// its a good idea to use arrow functions for methods
'use strict';
console.log(productId);
let productId = 12;
// result: referenceError, productID is not defined
// unlike vars, lets do not get hoisted


let productId = 12;
{
  let productId = 2000;
}
console.log(productId);
// result: 12
// lets have block Scope. The one set in the brackets only exists in that block


{
  let productId = 2000;
}
console.log(productId);
// result: referencError
// productId does not exist outside the block


function updateProductId() {
  productId = 12;
}
let productId = null;
updateProductId();
console.log(productId);
// result: 12


let productId = 42;
for (let productId = 0; productId < 10; productId++)
{

}
console.log(productId);
// result: 42
// the productId set in the for condition is scoped to its block


let updateFuctions = [];
for (var i = 0; i < 2; i++) {
  updateFuctions.push(function () {return i;});
}
console.log(updateFuctions[0]());
// result: 2
// a closure gets formed over the variable i and at the end of the loop, i is set to 2
// so the function will always return 2
// while this could hurt performance a bit, it helps get rid of a problem with closures


let updateFuctions = [];
for (let i = 0; i < 2; i++) {
  updateFuctions.push(function () {return i;});
}
console.log(updateFuctions[0]());
// result: 0
// using let, each iteration of the loop will get its own i variable and any closures will close over its own value of i
// another good reason to use let over var


const MARKUP_PCT = 100;
console.log(MARKUP_PCT);
// result: 100
// uppercase for const is standard in other languagaes


const MARKUP_PCT;
console.log(MARKUP_PCT);
// result: syntax error
// const must be initialized


const MARKUP_PCT = 100;
MARKUP_PCT = 10;
console.log(MARKUP_PCT);
// result: TypeError
// once we initialize a constant, we can't change it


const MARKUP_PCT = 100;
if (MARKUP_PCT > 0) {
  const MARKUP_PCT = 10;
}
console.log(MARKUP_PCT);
// result: 100
// because of block scope, there are now 2 MARKUP_PCT consts.
// the let keyword creates block scoping
var x = 10;

if (x) {
  var x = 4;
}

console.log(x);
// result: 4
// var is not scoped to a block, so changing it to 4 in the block, effects the same variable outside the block.

var x = 10;

if (x) {
  let x = 4;
}

console.log(x);
// result: 10
// the global scope didn't change to 4, because the let only changed it within the if block
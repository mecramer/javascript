// let i=0;
// for (; i<12; i++) {
//   if (i === 8) {
//     break;
//   }
// }
// console.log(i);
// result: 8
// break will exit the loop
// the empty initialization at the beginning of the for statement is because we do not need to initialize any variables
// but we do need to keep the semicolon there




for (let i=0; i<4; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}
// result: 0 1 3
// continue lets us continue within the loop, but no more code executes in the block
// in this case, if continue executes, console.log doesn't execute on that iteration through the loop

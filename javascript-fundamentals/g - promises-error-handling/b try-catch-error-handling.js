// one better way to handle errors is with the try and catch keywords



try {
  let car = newCar;
}
catch(error) {
  console.log('error', error);
}
console.log('continuing... ');
// we are going to try a block of code in a try block and if there is an error..
// we catch it in a catch block
// the catch block will only execute if an error is logged in the try block
// but the key thing is the program then continues
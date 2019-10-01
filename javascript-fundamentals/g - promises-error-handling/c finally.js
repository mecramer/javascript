try {
  let car = newCar;
}
catch(error) {
  console.log('error: ', error);
}
finally {
  console.log('this always executes');
}
// the finally block always executes wether or not an error is thrown
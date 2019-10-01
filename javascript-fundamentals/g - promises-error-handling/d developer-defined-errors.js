try {
  // code here...
  throw new Error('my custom error');
}
catch(error) {
  console.log('error: ', error);
}
finally {
  console.log('this always executes');
}
// we can throw our own errors. It can be a string or a more complex object
// in the try block, you can throw your own error using the new Error object.
// JSON, Javascript Object Notation
// the purpose is to transmit JavaScript objects over the wire
// most often sending or receiving a JavaScript object to some API such as a RESTful API on the web




let car = {
  id: 123,
  style: 'convertible'
};
console.log( JSON.stringify(car) );
// result: {"id":123,"style":"convertible"}
// car is an object literal, not JSON
// if we wanted to send it somewhere on the web, we'd want to convert it to JSON
// we can do that with the global JSON object, and run the method stringify, passing it the object
// you can see a difference in JSON is that the names need to be in quotes
// now the string could be passed onto some API




// arrays can also be converted to JSON
let carIds = [
  {carId: 123},
  {carId: 456},
  {carId: 789}
];
console.log( JSON.stringify(carIds) );
[{"carId":123},{"carId":456},{"carId":789}];




// Parsing JSON
let jsonIn = 
`
[
  {"carId": 123},
  {"carId": 456},
  {"carId": 789}
]
`;
let carIds1 = JSON.parse(jsonIn);
console.log( carIds1 );
// result: 0: {carId: 123}, 1 {carId: 456}, 2: {carId: 789}
// the backticks are being used to create new line characters, part of ES2015
// remember: the property names need to be in quotes in JSON
// parse is called on the object (jsonIn)
// parse turned it into a regular JavaScript object

// to put it back into JSON
console.log(JSON.stringify(carIds1));
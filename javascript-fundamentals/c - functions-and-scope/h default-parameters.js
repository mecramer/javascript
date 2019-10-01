// in earlier versions of javascript, it was not possible to take a parameter and give it a default value
// we an do that now with ES2015


let trackCar = function(carId, city = 'NY') {
  console.log(`Tracking ${carId} in ${city}.`);
};
console.log( trackCar(123) );
console.log( trackCar(123, 'Chicago') );
// result: 123, NY
//         123, Chicago
// in the parameters, we are setting city = NY as the default parameter
// in the first console.log, we are also using interpolation, we use back ticks around a string and we
// can interopolate variables here. So this will write out Tracking and the vairalbe value for carID
// in and the variable value for city.
// The fisrt example takes 123 for carId, but uses the default value of NY
// The second example takes 123 but also overrwrites the default city and substitutes Chicago

// default parameters must be listed on the right side of the parameter list
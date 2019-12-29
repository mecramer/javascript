// Destructuring is a feature of ES6 that allows you to break apart stuff into variables


var animal = {
  species: 'dog',
  weight: 23,
  sound: 'woof'
};

var { species, sound } = animal;
console.log('The ' + species + ' says ' + sound + '!');
// result: The dog says woof!

// This is destructing. we've assigned species and sound from the animal object to local variables called species and sound

// Why? 
// Most common reason is to make it esier to deal with option objects, objects which you pass to a function
// which might or might not contain several properties


// Here is how you would do the same thing without destructuring
makeSound({
  species: 'dog',
  weight: 23,
  sound: 'woof'
});

function makeSound(options) {
  console.log('The ' + options.species + ' says ' + options.sound + '!');
}
// we call the function makeSound and pass an object literal as a parameter (options)


// Now we are going to make species and optional property on the options object
makeSound({
  weight: 23,
  sound: 'woof'
});

function makeSound(options) {
  console.log('The ' + options.species + ' says ' + options.sound + '!');
}
// result: The undefined says woof!


// To fix this, we add a default value
makeSound({
  weight: 23,
  sound: 'woof'
});

function makeSound(options) {
  options.species = options.species || 'animal';
  console.log('The ' + options.species + ' says ' + options.sound + '!');
}
// result: The animal says woof!
// problem: a lot of repetitions, we use refer to .options prefix a lot


// some of these problems are solvable without destructuring:
makeSound({
  weight: 23,
  sound: 'woof'
});

function makeSound(options) {
  var species = options.species || 'animal';
  var sound = options.sound;
  console.log('The ' + species + ' says ' + sound + '!');
}
// this is a bit better, there are fewer references to options
// but it can be done even better with destructuring


// now with destructuring
makeSound({
  weight: 23,
  sound: 'woof'
});

function makeSound({species = 'animal', sound}) {
  console.log('The ' + species + ' says ' + sound + '!');
}
// you can do structuing in the method signature and assign default values at same time!
// result: The animal says woof!

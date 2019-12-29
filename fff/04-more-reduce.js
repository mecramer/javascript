// reduce can limit to anything, such as another array or an object


// here we are going to import data from a tab delimited text file and make it look nice, an object literal
// where the key is the name and their orders go in an array

// we first need to import the file using the fs namespace from node
var fs = require('fs'); // old way
// import fs from 'fs'; // new way

// read the file
var output = fs.readFileSync('data.txt', 'utf8');
// utf8 is required to turn bytes into strings of text
// console.log('output', output);


// now lets split it into an array
var output = fs.readFileSync('data.txt', 'utf8')
  .split('\n');
 // this is a method on the sting that will split into arrays using the new line character 
// console.log('output', output);


// now add trim to get rid of any extra breaks at beginning or end
var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n');
// console.log('output', output);


// now add mapping to create separate arrays within the array, converting into a more manageable object
var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'));
 // split the lines on the tab character, this gives us an array of arrays
// console.log('output', output);


// now lets reduce it
var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = [];
    return customers;
  }, {} );
  // reduce takes 2 parameters, a function and starting object
  // this time we are going to create an oject literal for the starting object
  // line[0] is the name property, we are making it an empty array
// console.log('output', output);


// now we want to append the order items
var output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    customers[line[0]] = [];
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    });
    return customers;
  }, {} );
  // console.log('output', output);


  // and now to make it look nicer
var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((customers, line) => {
  customers[line[0]] = [];
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
  });
  return customers;
}, {} );
// console.log('output', JSON.stringify(output, null, 2));
// we created a JSON string from the output with 2 spaces for indentation


// we have a bug, only the last item for each is showing
var output = fs.readFileSync('data.txt', 'utf8')
.trim()
.split('\n')
.map(line => line.split('\t'))
.reduce((customers, line) => {
  customers[line[0]] = customers[line[0]] || [];  // use the existing array, if there is one
  customers[line[0]].push({
    name: line[1],
    price: line[2],
    quantity: line[3]
  });
  return customers;
}, {} );
console.log('output', JSON.stringify(output, null, 2));


// this is a more advanced reduce example where instead of a number, we used an object literal
// we are also using a lot of chaining here (trim, split, map (with another split inside), reduce)
// good functional code is made up of small functions that do one thing
// and you just bind them all together
// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
// For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
// print "Buzz" instead.

// When you have that working, modify your program to print 
// "FizzBuzz" for numbers that are divisible by both 3 and 5 
// (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

for (let numbers = 1; numbers < 101; numbers++) {
  if (numbers % 3 == 0) {
    if (numbers % 5 == 0) {
      console.log("FizzBuzz")
    } else {
      console.log('Fizz');
    }   
  }
  if (numbers % 5 == 0) {
    console.log('Buzz');
  }
  else {
    console.log(numbers);
  }
}

// More elegant solution:
// for (let n = 1; n <= 100; n++) {
//   let output = "";
//   if (n % 3 == 0) output += "Fizz";
//   if (n % 5 == 0) output += "Buzz";
//   console.log(output || n);
// }

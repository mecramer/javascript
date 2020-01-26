// sometimes you want to stop a loop if a certain condition is met
// break terminates the current loop and jumps to th next statement in the script
// continuee: terminates the current iteration of the loop and runs the next iteration

const MIN = 0;
const MAX = 36;
var testNumber = 15;
var i = 1;

// the max means this loop would always run, there is no condition that stops it
while (MAX) {
    // generate a random number between 0 and 36
    let randomValue = Math.floor(Math.random() * (MAX - MIN)) + MIN;

    // this loop runs until this if statement evaluates to true, when it then breaks out of the loop and onto the console log
    if (randomValue == testNumber) {
        break;
    }

    console.log("Round " + i + ": " + randomValue);
    i++;
}

console.log("The script went " + i + " rounds before finding " + testNumber + ".");


// this script helps us find what numbers between 1 and 100 are prime numbers
const CEILING = 100;

function primeTest(testValue) {
    let isPrime = true;
    for ( let i = 2; i<testValue; i++ ) {
        if ( testValue % i === 0 ) {
            isPrime = false;
        }
    }
    return isPrime;
}

for (let i = 2; i<=CEILING; i++) {
    let result = primeTest(i);
    // if the condition is met, it skips the rest of the loop and jumps back up to the top of loop for next iteration
    // this is done by the continue statement
    if ( result = false ) {
      continue;
    }
    console.log(i + " is a prime number.");
}

// rule of thumb: anytime you need to terminate a loop, use break
// anytime you need to avoid a condition in the loop, use continue

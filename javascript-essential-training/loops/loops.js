// loops: start a process (usually a function), then when its done, we start the process again 
// at their core, they are simple

// create a condition and say as long as this condition holds, keep running the loop
// the for loop assumes you know how many times you want the loop to run
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// if you don't know how many loops you need, you can run a while loop
// this does the same as example above
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// while loops can get much more complex than for loops
var i = 1;
var reps = 0;

while ( i < 567) {
  ++reps;
  console.log(reps + ' reps gives us ' + i);
  i *= 2.1;
}

// the do loop ensures a loop runs at least once
var i = 567;
var reps = 0;

do {
  ++reps;
  console.log(reps + ' reps gives us ' + i);
  i *= 2.1;
} while (i < 567);

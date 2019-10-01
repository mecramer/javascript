// The eval function accepts a string, it parses the string and executes the code




let inputString = 'console.log("Hello");';
eval(inputString);
// result: Hello
// eval is susceptible to injection attaks, dont' use
// someone could change the string in inputString and have that code execute
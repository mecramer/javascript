const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

// global variable for timer
// setting it up as an array for minutes, seconds, hundredths of seconds, thousands of seconds
var timer = [0, 0, 0, 0];
var interval; // setting this up so we can control the interval function outside of start
var timerRunning = false; // we need to set this to control creating a new timer for starting over

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
  if (time <=9) {
    // time will be converted to a string, but thats fine
    time = '0' + time;
  }
  return time;
}

// Run a standard minute/second/hundredths timer:
// this is called from the textarea start function
function runTimer () {
  // first, create a proper string to display the time in good format
  let currentTime = leadingZero(timer[0]) + ':' + leadingZero(timer[1]) + ':' + leadingZero(timer[2]);
  theTimer.innerHTML = currentTime;
  timer[3]++;
  // math.floor is to make sure we get an integer back
  // for minutes we divide the milliseconds by 100 and then divide that by 60 to get the minutes
  timer[0] = Math.floor((timer[3]/100)/ 60);
  // for seconds we divide milliseconds by 100 and then subtract to minutes times 60 to go back to 0 when reaching 60 seconds
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  // for hundredths of seconds, take the milliseconds and subtract the seconds times 100 to go back to 0 each second
  // subtracting minutes * 6000 is to reset when minutes reach 100
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}


// Match the text entered with the provided text on the page:
function spellCheck () {
  // get the text entered
  let textEntered = testArea.value;
  // here, we are getting all the text currently entered, by taking the text required and returning as many characters
  // for it as the user has entered. If the user has entered 3, for instance, we want to have the first 3 characters of the
  // required text to compare to
  // .substring turns a string into an array of all the characters
  let originTextMatch = originText.substring(0,textEntered.length);

  // here we set a border color, first if the complete text is the same as complete request, you get a green bordeer
  if (textEntered == originText) {
    testWrapper.style.borderColor = "green";
    // using the global variable interval we set up, we can run the clearInterval method on it to stop it
    clearInterval(interval);
  } else {
    // if not completed, but all characters are correct so far, blue border
    if (textEntered == originTextMatch) {
      testWrapper.style.borderColor = "blue";
    }
    // if any characters do not match the text, orange border
    else {
      testWrapper.style.borderColor = "orange";
    }
  }
}

// Start the timer:
function start() {
  // get the length of text in the typing test and assign to variable
  let textEnteredLength = testArea.value.length;
  // if the keypress in the text box is the first, run an interval to run a timer once every thousands of a second
  // and call runTimer function
  // timerRunning keeps it from running a second time if its already started once
  if (textEnteredLength === 0 && !timerRunning) {
    timerRunning = true;
    interval = setInterval(runTimer, 10);
  }
  console.log(textEnteredLength);
}

// Reset everything:
function reset () {
  clearInterval(interval); // insure no interval is running in background
  interval = null; // just to make sure when we set up a new interval, there is no other running
  timer = [0, 0, 0, 0]; // set timer back to 0
  timeRunning = false;
  testArea.value = "";
  theTimer.innerHTML = '00:00:00';
  testWrapper.style.borderColor = 'grey';
}


// Event listeners for keyboard input and the reset button:
testArea.addEventListener('keypress', start, false); // keypress runs before the text is entered
testArea.addEventListener('keyup', spellCheck, false); // keyup runs after the text is entered
resetButton.addEventListener('click', reset, false);

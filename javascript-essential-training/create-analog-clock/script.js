const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// we're wrapping everything in a function to run once a second, so the clock updates
function runTheClock() {
  // now we need to get JS to get us the actual time
  var date = new Date();
  // console.log(date);

  // with the date, we can pull out the hours, minutes and seconds
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  // console.log("Hours: " + hr + " Minutes: " + min + " Second: " + sec);

  // we're creating variable to contain the degrees we want to change the arms
  let hrPosition = hr*(360/12) + (min*(360/60)/12); // the min part is so the hour hand moves every minute
  let minPosition = min*(360/60) + (sec*(360/60)/60); // the sec part is so the minute hand moves every second
  let secPosition = sec*(360/60);

  // now we need to apply these numbers as degrees in the inline styles for transform on each object
  HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
  MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
  SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}

// set the function to run once a second
var interval = setInterval(runTheClock, 1000);




// HTTP requests using XHR
// XHR stands XML HTTP Request, which was the format prevalent years ago
// XHR is build into browsers

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
};
xhttp.open('GET', 'https://www.mockapi.io/projects/5d718e625acf5e001473063d',
  true);
  xhttp.send();
  // to work with XHR we create a new instance of an XMLHttpRequest object
  // and we setup an event handler, onreadystatechange
  // we need to know how to work with status codes
  // because of this XHR is rarely used directly
  // its much easier to work with a library such as jQuery
  // 4 and 200 mean we got a successful response
  // to macke the call, we use xhttp.open
  // xhttp.send sends off the reqeust
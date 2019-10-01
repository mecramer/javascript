// Normally a forms submit button type of submit posts the data to the server
// if we want to intercept it to JS rather than being posted and have control go to our code
// we can then do some validation in our javascript code
// we can also format the data




let form = document.getElementById('user-form');
form.addEventListener('submit', event => {
  // prevent the browser from submitting the form
  event.preventDefault();
});
// we are listening on the form for the submit event
// when they submit, this function will execute
// here, we are simply stopping the form from
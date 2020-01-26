const H1 = document.querySelector('h1');

function reveal(e, current) {
  // prevent a link from following its href
  e.preventDefault();
  // ternary operator to toggle the text
  current.innerText == 'Cancer Screening and Early Detection Research' ? H1.innerText = 'Ooops!' : H1.innerText = 'Cancer Screening and Early Detection Research';
}

// problem, we can't pass arguments to thee reveal function
// we can.. but it requires a bit of finagling
// if we added parenthesis after the call to reveal, the function would run when the script is read, not when the click happens
// the anonymous function below seems to work fine, so what if we wrap it in an anonymous function 
// notice the default e has to be passed through the anonymous function and the reveal function
H1.addEventListener('click', function(e) {
  // this refers to the link object that was just clicked
  reveal(e, this);
}, 
false);
H1.addEventListener('click', function() {
  console.log('The button was clicked');},
  false);
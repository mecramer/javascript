// here we are going to use an event handler to toggle the class hide from CTA to ALERT
// everytime CTA is clicked

const H1 = document.querySelector('.cta a');
const ALERT = document.querySelector('#booking-alert');

// this is done in case JS it turned off
H1.classList.remove('hide');
ALERT.classList.add('hide');

// toggle which item gets hidden on each click of .cta a
function reveal(e) {
  // preventDefault keeps the link from following its path
  // e is the event object
  e.preventDefault();
  H1.classList.toggle('hide');
  ALERT.classList.toggle('hide');
}

// we do not put parenthesis after reveal because we do not want it to run when the script originally loads
H1.onclick = reveal;




// here i'm using cancer.gov homepage to turn the main logo off and on when hitting the About Cancer button
const about3 = document.querySelector('#accessible-megamenu-1579649381210-1');
const logo3 = document.querySelector('.nci-logo-pages');

function reveal(e) {
  e.preventDefault();
  logo3.classList.toggle('hidden');
}


about3.onclick = reveal;

// note that onclick is old method of doing event listeners and has problems with multiple events
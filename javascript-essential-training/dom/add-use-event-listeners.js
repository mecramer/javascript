// The event listener is a more modern way to do events and can allow multiple things to listen to one event

const DELIGHTER = document.querySelector('.floating-delighter a');
const LOGO = document.querySelector('.nci-logo-pages');


// toggle logo on and off by toggling the class
function reveal(e) {
  // preventDefault keeps the link from following its path
  // e is the event object
  e.preventDefault();
  LOGO.classList.toggle('hidden');
}

// now we have two event listeners on the same button
// the last parameter (true, false) is only relevant when multiple events pile up, see bubbling and capturing
DELIGHTER.addEventListener('click', reveal, false);
DELIGHTER.addEventListener('click', function(){ console.log('The button was clicked');}, false);





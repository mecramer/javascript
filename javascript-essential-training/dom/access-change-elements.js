// each html element is its own node and hence, object with its own properties and methods
// see https://developer.mozilla.org/en-US/docs/Web/API/Element

document.querySelector('.main-title').innerHTML;
// this would give the html of the first element that has the main-title class

document.querySelector('.main-title').outerHTML;
// this would also add the outer html for the elment


// if you wanted to change the text
document.querySelector('.main-title').innerHTML = "Hey, I changed it";

// change the id of a selected item
document.querySelector('#showcase').id = "slideshow";

// get a list of class names for an element
document.querySelector('.masthead').className;
// returns somethign like "masthead clear"

// get a list of class names for an element in an array like list
document.querySelector('.masthead').classList;
// returns somethign like "masthead, clear"

// if we wanted one item from that list, something like
document.querySelector('.masthead').classList[1];
// would give 'clear'
// this is read only, you can not do a classlist[1] = 'something' to change the value
// we have to use methods to change the value

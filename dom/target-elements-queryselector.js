// get element by its id
document.getElementById('some name');

// get element by its class name
document.getElementsByClassName('classname');
// returns html collections or nodes lists

// get eelement by tag name
document.getElementsByTagName('h1');

// but here are some more modern targeting methods
document.querySelector('a');
// returns the first occurrence of the match

document.querySelectorAll('a');
// returns all occurrences that match as a node list

document.querySelector('.menu .has-children a');
// would  find the first link under has children, which is under menu

// we can also do multiple queries at one
document.querySelectorAll('.menu li a, .socia-nav li a');
// this would find all occurrences that match either pattern as a node list

// you may still want to use the old method for forms
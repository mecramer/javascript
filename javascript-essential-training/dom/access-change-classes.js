// for read only elements, likee classList, we change them through methods

document.querySelector('masthead').classList
// returns something like ['masthead', 'clear']

// to add a class
document.querySelector('.masthead').classList.add('new-class');

// remove a class
document.querySelector('.masthead').classList.remove('new-class');

// if you want to toggle a class off and on
document.querySelector('.new-class').classList.toggle('masthead');

// if you want to see if a class exists
document.querySelector('.new-class').classList.contains('masthead');

// for more, see https://developer.mozilla.org/en-US/docs/Web/API/Element#Properties

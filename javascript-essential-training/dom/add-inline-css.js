// when using JS to modify styles, JS is added inline to an element

// to see what styles are used on an element
var blah = document.querySelector('.cta a').style;
// your are only getting styles set up inline

// you can set inline styles like this
document.querySelector('#nvcgSlSiteBanner').style.backgroundColor = 'green';
// note that css properties that have a dash in them turn to camel case in JavaScript

// if you want to add multiple styles at one
document.querySelector("#nvcgSlSiteBanner").style.cssText = "padding: 1em; margin: 2em";
// note that this overrides any inline styles already in place

// since the inline style is an attribute, we can also work with it using
// hasAttribute('style);
// getAttribute('style');
// setAttribute('style');
// removeAttribute('style');
document.querySelector("#nvcgSlSiteBanner").setAttribute("style", "padding: 2em; background-color: red");
// innerHTML and outerHTML can be used to add to the DOM, but its usually not the best way
// a better way is by breaking the DOM elements into their individual components and adding them to the DOM tree

// 1. Create the element
// 2. Create the text node that goes inside the element
// 3. Add the text node to the element
// 4. Add the elment to the DOM tree

// this makes for cleaner JavaScript and accidental disasters like breaking the HTML of the entire document

// to do this we need three new elements
// .createElement(); - to create the element
// .createTextNode(); - to create the text node
// .appendChild(); - to place one child node inside another

// in the following example, we want to add a figcatpion to a figure and move the alt tag text to the figcaption
// clear the alt attribute and add the figcaption to the end of the figure

// <figure class="featured-image">
//   <img src="images/testimonials/bluepebble.jpg" alt="Earthrise: a photograph">
// </figure>

// we'll start be setting up two constants, one for the figure and one for the image inside the figure
const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = document.querySelector("img");
// notice how FEATURED is used for nesting, instead of saying ".featured-image img"

// nex step is to get the alt value by using the getAttribute
let altText = THEIMAGE.getAttribute('alt');

// now we can create the figcaption element and assign to a variable
var captionElement = document.createElement('figcation');
// this creates a figcaption in memory, but does not place in the document

// then we create a text node to hold our alt text and assign to a variable
// and populate it with the alt text variable
var captionText = document.createTextNode(altText);

// and then we can append the caption text to the new figcaption
captionElement.appendChild(captionText);

// now we want to append the figcation to the figure
FEATURED.appendChild(captionElement);

// and finally, remove the alt text
THEIMAGE.setAttribute('alt',"");

// there is a new append metho that can replace the createTextNode and appendChilds, but its not universally supported
// and would need a polyfill
captionElement.append(altText);
// the attributes property is read only, just like classList
// with  the added complexity of often appearing in attribute/value pairs

// lets say we want a link to open in a new window
const CTAELEMENT = document.querySelector('#nvcgSlSiteBanner a');
// we're setting up as a constant because the element will never change
// now lets see what attributes we have
console.log(CTAELEMENT.attributes);
// we get a named map, NamedNodeMap {0: href, href: href, length: 1}
// with an array of all the attributes

// now to add the new window
// first  by checking if it exists and consoling it if it does
// then adding it if it doesn't through setAttribute
if (CTAELEMENT.hasAttribute('target')) {
  console.log(CTAELEMENT.getAttribute('target'));
} else {
  CTAELEMENT.setAttribute('target', '_blank');
}
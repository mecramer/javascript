// loops are often used to transverse arrays

var extLinks = document.querySelectorAll('a[href^="http"]');

// for loop to loop through the entire array of links
// this would find all external links and add a blank window attribute if not already set
for (var i = 0; i < extLinks.length; i++) {
  console.log(extLinks[i]);
  if ( !extLinks[i].hasAttribute("target")) {
    extLinks[i].setAttribute("target", "_blank");
  }
}
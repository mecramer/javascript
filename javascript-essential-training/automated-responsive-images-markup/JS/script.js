// * NOTE: This is not the best responsive images solution, its being used to show how JS can be used to
// progressively enhance websites

// first we will make some changes to the html, so the images are not downloaded unless JS is disabled
// this will prevent the browser from downloading multiplee images file for one image
// next, we'll find all the images on the page, loop through them one at a time, retreive the original image reference
// generate responsive image markup and inject the markup back into the page
// * the -800 images were loaded in the html to make sure users without JS get an image

// create an array that contains all the images on the page
const IMAGES = document.querySelectorAll('img');

// we're using SIZES to give information for how wide to make an image based on viewport size
// this object, has each of the different data types map to the size requirements for them
const SIZES = {
  showcase: '100vw', // showcase will also be 100% at any window size
  reason: '(max-width: 799px), 100vw, 372px', // this is a media query, 100vw at less than 800px, 372px otherwise
  feature: '(max-width: 799px), 100vw, 558px',
  story: '(max-width: 799px), 100vw, 670px'
};

// this is a function to loop through each image size and generate the correct URLs to the images
// it will take the names of the images (with the -800.jpg stripped off)
function makeSrcset(imgSrc) {
  let markup = [];
  let width = 400; // start  at the smallest size of the images

  // run a loop 5 times, one for each image size (400, 800, 1200, 1600, 2000)
  for ( let i = 0; i < 5; i++) {
    markup[i] = imgSrc + '-' + width + '.jpg ' + width + 'w';
    width += 400; // this will jump up for the next size
  }

  // we want to return markup, but use join to get a comma separate list from the array
  return markup.join();
}

// next, we create a loop to loop through the images
for ( let i = 0; i < IMAGES.length; i++) {
  let imgSrc = IMAGES[i].getAttribute('src');
  // we now want to strip off the tail end of it, ie "-800.jpg" part
  // this slice will strip off the last 8 characters
  imgSrc = imgSrc.slice(0, -8);
  // call a function to get thee srcset
  let srscet = makeSrcset(imgSrc);
  // we now want to set the srcset attribut to each image
  IMAGES[i].setAttribute('srcset', srscet);
  // console.log(srscet);

  // we also need the data typ information for each image
  let type = IMAGES[i].getAttribute('data-type');
  // console.log(type);

  let sizes = SIZES[type];
  // we now want to set the sizes attribute for each image
  IMAGES[i].setAttribute('sizes', sizes);
  // console.log(sizes);
}

// responsive images add two new attributes, the first one is scrset, which is a list of one or more strings 
// separated by commas
// indicating a set of possible image sources for use of the browser, each string is composed of a url and
// an optional width descriptor or pixel density descriptor
// second, is the size attribute, which is a list of one or more strings separated by commas indicating a set of source sizes
// each of these size will consist of a media condition (media query) and a source size value
// for this example, we are going to use the srcset
// see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img for more info
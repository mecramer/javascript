// query selectors are the most modern way to access the html document, but lots of code still uses these functions


// body of html
// <article id="article1">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p> Paragraph 2</p>
//  <p> Paragraph 3</p>
// </article>
var element = document.getElementById('article1');
console.log(element);
// result: <article...</article>, 
// all the HTML and content that is in the article1 id


// body of html
// <article id="article1">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p> Paragraph 2</p>
//  <p> Paragraph 3</p>
// </article>
var element = document.getElementsByTagName('p');
console.log(element);
// result: [p, p, p], 
// an array of all the p tags on the page


// body of html
// <article id="article1">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p class='special'> Paragraph 2</p>
//  <p class='special'> Paragraph 3</p>
// </article>
var elements = document.getElementsByClassName('special')
console.log(elements);
// result: [p.special, p.special], 
// an array of all the elements that have a class named special


// body of html
// <article id="article1" class='my-custom-class'>
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p> Paragraph 2</p>
//  <p> Paragraph 3</p>
// </article>
var a = document.getElementById('article1');
console.log(a.getAttribute('class'));
// result: my-custom-class, 
// it lists all the classes within article1


// body of html
// <article id="article1" class='my-custom-class'>
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p> Paragraph 2</p>
//  <p> Paragraph 3</p>
// </article>
var a = document.getElementById('article1');
a.setAttribute('class', 'dynamic-style');
console.log(a.getAttribute('class'));
// result: dynamic-style, 
// setAttribute replaced the class name and then getAttribute will list all the classes within article1


// body of html
// <article id="article1" class='my-custom-class'>
//  <h4>Hello!</h4>
//  <p> Paragraph 1</p>
// </article>
var a = document.getElementById('article1');
console.log(a.childNodes);
// result: [text, h4, text, p, text], 
// whitespace shows up as text nodes

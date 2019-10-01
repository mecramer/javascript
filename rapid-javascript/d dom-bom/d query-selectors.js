// see https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector for more detailed info


// body of html
// <article id="article1">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p class='special'> Paragraph 2</p>
//  <p class='special'> Paragraph 3</p>
// </article>
var element = document.querySelector('article');
console.log(element);
// result: <article... </article>
// this would return the first match of article tag


// body of html
// <article id="article1" class="my-custom-class">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p class='special'> Paragraph 2</p>
//  <p class='special'> Paragraph 3</p>
// </article>
var element = document.querySelector('#article1');
console.log(element);
// result: <article... </article>
// this is more specific as it wouldn't get other article html tags on the page


// body of html
// <article id="article1" class="my-custom-class">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p class='special'> Paragraph 2</p>
//  <p class='special'> Paragraph 3</p>
// </article>
var elements = document.querySelector('.special');
console.log(elements);
// result: <p class='special'> Paragraph 2</p>
// We only get back the first match


// body of html
// <article id="article1" class="my-custom-class">
// <h3>Title goes here</h3>
//  <p> Paragraph 1</p>
//  <p class='special'> Paragraph 2</p>
//  <p class='special'> Paragraph 3</p>
// </article>
var elements = document.querySelectorAll('.special');
console.log(elements);
// result: [p.special, p.special]
// querySelectorAll returns all matches, as an array
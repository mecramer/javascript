var ourRequest = new XMLHttpRequest();
// fetch json data at following url
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/pets-data.json');
ourRequest.onload = function() {
  // 200 is a successful status call to th data
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    // This is where we'll do something with the retrieved data
    var data = JSON.parse(ourRequest.responseText);
    // console.log(data);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

// helper function to calculate age
Handlebars.registerHelper('calculateAge', function(birthYear) {
  var age = new Date().getFullYear() - birthYear;
  if (age > 0) {
    return age + ' years old';
  } else {
    return 'Less than a year old';
  }
});

function createHTML(petsData) {
  // select our template code from the html file, its a string of text
  var rawTemplate = document.querySelector('#petsTemplate').innerHTML;
  // console.log('rawTemplate' + rawTemplate);
  // then use handlebars to create a function that creates a dynamic, flexible template from the string of text
  var  compiledTemplate = Handlebars.compile(rawTemplate);
  // console.log('compiledTemplate: ' + compiledTemplate);
  // then we populate it with the data, which is a JSON object
  var ourGeneratedHTML = compiledTemplate(petsData);

  var petsContainer = document.querySelector('#pets-container');
  // add the generatedHTML into the DOM
  petsContainer.innerHTML = ourGeneratedHTML;
}
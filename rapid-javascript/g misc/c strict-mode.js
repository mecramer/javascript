// generally, its better to write in strict mode




var actNow = function () {
  'use strict';
  newVar = 9;
};
// actNow();
// result: ReferenceError, newVar is not defined
// without use strict, newVar would be assigned as a global variable
// if you want strict to be applied everywhere, but it in the global area
// but if you put in a global area, you could run into problems with libraries that aren't built for strict




var actNow = function () {
  newVar = 9;
};
actNow();
// result: no error, newVar is added to the global scope




var actNow = function () {
  var newVar = 9;
  delete newVar;
};
actNow();
// result: no error
// delete removes from context, here its the context of the function




var actNow = function () {
  'use strict';
  var newVar = 9;
  delete newVar;
};
// actNow();
// result: SyntaxError, delete is an unqualified identifier in strict mode
// in strict mode, you can't get rid of a variable




var actNow = function () {
  var fn = function (a, a) {

  };
};
actNow();
// result: no error




var actNow = function () {
  'use strict';
  var fn = function (a, a) {

  };
};
actNow();
// result: syntaxError, duplicate parameter name not allowed




var obj = {};
with (obj) {

}
// result: no error




'use strict';
var obj = {};
with (obj) {

}
// result: SyntaxError, strict mode may not include the with statement
// one of the problems with the with statement is by putting in a type, you could be creating global variables

// for more information, https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

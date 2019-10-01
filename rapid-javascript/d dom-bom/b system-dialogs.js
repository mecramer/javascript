// 3 key system dialogs for testing/debugging


// alert is used to show some text in a dismisable diaglog
alert('Hello');
// result: popup window saying Hello


if (confirm('Delete EVERYTHING?!')) {
  console.log('You asked for it!');
}
else {
  console.log('Maybe next time...');
}
// result: a dialog window will popup asking if you want to delete everything. If you hit ok, you will get "You asked for it"
// if you hit cancel, you get 'Maybe next time..'
// hitting the x in the window will also give 'Maybe next time..'


var result = prompt ('Your name?');
console.log(result);
// result: will console.log whatever the user types, null if the user doesn't enter anything
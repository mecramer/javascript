// defineProperty allows controls of a lot of object properties, such as flags (read only...)

// we set an empty object, than we use the defineProperty function
// first argument, defines the object, second argument is the name of the propert, 
// third argument is a configuration object, in this case we are passing the field of value (there are other fields)
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done!'
});
console.log(task.text);
// result: Get this job done!


// we wouldn't go to all that trouble just to set the value, but we can do other things
// here we are allowing the value field to be editable and then editing it
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done!',
  writable: true
});
task.text = task.text + '... NOW!';
console.log(task.text);
// result: Get this job done!... NOW!


// enumerable is used in for in statements
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done!',
  enumerable: true
});
for (var f in task)
console.log(f);
// result: text


// enumerable is used in for in statements
var task = {};
Object.defineProperty(task, 'text', {
  value: 'Get this job done!',
  configurable: false
});
Object.defineProperty(task, 'text', {
  // value: 'Done!',
});
console.log(task.text);
// result: TypeError: Cannot redefine property: text


// getter function, we create a defineProperty on task called dueDate and define a getter function that returns
// this._dueDate from task
var task = {
  _dueDate: '7/15/19'
};
Object.defineProperty(task, 'dueDate', {
  get: function () {
    return this._dueDate;
  }
});
console.log(task.dueDate);
// result: 7/15/19


// we can have setter functions as well, we get the date and then use setter to change the date
var task = {
  _dueDate: '7/15/19'
};
Object.defineProperty(task, 'dueDate', {
  get: function () {
    return this._dueDate;
  },
  set: function (newValue) {
    this._dueDate = newValue;
  }
});
task.dueDate = '8/4/19';
console.log(task.dueDate);
// result: 8/4/19


// defineProperties can be used to define more than one property at a time
var task = {};
Object.defineProperties(task, {
  'text': {
    value: 'New Task'
  },
  'dueDate': {
    value: '7/7/19'
  }
});
console.log(task.text + ' Due: ' + task.dueDate);
// result: New Task Due: 7/7/19


// the getOwnPropertyDecriptor function lists all the information on what the object is
var task = {};
Object.defineProperties(task, {
  'text': {
    value: 'New Task'
  }
});
var descriptor = Object.getOwnPropertyDescriptor(task, 'text');
console.log(descriptor);
// result: { value: 'New Task', writable: false, enumerable: false, configurable: false }

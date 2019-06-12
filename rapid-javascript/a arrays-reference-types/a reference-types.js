// the space that is created for o contains a pointer that points to an unknown memory location where the object is stored.
// this is unlike a primitive value type that is stored directly in o's memory location.
var o = {
  name: 'Mark'
};

// the memory location for o2 will be created and filled with the same pointer that is located in o. So o and o2 are both pointers.
// that point to the same memory location with the object. These are reference types, they reference the same object.
var o2 = o;




// By changing 02.name, we are also changing o.name. they both will be Lanny.
o2.name = 'Lanny';




// common reference types are objects, arrays, dates, regexps, functions and primitives if they use wrappers

// here, updatedBlog inherits the name from blog
var blog = {
  name: 'Yankees'
};
var updatedBlog = blog;
console.log(updatedBlog.name);
// result: Yankees




// updatedBlog inherits name from blog, but then has it changed when blog.name is changed since they share the same reference
var blog = {
  name: 'Yankees'
};
var updatedBlog = blog;
blog.name = 'Orioles';
console.log(updatedBlog.name);
// result: Orioles




// updatedBlog inherits name from blog, but then when updatedBlog.name is changed, it changes blog.name as well
var blog = {
  name: 'Yankees'
};
var updatedBlog = blog;
updatedBlog.name = 'Orioles';
console.log(blog.name);
// result: Orioles




// passing a refence to a function is the same thing as passing a pointer. This is because the blog object got passed to the function
// functions can modify reference types
var blog = {
  name: 'Yankees'
};
function changeBlogName(localBlog) {
  localBlog.name = 'no name';
}
changeBlogName(blog);
console.log(blog.name);
// result: no name




// arrays are similar. changing a1s firs array item, also changes it in a2, since they both reference the same place
var a1 = [1, 2, 3];
var a2 = a1;
a1[0] = 99;
console.log(a2[0]);
// result: 99

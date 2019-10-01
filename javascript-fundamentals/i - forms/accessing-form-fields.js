let form = document.getElementById('user-form');

form.addEventListener('submit', event => {
  let user = form.elements['user'];
  let avatarFile = form.elements['avatar-file'];

  console.log(user.value, avatarFile.value);
  event.preventDefault();
});

// elements is a property giving access to each forms property
// we can then use the value property on those elements

// result: the values entered for name and avatar
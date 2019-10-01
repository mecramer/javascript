let form = document.getElementById("user-form");

form.addEventListener("submit", event => {
  let user = form.elements["user"];
  let userError = document.getElementById("user-error");
  if (!user.value) {
    userError.textContent = "Invalid entry";
    userError.style.color = "red";
    user.style.borderColor = "red";
    user.focus();
  }

  event.preventDefault();
});

// here we run some validation, does the user field have anything in it
// if not, we fill in the area next to it with red text, put a red border around the bad field and set the focus to it

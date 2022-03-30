const form = document.querySelector("form");
const userInput = document.querySelector(".user-name");
const passwordInput = document.querySelector(".password");
const confirmInput = document.querySelector(".confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = userInput.value;
  const password = passwordInput.value;
  const confirmation = confirmInput.value;

  if (password !== confirmation) {
    alert("Not Confirmation");
    return;
  }

  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  users.push({
    username: user,
    passwordUser: password,
    id: new Date(),
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Create account successfully!");
  userInput.value = "";
  passwordInput.value = "";
  confirmInput.value = "";
});

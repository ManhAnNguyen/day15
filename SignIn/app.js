const inputUserName = document.querySelector(".user-name");
const inputPassword = document.querySelector(".password");
const form = document.querySelector("form");
const eye = document.querySelector(".eye");
const showPassword = document.querySelector(".show-password");
const hiddenPassword = document.querySelector(".hidden-password");

showPassword.addEventListener("click", () => {
  inputPassword.type = "text";
  eye.classList.add("show-eye-hidden");
});

hiddenPassword.addEventListener("click", () => {
  inputPassword.type = "password";
  eye.classList.remove("show-eye-hidden");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userName = inputUserName.value;
  const password = inputPassword.value;
  const users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  const currentUser = {
    username: userName,
    passwordUser: password,
  };

  const findUser = users.find(
    (u) =>
      u.username === currentUser.username &&
      u.passwordUser === currentUser.passwordUser
  );

  console.log("findUser", findUser);

  if (findUser) {
    localStorage.setItem("currentUser", JSON.stringify(findUser));
    window.location.href = "../Home/index.html";
  } else {
    alert("Incorrect information");
  }
});

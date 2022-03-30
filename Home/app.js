const greetTag = document.querySelector(".greet");
const userNameInput = document.querySelector(".username");
const passWordInput = document.querySelector(".password");
const form = document.querySelector("form");

window.addEventListener("load", () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  let users = localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : [];

  greetTag.innerHTML = `Hello ${currentUser.username}`;
  userNameInput.value = currentUser.username;
  passWordInput.value = currentUser.passwordUser;

  form.addEventListener("click", (e) => {
    e.preventDefault();
    const valueUserInput = userNameInput.value;
    const valuePasswordInput = passWordInput.value;

    const updateUser = {
      username: valueUserInput,
      passwordUser: valuePasswordInput,
      id: new Date(),
    };
    const newUsers = users.map((u) =>
      u.id === currentUser.id ? updateUser : u
    );
    localStorage.setItem("users", JSON.stringify(newUsers));
  });
});

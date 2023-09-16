document.getElementById("login").addEventListener("click", function () {
  const email = document.getElementById("email");
  const userEmail = email.value;
  const password = document.getElementById("password");
  const userPassword = password.value;
  console.log(userPassword);
  if (userEmail == "mokter7082@gmail.com" && userPassword == "123456") {
    window.location.href = "dashboard.html";
  }
});

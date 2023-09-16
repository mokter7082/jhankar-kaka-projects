document.getElementById("submit").addEventListener("click", function (event) {
  const emailField = document.getElementById("email");
  const userEmail = emailField.value;
  const passwordField = document.getElementById("password");
  const userPassword = passwordField.value;

  if (userEmail == "amar@gmail.com" && userPassword == "123") {
    window.location.href = "banking.html";
  }
});

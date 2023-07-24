console.log("js ok");

// dichiarazione delle variabili
let userEmail;
let accesso;
const myButtonPassword = document.getElementById("email-button");

// al momento gestisco solo km e eta
myButtonPassword.addEventListener("click", function () {
  userEmail = document.getElementById("user-email").value;

  console.log(userEmail);

  document.getElementById("email-output").innerHTML = userEmail;
});

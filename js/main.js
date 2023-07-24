console.log("js ok");

// dichiarazione delle variabili
let userEmail;
let accesso;
const myButtonPassword = document.getElementById("email-button");

// ecco la lista di email:
const email = [
  "ciccio.pasticcio@gmail.com",
  "paperino@gmail.com",
  "prova",
  "pluto@gmail.com",
  "mammamia@gmail.com",
];

// al momento gestisco solo km e eta
myButtonPassword.addEventListener("click", function () {
  accesso = "ko";
  userEmail = document.getElementById("user-email").value;
  console.log(userEmail);

  for (let i = 0; i < email.length && accesso == "ko"; i++) {
    if (userEmail == email[i]) {
      console.log("id dell'array " + i);
      accesso = "ok";
    }
  }

  //verifica di accesso
  if (accesso == "ok") {
    document.getElementById("email-output").classList.add("border-green");
    document.getElementById("email-output").innerHTML = userEmail;
  } else {
    document.getElementById("email-output").classList.add("border-red");
    document.getElementById("email-output").innerHTML =
      "accesso non autorizzato";
  }
});

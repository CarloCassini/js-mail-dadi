console.log("js ok");

// ESERCIZIO DELLE EMAIL
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

// ESERCISIO DEI DADI:

let numUser;
let numComp;
const tiraDadi = document.getElementById("dice-button");

tiraDadi.addEventListener("click", function () {
  numUser = Math.floor(Math.random() * 6) + 1;
  numComp = Math.floor(Math.random() * 6) + 1;

  document.getElementById("valore-dado-user").innerHTML = numUser;
  document.getElementById("valore-dado-computer").innerHTML = numComp;

  if (numUser > numComp) {
    document.getElementById("verdetto").innerHTML = "HAI VINTO!";
    // document.getElementById("verdetto").classList.add("border-green");
  } else if (numUser < numComp) {
    document.getElementById("verdetto").innerHTML = "HAI PERSO :(";
    // document.getElementById("verdetto").classList.add("border-red");
  } else {
    document.getElementById("verdetto").innerHTML = "Pari! ritenta!";
  }
});

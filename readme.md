# consegna

## Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

## Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

## Svolgimento Mail

- creo un array con una lista di e-mail che permettono l'accesso

- chiedo all'utente la sua email

- valorizzo la variabile "accesso" con "ko"

- confronto la mail fornita dall'utente con ognuna di quelle della lista fino a che la variabile "accesso" è "ko" oppure non sono stati verificati tutti gli elementi

- **se** la mail è presente nella lista valorizzo una variabile "accesso" con il valore "ok"

- **se** "accesso" == "ko" scrivo il messaggio "benvenuto"
- **altrimenti** scrivo il messaggio "utente non autorizzato"

## Svolgimento dadi

- credo due variabili vuote "numUser" "numComp"
- genero per ogni variabile un numero casuale tra 1 e 6 e lo assegno.

-verifico le variabili come segue

- **se** numUser == numComp
  - scrivo a video "parità"
- **altrimenti se** numUser > numComp
  - scrivo a video "hai vinto!"
- **altrimenti**
  - scrivo a video "hai perso!"

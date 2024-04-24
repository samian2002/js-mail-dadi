//Lista mail
const mailAutorizzate = ["mario@rossi.it", "giuseppe@verdi.it", "lucia@banfi.it"];
//Richiesta mail
let utenteMail = prompt("Inserisci la tua mail");
//Controllo mail
let = messaggio = "Accesso Negato"
for (let i = 0; i < mailAutorizzate.length; i++) {
    //controlla se la mail utente e autorizzata
    if (mailAutorizzate[i] === utenteMail) {
        messaggio = "Utente Autorizzato"
        break
    }
}


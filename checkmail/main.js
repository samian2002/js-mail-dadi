//Iniziallizzo array con le mail degli invitati
const mailInvitati = [
    'mario.rosso@gmail.com',
    'valentina.gialli@libero.com',
    'marco.polo@gmail.com',
    'matteo.cattaneo@gmail.com',
    'mario.balotelli@libero.it',
    'clarissa.verdi@gmail.com',
    'velentina.bianchi@yahoo.it'
];

//Chiedo all'utente di inserire la sua mail
const mailUtente = prompt('Inserisci la tua mail');

/*
//Iniziallizzo una variabile booleana per verificare se la mail è presente nell'array
let mailPresente = false;
//Utilizzo un ciclo for per scorrere l'array e verificare se la mail è presente
for (let i = 0; i < mailInvitati.length; i++) {
    if (mailUtente === mailInvitati[i]) {
        mailPresente = true;
    }
}
//Stampo un messaggio all'utente in base alla presenza o meno della sua mail nell'array
if (mailPresente) {
    alert('La tua mail è presente nella lista degli invitati');
} else {
    alert('La tua mail non è presente nella lista degli invitati');
}
*/

//Utilizzo il metodo includes per verificare se la mail è presente nell'array
if (mailInvitati.includes(mailUtente)) {
    alert('La tua mail è presente nella lista degli invitati');
} else {
    alert('La tua mail non è presente nella lista degli invitati');
}
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
//Iniziallizzo una variabile booleana per verificare se la mail è presente nell'array
let mailPresente = false;
//Utilizzo un ciclo for per scorrere l'array e verificare se la mail è presente
for (let i = 0; i < mailInvitati.length; i++) {
    if (mailUtente === mailInvitati[i]) {
        mailPresente = true;
    }
}
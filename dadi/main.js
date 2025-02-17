//Genero il numero casuale per l'utente
const userNumber = Math.floor(Math.random() * 6) + 1;
//Genere un numero casuale per il pc
const pcNumber = Math.floor(Math.random() * 6) + 1;
//Stampo i numeri generati
console.log('Numero utente: ' + userNumber);
console.log('Numero pc: ' + pcNumber);
//Confronto i risultati per stabilire chi è il vincitore
if (userNumber > pcNumber) {
    alert('Hai vinto!');
} else if (userNumber < pcNumber) {
    alert('Hai perso!');
} else {
    alert('Pareggio!');
}
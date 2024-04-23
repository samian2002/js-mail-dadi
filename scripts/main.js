function dado() {
    // Genera un numero casuale tra 1 e 6
    const dado = Math.floor(Math.random() * 6) + 1;
    // Determina il vincitore
    let winner;
    if (dado <= 3) {
      winner = 'Player';
    } else { 
      winner = 'Computer';
    }
    // Mostra il risultato
    const resultElement = document.getElementById('result');
    resultElement.textContent = 'Il numero ottenuto lanciando il dado è ' + dado + '.';

    // Mostra il vincitore
    resultElement.textContent += ' Quindi il vincitore è: ' + winner + '!';
}

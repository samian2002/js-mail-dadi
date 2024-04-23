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

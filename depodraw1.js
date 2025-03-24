let balance = parseFloat(localStorage.getItem('balance')) || 0;

function initiateDeposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount == 1000) {
        // Show confirmation page
        document.querySelector('.container').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block';
    } else {
        alert('Le montant doit être de 1000.');
    }
}

function confirmDeposit() {
    const amount = parseFloat(document.getElementById('amount').value);
    const transactionImage = document.getElementById('transactionImage').files[0];

    if (transactionImage) {
        balance += amount;
        localStorage.setItem('balance', balance);
        updateBalance();
        // Hide confirmation page
        document.getElementById('confirmation').style.display = 'none';
        document.querySelector('.container').style.display = 'block';
        alert('Dépôt confirmé.');
    } else {
        alert('Veuillez insérer la capture du message de la transaction.');
    }
}

function copyCode(code) {
    navigator.clipboard.writeText(code).then(() => {
        alert('Numéro copié: ' + code);
    });
}

function jours() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount >= 0) {
        alert('les retraits seront disponibles dans 20 jours apres le premier depot ');
}
}
function withdraw() {
    const amount = parseFloat(document.getElementById('amount').value);
    if (amount == 1000) {
        if (amount <= balance) {
            balance -= amount;
            localStorage.setItem('balance', balance);
            updateBalance();
        } else {
            alert('Solde insuffisant.');
        }
    } else {
        alert('Le montant doit être de 1000.');
    }
}

function updateBalance() {
    document.getElementById('balance').textContent = `Solde: ${balance} FCFA`;
}

// Mettre à jour le solde affiché au chargement de la page
updateBalance();
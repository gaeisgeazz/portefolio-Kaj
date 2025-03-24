let balance = 0;
const button = document.getElementById('bonusButton');
const timer = document.getElementById('timer');
const balanceElement = document.getElementById('balance');

// Load saved data
window.onload = function() {
    const savedBalance = localStorage.getItem('balance');
    const lastClickTime = localStorage.getItem('lastClickTime');
    
    if (savedBalance) {
        balance = parseFloat(savedBalance);
        updateBalance();
    }
    
    if (lastClickTime) {
        const timePassed = Date.now() - parseInt(lastClickTime, 10);
        if (timePassed < 86400000) {
            disableButton((86400000 - timePassed) / 1000);
        }
    }
};

function increaseBalance() {
    const lastClickTime = localStorage.getItem('lastClickTime');
    if (!lastClickTime || (Date.now() - parseInt(lastClickTime, 10)) >= 86400000) {
        balance += balance * 0.1;
        balance = Math.round(balance * 100) / 100; // Round to 2 decimal places
        updateBalance();
        localStorage.setItem('balance', balance);
        localStorage.setItem('lastClickTime', Date.now());
        disableButton(86400);
    }
}

function disableButton(seconds) {
    button.disabled = true;
    timer.style.display = 'block';
    updateTimer(seconds);
}

function updateTimer(seconds) {
    if (seconds > 0) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = Math.floor(seconds % 60);
        timer.textContent = `Bouton réactivé dans ${hours}h ${minutes}m ${secs}s`;
        setTimeout(() => updateTimer(seconds - 1), 1000);
    } else {
        button.disabled = false;
        timer.style.display = 'none';
    }
}

function updateBalance() {
    balanceElement.textContent = `Solde: ${balance} FCFA`;
}

// Reset after 20 days
setInterval(() => {
    localStorage.removeItem('balance');
    localStorage.removeItem('lastClickTime');
    balance = 0;
    updateBalance();
}, 1728000000); // 20 days in milliseconds
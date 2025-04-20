// Toggle Dark/Light Mode
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = '🌞';
    } else {
        toggleButton.textContent = '🌙';
    }
});

// Skills Pop-up Details
document.getElementById('skill1').addEventListener('click', () => {
    alert('Details about Financial Analysis...');
});

document.getElementById('skill2').addEventListener('click', () => {
    alert('Details about Leadership...');
});

// Form validation (Basic)
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const inputs = document.querySelectorAll('input, textarea');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value) {
            input.style.borderColor = 'red';
            valid = false;
        } else {
            input.style.borderColor = '';
        }
    });

    if (valid) {
        alert('Message sent!');
    } else {
        alert('Please fill out all fields.');
    }
});

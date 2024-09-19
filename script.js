// script.js
function checkPasswordStrength() {
    const password = document.getElementById('password').value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');

    let strength = 0;

    // Check length
    if (password.length >= 8) strength++;
    // Check if contains lowercase letters
    if (/[a-z]/.test(password)) strength++;
    // Check if contains uppercase letters
    if (/[A-Z]/.test(password)) strength++;
    // Check if contains numbers
    if (/[0-9]/.test(password)) strength++;
    // Check if contains special characters
    if (/[!@#\$%\^\&*\)\(+=._-]/.test(password)) strength++;

    // Update the strength bar
    switch (strength) {
        case 0:
            strengthBar.style.width = '0%';
            strengthBar.style.backgroundColor = 'red';
            strengthText.textContent = 'Enter a password to check its strength';
            break;
        case 1:
            strengthBar.style.width = '20%';
            strengthBar.style.backgroundColor = 'red';
            strengthText.textContent = 'Very Weak';
            break;
        case 2:
            strengthBar.style.width = '40%';
            strengthBar.style.backgroundColor = 'orange';
            strengthText.textContent = 'Weak';
            break;
        case 3:
            strengthBar.style.width = '60%';
            strengthBar.style.backgroundColor = 'yellow';
            strengthText.textContent = 'Medium';
            break;
        case 4:
            strengthBar.style.width = '80%';
            strengthBar.style.backgroundColor = 'lightgreen';
            strengthText.textContent = 'Strong';
            break;
        case 5:
            strengthBar.style.width = '100%';
            strengthBar.style.backgroundColor = 'green';
            strengthText.textContent = 'Very Strong';
            break;
    }
}

document.getElementById('nextBtn').onclick = function() {

    var emailInput = document.getElementById('email');
    var errorSpan = document.getElementById('email-error');
    if (!emailInput.checkValidity()) {
        errorSpan.style.display = '';
        errorSpan.textContent = 'Error: Invalid email address';
    } else {
        errorSpan.style.display = 'none';
    }
};
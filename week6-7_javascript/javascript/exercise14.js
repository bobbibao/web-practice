function isValidEmail(email) {
    regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regexp.test(email);
}

btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    let email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        alert('Invalid email');
        return;
    }
    alert('Valid email');
})

function isCreditCard(creditCard) {
    cardNum = creditCard.replace(/-/g, '');
    regexp = /^\d{16}$/
    if(!regexp.test(cardNum)){
        return false;
    }
    return true;
}

btn  = document.getElementById('btn');
btn.addEventListener('click', () => {
    let creditCard = document.getElementById('creditCard');
    if(!isCreditCard(creditCard.value)){
        alert('Invalid credit card number');
        return;
    }
    alert('Valid credit card number');
})
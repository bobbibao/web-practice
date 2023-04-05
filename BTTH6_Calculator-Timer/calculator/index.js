const input = document.getElementById('input');

function addInput(value) {
    input.value += value;
    input.innerHTML += input.value;
}

function calculate() {
    try {
        input.value = eval(input.value);
    } catch (e) {
        alert(e.message);
    }
}
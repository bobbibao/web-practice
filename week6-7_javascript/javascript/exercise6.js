let input = document.getElementById("input-field");

function addInput(value) {
  input.value += value;
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (e) {
    input.value = "Error";
  }
}

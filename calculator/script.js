// const num1 = BigInt(prompt())
// console.log(num1);
// const num2 = BigInt(prompt())
// console.log(num2)
// const multiplication = BigInt(num1 * num2);
// console.log(multiplication)
// alert(multiplication);
// console.log(multiplication);

const displayINput = document.getElementById("display");

function dispalyInpute(value) {
  displayINput.value += value;
}

function CleardispalyInpute(value) {
  displayINput.value = "";
}

function calculate() {
  try {
    displayINput.value = eval(displayINput.value);
  } catch {
    displayINput.value = "Error";
  }
}

function backspace() {
  displayINput.value = displayINput.value.slice(0, -1);
}

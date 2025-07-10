//var kg = pounds * 0.453592;

function calculate() {
  const inputValue = document.querySelector(".Inpute_section");
  let screenValue = inputValue.value;
  console.log(screenValue);

  const button_section = document.querySelector(".calculate_section");
  let button_section1 = button_section.value;
  console.log(button_section1);

  button_section.addEventListener("click", calculate);


  const calValue = screenValue * 0.1;
  console.log(calValue);

  let peramiterValue = document.querySelector(".final_kg_calculated_value");
  peramiterValue.textContent = `weight cm = ${calValue}`;
}

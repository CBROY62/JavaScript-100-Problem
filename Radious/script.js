// // 1. Log calculation from a fixed value
// const rad = 70;
// const finalradius = rad / (2 * 3.14159);
// console.log(finalradius);

// // 2. Prompt user and alert calculated radius
// const radiusInput = prompt("Enter the circumference to calculate radius:");
// const calculatedRadius = radiusInput / (2 * 3.14159);
// alert("Calculated radius is: " + calculatedRadius);

// // 3. Show result in the UI using DOM
// const select = document.getElementById('hed');
// select.innerHTML = `${calculatedRadius}`;


  //final value calculating //

  

  function submitFunction() {
  // Access the input field
  const inputsection = document.getElementsByClassName('inpute_secction')[0];

  // Get the value from the input
  const innerValueGet = inputsection.value;
  console.log(innerValueGet);


  const radious_value = innerValueGet/(2*3.14);

  // Access the heading and set its textContent
  const heading_secction = document.getElementsByClassName('First_heading')[0];
  heading_secction.textContent = ` Calculating value ${radious_value}`;

  console.log(heading_secction);
}


 
 
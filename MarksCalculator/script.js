function MarksCalculator() {
         //first section
    const firstInput = document.getElementsByClassName('first_input_section')[0];
    const firstSectio = firstInput.value;
     // change string to number //
    const first1 = Number(firstSectio);
    console.log(firstSectio);

    const first_heading_section = document.getElementsByClassName('first_heading_section')[0];
     first_heading_section.textContent = ` Hindi Marks: ${firstSectio}`
     console.log(first_heading_section);

        ///second section//
     const secondInput = document.getElementsByClassName('second_input_section')[0];
     const secondSection = secondInput.value;
      // change string to number //
      const second1 = Number(secondSection);
     console.log(secondSection)

     const second_heading_section = document.getElementsByClassName('second_heading_section')[0];
     second_heading_section.textContent = ` English Marks: ${secondSection}`
     console.log(second_heading_section);

     // third section //
      const thirdInput = document.getElementsByClassName('third_input_section')[0];
     const thirdSection = thirdInput.value;
   // change string to number //
      const third1 = Number(thirdSection);
     console.log(thirdSection)

     const third_heading_section = document.getElementsByClassName('third_heading_section')[0];
     third_heading_section.textContent = ` Maths Marks: ${thirdSection}`
     console.log(second_heading_section);

     //fourth section//

     const fourth_section = document.getElementsByClassName('fourth_input_section')[0];
     const fourth_section_value = fourth_section.value;
      // change string to number //
      const fourth1 = Number(fourth_section_value);
     console.log(fourth_section_value)

     const fourth_heading_section = document.getElementsByClassName('fourth_heading_section')[0];
     fourth_heading_section.textContent = ` Physics Marks: ${fourth_section_value}`
     console.log(fourth_heading_section);


      //five section//

     const five_section = document.getElementsByClassName('five_input_section')[0];
     const five_section_value = five_section.value;
      // change string to number //
      const five1 = Number(five_section_value);
     console.log(five_section_value)

     const five_heading_section = document.getElementsByClassName('five_heading_section')[0];
     five_heading_section.textContent = ` Chemestry Marks: ${five_section_value}`
     console.log(five_heading_section);

   // logic created division ,total marks , percentage//

   // Calculate total marks
const totalMarks = first1 + second1 + third1 + fourth1 + five1;
console.log(totalMarks);

const totalmr = document.getElementsByClassName('totalMarks1')[0];
totalmr.textContent = `TotalMarks: ${totalMarks} `

// Calculate percentage
const totalPercentage = (totalMarks / 500) * 100;
console.log(totalPercentage);

const totalprecentage = document.getElementsByClassName('Percentage1')[0];
totalprecentage.textContent = `Percentage: ${totalPercentage}`

// Get the element (only first element with class "Percentage")
const percentageValue = document.getElementsByClassName('Division')[0];
// OR: use querySelector('.Percentage');

// Determine division
if (totalPercentage >= 80) {
  percentageValue.textContent = "You are  Top Division";
} else if (totalPercentage >= 60) {
  percentageValue.textContent = "You are first Division";
} else if (totalPercentage >= 45) {
  percentageValue.textContent = "You are Second Division";
} else if (totalPercentage >= 30) {
  percentageValue.textContent = "You are Third Division";
} else {
  percentageValue.textContent = "You have Failed";
}

    
}
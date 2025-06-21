function adddataOnhead() {
    const inputsection1 = document.getElementsByClassName('inputsection1')[0];
    const textInputSection = inputsection1.value;
    console.log(textInputSection);

    const emailInputSection = document.getElementsByClassName('inputsection2')[0];
    const emailtextSection = emailInputSection.value;
    console.log(emailtextSection);

    //  Create new elements for each entry///
    const namePara = document.createElement('p');
    namePara.textContent = `Name: ${textInputSection}`;

    const emailPara = document.createElement('p');
    emailPara.textContent = `Email: ${emailtextSection}`;

    // Append the new entries to their respective sections
    const firstperagraphSection = document.getElementsByClassName('NameSection')[0];
    firstperagraphSection.appendChild(namePara);

    const firstemailSection = document.getElementsByClassName('emailSection')[0];
    firstemailSection.appendChild(emailPara);
}


const editSection = ()=>{

    

}

const saveSection = ()=>{

    

}

const deleteSection = ()=>{
    const firstemailSection = document.getElementsByClassName('emailSection')[0];
    firstemailSection.textContent = ``

    const firstperagraphSection = document.getElementsByClassName('NameSection')[0];
    firstperagraphSection.textContent = ``

}
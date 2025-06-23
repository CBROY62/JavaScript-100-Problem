function adddataOnhead2() {
    const firstInputSection = document.getElementsByClassName('inpute1')[0];
    const firstInputSection1 = firstInputSection.value.trim();

    const sectionInputSection = document.getElementsByClassName('inpute2')[0];
    const sectionInputSection1 = sectionInputSection.value.trim();

    const DevSection1 = document.createElement('div');
    DevSection1.className = "divsection";

    const newDevSection1 = document.createElement('p');
    newDevSection1.textContent = `Name:${firstInputSection1}`;

    const newDevSection2 = document.createElement('p');
    newDevSection2.textContent = `Number: ${sectionInputSection1}`;

    const newbtnSection = document.createElement('button');
    newbtnSection.textContent = "Edit";

    const newbtnSection2 = document.createElement('button');
    newbtnSection2.textContent = "Save";

    const newbtnSection3 = document.createElement('button');
    newbtnSection3.textContent = "Delete";


      // this is a button section function //
    newbtnSection3.onclick = ()=>DevSection1.remove();
    newbtnSection.onclick = ()=>editSection(DevSection1,newDevSection1,newDevSection2,newbtnSection2,newbtnSection)
    newbtnSection2.onclick = ()=>saveSection(DevSection1,newDevSection1,newDevSection2,newbtnSection2,newbtnSection)

    DevSection1.appendChild(newDevSection1);
    DevSection1.appendChild(newDevSection2);
    DevSection1.appendChild(newbtnSection);
    DevSection1.appendChild(newbtnSection2);
    DevSection1.appendChild(newbtnSection3);

    const addvalue =  document.querySelector(".NewComponets").appendChild(DevSection1)

    console.log(`Added Item ${addvalue}`);




      // this is a edit section function //
    function editSection( replace , firstInputSection1,sectionInputSection1) {

        const firstINputesection1 = firstInputSection1.textContent.replace("Name:" , '').trim();
        const firstINputesection2 = sectionInputSection1.textContent.replace("Number:" , '').trim();

        const namepara1 = document.createElement('input');
        namepara1.type = "name"
        namepara1.value = firstINputesection1

        const emaipara1 = document.createElement('input');
        emaipara1.type = "email"
        emaipara1.value = firstINputesection2


        newbtnSection.style.display = 'none';
        newbtnSection2.style.display = 'inline';

        replace.replaceChild(namepara1 , firstInputSection1);
        replace.replaceChild(emaipara1  , sectionInputSection1 );



        newbtnSection2._inputs = {namepara1 , emaipara1}
    }


    function saveSection(replace, dummy1, dummy2, saveBtn, editBtn) {
      
    const { namepara1, emaipara1 } = saveBtn._inputs;

    if (!replace.contains(namepara1) || !replace.contains(emaipara1)) {
        console.error("One of the inputs is not a child of replace element.");
        return;
    }

    const name = namepara1.value.trim();
    const number = emaipara1.value.trim();

    const namePara = document.createElement('p');
    namePara.textContent = `Name: ${name}`;

    const numberPara = document.createElement('p');
    numberPara.textContent = `Number: ${number}`;

    replace.replaceChild(namePara, namepara1);
    replace.replaceChild(numberPara, emaipara1);

    editBtn.style.display = 'inline';
    saveBtn.style.display = 'none';

    // Reconnect edit functionality with updated paragraph elements
    editBtn.onclick = () =>
        editSection(replace, namePara, numberPara);
}

}
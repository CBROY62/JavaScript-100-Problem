function adddataOnhead() {
    const inputName = document.getElementsByClassName('inputsection1')[0];
    const nameValue = inputName.value;

    const inputEmail = document.getElementsByClassName('inputsection2')[0];
    const emailValue = inputEmail.value;

    const inputPhone = document.getElementsByClassName('inputsection3')[0];
    const phoneValue = inputPhone.value;

    if (!nameValue || !emailValue || !phoneValue) return;

    const entryWrapper = document.createElement('div');
    entryWrapper.className = 'entry';

    const namePara = document.createElement('p');
    namePara.textContent = `Name: ${nameValue}`;

    const emailPara = document.createElement('p');
    emailPara.textContent = `Email: ${emailValue}`;

    const phonePara = document.createElement('p');
    phonePara.textContent = `Phone: ${phoneValue}`;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';

    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.style.display = 'none';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => entryWrapper.remove();

    editBtn.onclick = () => editSection(entryWrapper, namePara, emailPara, phonePara, editBtn, saveBtn);
    saveBtn.onclick = () => saveSection(entryWrapper, namePara, emailPara, phonePara, editBtn, saveBtn);

    entryWrapper.appendChild(namePara);
    entryWrapper.appendChild(emailPara);
    entryWrapper.appendChild(phonePara);
    entryWrapper.appendChild(editBtn);
    entryWrapper.appendChild(saveBtn);
    entryWrapper.appendChild(deleteBtn);

    const nameSection = document.getElementsByClassName('NameSection')[0];
    nameSection.appendChild(entryWrapper);

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
}

function editSection(wrapper, namePara, emailPara, phonePara, editBtn, saveBtn) {
    const name = namePara.textContent.replace('Name: ', '');
    const email = emailPara.textContent.replace('Email: ', '');
    const phone = phonePara.textContent.replace('Phone: ', '');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.value = name;

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.value = email;

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.value = phone;

    wrapper.replaceChild(nameInput, namePara);
    wrapper.replaceChild(emailInput, emailPara);
    wrapper.replaceChild(phoneInput, phonePara);

    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline';

    // Store new inputs temporarily in the button to access in save
    saveBtn.dataset.inputs = JSON.stringify({ nameInput: nameInput, emailInput: emailInput, phoneInput: phoneInput });
    saveBtn._inputs = { nameInput, emailInput, phoneInput };
}

function saveSection(wrapper, nameInput, emailInput, phoneInput, editBtn, saveBtn) {
    // This handles both the direct call and editSection-stored values
    if (saveBtn._inputs) {
        nameInput = saveBtn._inputs.nameInput;
        emailInput = saveBtn._inputs.emailInput;
        phoneInput = saveBtn._inputs.phoneInput;
    }

    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;

    const namePara = document.createElement('p');
    namePara.textContent = `Name: ${name}`;

    const emailPara = document.createElement('p');
    emailPara.textContent = `Email: ${email}`;

    const phonePara = document.createElement('p');
    phonePara.textContent = `Phone: ${phone}`;

    wrapper.replaceChild(namePara, nameInput);
    wrapper.replaceChild(emailPara, emailInput);
    wrapper.replaceChild(phonePara, phoneInput);

    editBtn.style.display = 'inline';
    saveBtn.style.display = 'none';

    // Reassign the new references
    editBtn.onclick = () => editSection(wrapper, namePara, emailPara, phonePara, editBtn, saveBtn);
}

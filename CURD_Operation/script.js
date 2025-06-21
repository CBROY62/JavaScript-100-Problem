  function adddataOnhead() {
      const inputName = document.querySelector('.inputsection1');
      const inputEmail = document.querySelector('.inputsection2');
      const inputPhone = document.querySelector('.inputsection3');

      const nameValue = inputName.value.trim();
      const emailValue = inputEmail.value.trim();
      const phoneValue = inputPhone.value.trim();

      if (!nameValue || !emailValue || !phoneValue) return;


        // one div section //
      const entryWrapper = document.createElement('div');
      entryWrapper.className = 'entry';

      const namePara = document.createElement('p');
      namePara.textContent = `Name: ${nameValue}`;

      const emailPara = document.createElement('p');
      emailPara.textContent = `Email: ${emailValue}`;

      const phonePara = document.createElement('p');
      phonePara.textContent = `Phone: ${phoneValue}`;




    //    stating section 



     ///Button section  

      const editBtn = document.createElement('button');
      editBtn.className = 'edit-btn';
      editBtn.textContent = 'Edit';

      const saveBtn = document.createElement('button');
      saveBtn.className = 'save-btn';
      saveBtn.textContent = 'Save';
      

      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'delete-btn';
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => entryWrapper.remove();

      editBtn.onclick = () => editSection(entryWrapper, namePara, emailPara, phonePara, editBtn, saveBtn);
      saveBtn.onclick = () => saveSection(entryWrapper, namePara, emailPara, phonePara, editBtn, saveBtn);




      /// all button section rape the one section od all button  //

      const btnGroup = document.createElement('div');
      btnGroup.className = 'btn-group';
      btnGroup.appendChild(editBtn);
      btnGroup.appendChild(saveBtn);
      btnGroup.appendChild(deleteBtn);


      // Rape the all button section in one div section including button //
      entryWrapper.appendChild(namePara);
      entryWrapper.appendChild(emailPara);
      entryWrapper.appendChild(phonePara);
      entryWrapper.appendChild(btnGroup);


      // show the all button section on the UI or frontend section///
      document.querySelector('.NameSection').appendChild(entryWrapper);

    /// this method use of empty the inpute secction menuvelly typing the data  //
      inputName.value = '';
      inputEmail.value = '';
      inputPhone.value = '';
    }



      /// this is eddit section after then eddit //

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

      saveBtn._inputs = { nameInput, emailInput, phoneInput };

    }
    

      //save Button  section //

    function saveSection(wrapper, nameInput, emailInput, phoneInput, editBtn, saveBtn) {
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

      editBtn.onclick = () => editSection(wrapper, namePara, emailPara, phonePara, editBtn, saveBtn);
    }



    window.onload = function () {
      const demoData = [
        { name: "Bholu Kumar", email: "chandrabhumar20@gmail.com", phone: "6205506507" },
        { name: "Chandra Bhushan Kumar", email: "chandrabhushankumar27080@gmail.com", phone: "06205506507" },
        { name: "Chandra", email: "chandrabhumar20@gmail.com", phone: "06205506507" }
      ];

      demoData.forEach(data => {
        document.querySelector('.inputsection1').value = data.name;
        document.querySelector('.inputsection2').value = data.email;
        document.querySelector('.inputsection3').value = data.phone;
        adddataOnhead();
      });
    };
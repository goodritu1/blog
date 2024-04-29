// //get the form elements

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');
console.log (usernameInput);

let formInfo = [];
submitButton.addEventListener('click', function (event) {
formInfo = JSON.parse(localStorage.getItem('formInfo')) || [];
    event.preventDefault();

    const saveFormInfo = {
        usernameInput: usernameInput.value,
        titleInput: titleInput.value,
        contentInput: contentInput.value,
    };

    
    formInfo.push(saveFormInfo);
    localStorage.setItem('formInfo', JSON.stringify(formInfo));
    console.log(formInfo)

    //   return saveFormInfo;
    clearForm();
    window.location="blog.html";
});



function clearForm() {
    usernameInput.value = "";
    titleInput.value = "";
    contentInput.value = "";

}

// javascript for toggle switch

const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

// Set default mode to light
let mode = 'light';

// Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function () {
  // If mode is dark, apply light background
  if (mode === 'dark') {
    mode = 'light';
    container.setAttribute('class', 'light');
  }
  // If mode is light, apply dark background
  else {
    mode = 'dark';
    container.setAttribute('class', 'dark');
  }
});
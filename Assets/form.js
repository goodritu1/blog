//get the form elements
const usernameInput = document.getElementById('#username');
const titleInput = document.getElementById('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');

// save all the value in one object
const saveForm={
    usernameInput:  usernameInput.value,
    titleInput: titleInput.value,
    contentInput: contentInput.value.trim(),
}

localStorage.setItem('saveform',JSON.stringify(saveForm));





// function saveForm() {
//     // saving data from form as an object
//     const saveFormInfo = {
//     usernameInput: usernameInput.value,
//     titleInput: titleInput.value,
//     contentInput: contentInput.value.trim(),
    
// };
// // store the form data in local storage
// localStorage.setItem('saveFormInfo', JSON.stringify(saveFormInfo));

// }


//     const formInfo1= JSON.parse(localStorage.getItem('saveFormInfo'));
//     console.log(formInfo1);
    


submitButton.addEventListener ('click', function (event){
    event.preventDefault();
   
});

// // function init() {
// //     renderLastForm();
// // }
// // init();






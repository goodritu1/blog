//get the form elements

const usernameInput = document.getElementById('username');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');
const submitButton = document.getElementById('submit');

// save all the value in one object

// const saveForm={
//     usernameInput:  usernameInput.value,
//     titleInput: titleInput.value,
//     contentInput: contentInput.value,

// }

// console.log (saveForm);



submitButton.addEventListener ('click', function (event){
    // saveForm.usernameInput= usernameInput.value;

    event.preventDefault();
    // saveForm();
    // clearForm();
    const saveFormInfo = {
        usernameInput: usernameInput.value,
        titleInput: titleInput.value,
        contentInput: contentInput.value,
        
    };
    localStorage.setItem('saveform',JSON.stringify(saveFormInfo));
    clearForm();
});

// function saveForm() {
//     // saving data from form as an object
  
// // alert("hello");
// // // store the form data in local storage
// // localStorage.setItem('saveFormInfo', JSON.stringify(saveFormInfo));
// return saveFormInfo;

// }
function clearForm (){
usernameInput.value ="";
titleInput.value="";
contentInput.value="";

}


//     const formInfo1= JSON.parse(localStorage.getItem('saveFormInfo'));
//     console.log(formInfo1);
    




// // function init() {
// //     renderLastForm();
// // }
// // init();






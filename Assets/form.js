//get the form elements
const usernameInput = document.querySelector('username');
const titleInput = document.querySelector('title');
const contentInput = document.querySelector('content');
const submitButton = document.querySelector('submit');

function saveForm() {
    // saving data from form as an object
    const saveFormInfo = {
    usernameInput: usernameInput.value,
    titleInput: titleInput.value,
    contentInput: contentInput.value.trim(),
    
};
// store the form data in local storage
localStorage.setItem('formInfo', JSON.stringify(saveFormInfo));

}

function renderLastForm() {
    const formInfo= JSON.parse(localStorage.getItem('saveFormInfo'));
    
}

submitButton.addEventListener ('click', function (event){
    event.preventDefault();
    saveForm();
    renderLastForm();
});

function init() {
    renderLastForm();
}
init();






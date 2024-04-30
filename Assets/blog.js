
// let blogDetail = document.querySelector('main')
const mainEl = document.querySelector("main");
let blogPost = JSON.parse(localStorage.getItem('formInfo'));

console.log (blogPost);
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

// let contentEl = document.getElementById("content");   
// let titleEl = document.getElementById('title');
// let usernameInputEl = document.getElementById('username');

for(i =0; i<blogPost.length; i++) {
    const divEl = document.createElement("div");
    const h2El = document.createElement("h2");
    const blockQuoteEl= document.createElement("blockquote");
    const paraEl = document.createElement("p");
    console.log(blogPost[i]);
    divEl.setAttribute("style", "border: 2px solid black; padding: 4px; margin-top: 2px");
    blockQuoteEl.innerHTML = blogPost[i].contentInput;
    h2El.innerHTML = blogPost[i].titleInput;
    paraEl.innerHTML=blogPost[i].usernameInput;
    divEl.append(h2El);
    divEl.append(blockQuoteEl);
    divEl.append(paraEl);
    mainEl.append(divEl);

}





// let blogDetail = document.querySelector('main')
const mainEl = document.querySelector("main");
let blogPost = JSON.parse(localStorage.getItem('formInfo'));

console.log (blogPost);

// let contentEl = document.getElementById("content");
// let titleEl = document.getElementById('title');
// let usernameInputEl = document.getElementById('username');

for(i =0; i<blogPost.length; i++) {
    const divEl = document.createElement("div");
    const h2El = document.createElement("h2");
    const blockQuoteEl= document.createElement("blockquote");
    const paraEl = document.createElement("p");
    console.log(blogPost[i]);
    blockQuoteEl.innerHTML = blogPost[i].contentInput;
    h2El.innerHTML = blogPost[i].titleInput;
    paraEl.innerHTML=blogPost[i].usernameInput;
    divEl.append(h2El);
    divEl.append(blockQuoteEl);
    divEl.append(paraEl);
    mainEl.append(divEl);

}


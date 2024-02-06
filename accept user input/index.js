// How to accept a input

// ! 1. EASY WAY => window prompt
// ! 2. PROFESSIONAL WAY => HTML textbox

/*  //! Easy way
let username = window.prompt('Enter your username?');
console.log("🚀 ~ file: index.js:8 ~ username:", username);
*/


      //! Professional way
let headingText = document.getElementById('myH1');
let username = document.getElementById('myInput');
let btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    headingText.textContent = `Hello ${username.value}`;
    username.value = ``;
})


// let username;

// document.getElementById('btn').onclick = () => {
//     username = document.getElementById('myInput').value;
//     document.getElementById('myH1').textContent = `Hello ${username}`;
// }
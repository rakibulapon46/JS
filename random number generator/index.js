//! RANDOM NUMBER GENERATOR

//! Range 1-10
// let randomNumber = Math.floor(Math.random() * 10) + 1;



//! (max - min) => is the range of possible values that the random number can have. For example, if max is 100 and min is 50, the range is 50.
//! Math.random() returns a decimal number between 0 and 1, but not including 1.

/* //todo =>  Range 50-100
const min = 50;
const max = 100;

let randomNumber = Math.floor(Math.random() * (max - min)) + min; 
console.log(randomNumber);
*/


//! RANDOM NUMBER GENERATING BY CLICKING BUTTON
const myBtn  = document.getElementById('myBtn');
const text1  = document.getElementById('text1');
const text2  = document.getElementById('text2');
const text3  = document.getElementById('text3');
const min = 1;
const max = 6;
let randomNumber1;
let randomNumber2;
let randomNumber3;

myBtn.onclick = () =>{
    randomNumber1 = Math.floor(Math.random() * max) + min;
    randomNumber2 = Math.floor(Math.random() * max) + min;
    randomNumber3 = Math.floor(Math.random() * max) + min;
    text1.textContent = randomNumber1;
    text2.textContent = randomNumber2;
    text3.textContent = randomNumber3;
}

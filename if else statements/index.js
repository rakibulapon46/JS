//! IF ELSE STATEMENT = if a condition is true, execute some code if not, do something else.

/*
let time = 10;

if (time < 12) {
  console.log("Good morning");
} else {
    console.log("Good afternoon");
}
*/

/* // Boolean
let isStudent = false;

if (isStudent) {
    console.log("you are a student");
} else {
    console.log("you are not a student");
}
*/

/*
let age = 18;
let hasLicense = false;

if (age >= 18) {
    console.log("you are old enough to drive");
    
    if (hasLicense) {
        console.log("you have your license");
    } else {
        console.log("you do not have your license yet!");
    }
} else {
    console.log("you must be 18+ to have a license");
}
*/

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age = 2;

mySubmit.addEventListener("click", () => {
  age = myText.value;
  age = Number(age);

  if (age >= 100) {
    resultElement.textContent = `your are too old to enter this site`;
  } else if (age == 0) {
    resultElement.textContent = `you can't enter. you were just born`;
  } else if (age >= 18) {
    resultElement.textContent = `you are old enough to enter this site`;
  } else if (age <= 0) {
    resultElement.textContent = `your age can't below be 0`;
  } else {
    resultElement.textContent = `you must be 18+ to enter this site`;
  }
  myText.value = ``;
});
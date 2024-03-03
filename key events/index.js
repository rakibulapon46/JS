// eventListener = Listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback);

//! Key down
// document.addEventListener("keydown", (event) => {
// //   console.log(event.key);
// console.log(`Key down = ${event.key}`);
// });

//! Key up
// document.addEventListener("keyup", (event) => {
// //   console.log(event.key);
// console.log(`Key up = ${event.key}`);
// });

//! key press to color change
/*
const myBox = document.getElementById("myBox");

document.addEventListener("keydown", (event) => {
  myBox.textContent = `😯`;
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = `😃`;
  myBox.style.backgroundColor = "lightblue";
});
*/

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", () => {
  myBox.textContent = `😯`;
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", () => {
  myBox.textContent = `😃`;
  myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", (event) => {
  if (
    event.key.startsWith("Arrow") ||
    ["w", "s", "a", "d"].includes(event.key) ||
    ["W", "S", "A", "D"].includes(event.key)
  ) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
      case "w":
      case "W":
        y -= moveAmount;
        break;
      case "ArrowDown":
      case "s":
      case "S":
        y += moveAmount;
        break;
      case "ArrowLeft":
      case "a":
      case "A":
        x -= moveAmount;
        break;
      case "ArrowRight":
      case "d":
      case "D":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});

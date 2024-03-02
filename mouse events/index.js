// eventListener = Listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
  myBox.style.background = "tomato";
  myBox.textContent = `OUCH! 😓`;
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.background = "yellow";
  myBox.textContent = `Don't do it 😔`;
});

myButton.addEventListener("mouseout", (event) => {
    myBox.style.background = "lightgreen";
    myBox.textContent = `Click Me 😃`;
})
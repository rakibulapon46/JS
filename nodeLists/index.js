// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (ap, Filter, reduce)
//            NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

//! ADD HTML/CSS PROPERTIES
// buttons.forEach((button) => {
//   button.style.backgroundColor = "MediumSeaGreen";
//   button.textContent += `😃`;
// });

//! Click event listener
// buttons.forEach((button) => {
//     button.addEventListener("click", (event) => {
//         event.target.style.backgroundColor = "MediumSeaGreen";
//     })
// })

//! MOUSEOVER + MOUSEOUT event listener
// buttons.forEach((button) => {
//   button.addEventListener("mouseover", (event) => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });

// buttons.forEach((button) => {
//   button.addEventListener("mouseout", (event) => {
//     event.target.style.backgroundColor = "#57beff";
//   });
// });

//! ADD AN ELEMENT
// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "BUTTON 5"; //STEP 2
// newButton.classList = "myButtons";
// document.body.appendChild(newButton); //STEP 3

// buttons = document.querySelectorAll(".myButtons");  // UPDATE BUTTONS IN NODELIST

// console.log(buttons);

//! REMOVE AN ELEMENT
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.remove();  // REMOVE BUTTONS AFTER CLICK
    buttons = document.querySelectorAll(".myButtons"); // UPDATE BUTTONS IN NODELIST
    console.log(buttons);
  });
});

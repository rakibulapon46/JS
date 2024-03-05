// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled"); //!add
// myButton.classList.remove("enabled"); //!remove

/*
myButton.addEventListener("mouseover", (event) => {
//   event.target.classList.add("hover");  // add
  event.target.classList.toggle("hover");  //! toggle
});

myButton.addEventListener("mouseout", (event) => {
//   event.target.classList.remove("hover");  // remove
  event.target.classList.toggle("hover");  //! toggle
});
*/

/*
myButton.addEventListener("click", (event) => {
  //! contains()
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😒";
  } else {
    event.target.classList.replace("enabled", "disabled"); //!replace
  }
});
*/

/*
const myH1 = document.getElementById("myH1");
myH1.classList.add("enabled");

myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "😒";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
*/

const buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
        event.target.textContent += `😒`;
    } else {
        event.target.classList.replace("enabled", "disabled");
    }
  });
});

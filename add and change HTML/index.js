// ----------- EXAMPLE 1 <h1> -------------

//! STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

//! STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = `I like pizza!`;
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";

//! STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box3").append(newH1);
// document.getElementById("box3").prepend(newH1);

// const box2 = document.getElementById('box2');
// // document.body.insertBefore(newElement, currentElement);
// document.body.insertBefore(newH1, box2);

//! without Id
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

//! REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
// document.getElementById("box3").removeChild(newH1);

const newListItem = document.createElement("li");

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

const listItem = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItem[2]);

document.getElementById("fruits").removeChild(newListItem);
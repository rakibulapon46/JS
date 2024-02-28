// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById() // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector() // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll() // NODELIST

//todo 1. document.getElementById()

// const myHeading = document.getElementById('myHeading');
// myHeading.style.backgroundColor = 'yellow';
// myHeading.style.textAlign = 'center';
// console.log(myHeading);

//todo 2. document.getElementsByClassName()

// const fruits = document.getElementsByClassName("fruits");
// fruits[2].style.backgroundColor = 'yellow';

//! All items
// for(let fruit of fruits) {
//     fruit.style.backgroundColor = 'yellow';
// }

//! Array to forEach work properly
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = 'yellow';
// })

//! fruits.forEach();  // forEach can't work by ClassName property

//todo 3. document.getElementsByTagName()

// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");

// console.log(h4Elements);
// h4Elements[0].style.backgroundColor = 'yellow';

//! All items
// for(let h4Element of h4Elements) {
//     h4Element.style.backgroundColor = 'yellow';
// }

// for(let liElement of liElements) {
//     liElement.style.backgroundColor = 'lime';
// }

//! Array to forEach work properly

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "lightgreen";
// });

//todo 4. document.querySelector()

// const element = document.querySelector("ul");
// element.style.backgroundColor = "yellow";

// const elements = document.querySelector("ol");
// console.log(elements);

//todo 5. document.querySelectorAll()

// const fruits = document.querySelectorAll(".fruits");
// fruits[2].style.backgroundColor = "yellow";

const foods = document.querySelectorAll("li");
// foods[2].style.backgroundColor = "yellow";
// foods[5].style.backgroundColor = "yellow";
// console.log(foods);

//! forEach work properly
foods.forEach((food) => {
  food.style.backgroundColor = "yellow";
});

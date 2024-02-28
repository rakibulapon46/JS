// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//!--------- .firstElementChild -----------------

// const element =  document.getElementById('fruits');
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "yellow";
// });

//!--------- .lastElementChild -----------------

// const element =  document.getElementById('vegetables');
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "yellow";

// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach((ulElement) => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "yellow";
// });

//!--------- .nextElementSibling -----------------

// const element = document.getElementById('fruits');

// const element = document.getElementById('Cake');
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "yellow";

//!--------- .previousElementSibling -----------------

// const element = document.getElementById('vegetables');

// const element = document.getElementById("Banana");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "yellow";

//!--------- .parentElement -----------------

// const element = document.getElementById("Pie");
// const parent = element.parentElement;
// parent.style.backgroundColor = "yellow";

//!--------- .children -----------------

const element = document.getElementById("fruits");
const children = element.children;
// console.log(children);
children[1].style.backgroundColor = "yellow";

// Array.from(children).forEach(child => {
//     child.style.backgroundColor = "yellow";
// })

// spread operator = ... allows an iterable such as an
//                   array on string to be expanded into separate elements
//                  (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // maximum number of Array
console.log(maximum);

let minimum = Math.min(...numbers); // minimum number of Array
console.log(minimum);

let username = "Rakibul Apon";
let letters = [...username]; // convert string to array
console.log(letters);

let lettersJoin = [...username].join("-"); // convert string to array and join "-"
console.log(lettersJoin);

let fruits = ["apple", "orange", "banana"];
// let newFruits = [...fruits]; // shallow copy using spread operator
// console.log(newFruits);
let vegetables = ["carrots", "potatoes", "celery"];
let food = [...fruits, ...vegetables, "egg", "milk"];
console.log(food);

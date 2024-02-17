// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

//! push(), pop(), unshift(), shift()
// fruits[3] = "coconut";
// fruits.push("coconut");  //  push => add element to array last element
// fruits.pop() // pop => remove element from array last element
// fruits.unshift("mango");  // unshift => add element to array first element
// fruits.shift();  // shift => remove element from array first element

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);


//! array.length
let numOfFruits = fruits.length;  // length starting from 1.
console.log(numOfFruits);


//! indexOf()
let index = fruits.indexOf("banana"); // index starting from 0.
// let index = fruits.indexOf("mango"); // mango not in array. Result => -1.
console.log(index);


//! for loops method
//i++
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//i+=2
for (let i = 0; i < fruits.length; i+=2) {
console.log("🚀 ~ file: index.js:39 ~ fruits:", fruits[i]);
}

//i--
for (let i = fruits.length - 1; i >= 0; i--) {
console.log("🚀 ~ file: index.js:44 ~ fruits:", fruits[i]);
}

fruits.sort().reverse();
for(let fruit of fruits){
    console.log(fruit);
}
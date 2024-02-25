const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

/*
console.log(fruits[0]);
console.log(fruits[0].name);
console.log(fruits[0].color);
console.log(fruits[0].calories);

console.log(fruits[1].name);
console.log(fruits[3].color);
console.log(fruits[2].calories);
*/

//! push, pop, splice
// fruits.push({name: "grapes", color: "green", calories:62});
// fruits.pop();
// fruits.splice(1, 2);// remove index 1 & 2
// fruits.shift();
// fruits.unshift({name: "grapes", color: "green", calories:62});

// console.log(fruits)

//! --------------- foreach() --------------------

// fruits.forEach( (fruit) => console.log(fruit));
// fruits.forEach( (fruit) => console.log(fruit.name));
// fruits.forEach( (fruit) => console.log(fruit.color));
// fruits.forEach( (fruit) => console.log(fruit.calories));

//! --------------- map() --------------------
// const fruitNames = fruits.map( (fruit) => fruit);
const fruitNames = fruits.map((fruit) => fruit.name);

console.log(fruitNames);
const fruitColors = fruits.map((fruit) => fruit.color);
console.log(fruitColors);

const fruitCalories = fruits.map((fruit) => fruit.calories);
console.log(fruitCalories);

//! --------------- filter() --------------------

const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
console.log(yellowFruits);

const lowCalories = fruits.filter((fruit) => fruit.calories < 100);
console.log(lowCalories);

const highCalories = fruits.filter((fruit) => fruit.calories >= 100);
console.log(highCalories);

//! --------------- reduce() --------------------

const maxFruits = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
console.log(maxFruits);
console.log(maxFruits.calories);

const minFruits = fruits.reduce((min, fruit) =>
  fruit.calories < min.calories ? fruit : min
);
console.log(minFruits);
console.log(minFruits.calories);

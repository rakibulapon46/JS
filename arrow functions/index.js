// arrow functions = a concise way to write function expressions good for
//                   simple functions that you use only once
//                   (parameter) => some code

// const hellos = () => console.log('hello');
const hello = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};

hello("Rakibul", 18);

setTimeout(() => {
  console.log("hello");
}, 3000);


const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log("🚀 ~ file: index.js:21 ~ squares:", squares);

const cubes = numbers.map((element) => Math.pow(element, 3));
console.log("🚀 ~ file: index.js:24 ~ cubes:", cubes);

const oddNumbers = numbers.filter((element) => element % 2 !== 0);
console.log("🚀 ~ file: index.js:27 ~ oddNumbers:", oddNumbers);

const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log("🚀 ~ file: index.js:30 ~ evenNumbers:", evenNumbers);

const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log("🚀 ~ file: index.js:33 ~ total:", total);

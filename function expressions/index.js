// function declaration = define a reusable block of code that performs a specific task

// function expressions = a way to define function as values or variables

//! function declaration
const hello = function hello() {
  console.log("function declaration hello");
};
hello();

//! function expressions
setTimeout(function () {
  console.log("hello function expression");
}, 3000);

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => {
  return Math.pow(element, 2);
});

const cubes = numbers.map((element) => {
  return Math.pow(element, 3);
});

const evenNums = numbers.filter((element) => {
  return element % 2 === 0;
});

const oddNums = numbers.filter((element) => {
  return element % 2 !== 0;
});

const total = numbers.reduce((accumulator, element) => {
  return accumulator + element;
  // return accumulator - element;
  // return accumulator * element;
  // return accumulator / element;
  // return accumulator % element;
});

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(`total: ${total}`);

// foreach()
numbers.forEach((element) => {
  console.log(element);
});

numbers.forEach(double);
function double(element, index, array) {
  array[index] = element * 2;
}

numbers.forEach((element) => {
  console.log(element);
});

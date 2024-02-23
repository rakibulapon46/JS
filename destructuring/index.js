// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring  =>[]
//                 {} = to perform object destructuring  => {}

// --------  EXAMPLE 1 ----------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a); // Output: 2
console.log(b); // Output: 1

// --------  EXAMPLE 2 ----------
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];
console.log(colors); // Output: ['black', 'green', 'blue', 'white', 'red']

// --------  EXAMPLE 3 ----------
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const color = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = color; // ...extraColors => rest parameter
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

// --------  EXAMPLE 4 ----------
// EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: "Rakibul",
  lastName: "Apon",
  age: 21,
  job: "Web development",
};

const person2 = {
  firstName: "Jubaer",
  lastName: "Antor",
  age: 4,
};

// const {firstName, lastName, age, job} = person1;
const { firstName, lastName, age, job = "unemployed" } = person2;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

// --------  EXAMPLE 5 ----------
// DESTRUCTURE IN FUNCTION PARAMETERS

// function ({})  => Object destructuring
function displayPerson({ firstName, lastName, age, job = "unemployed" }) {
  console.log(`Fullname: ${firstName} ${lastName}`);
  console.log(`Age: ${age}`);
  console.log(`Job: ${job}`);
}

displayPerson(person1);
displayPerson(person2);

function displayColor([firstColor, secondColor, thirdColor, ...extraColors]) {
  // function ([]) => Array  destructuring
  console.log(firstColor);
  console.log(secondColor);
  console.log(thirdColor);
  console.log(extraColors);
}

displayColor(color);

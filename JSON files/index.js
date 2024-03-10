// JSON = (JavaScript Object Notation) data-interchange format
//        Used for exchanging data between a server and a ueb application
//        JSON files {key:value} OR [value, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

//! JSON.stringify()
/*
const names = ["Rakibul", "Apon", "Antor", "jubayer"];

const person = {
  name: "Rakibul",
  age: 21,
  isEmployed: true,
  hobbies: ["riding", "gaming", "playing"],
};

const people = [
  {
    name: "Rakibul",
    age: 21,
    isEmployed: true,
  },
  {
    name: "Apon",
    age: 18,
    isEmployed: false,
  },
  {
    name: "Antor",
    age: 4,
    isEmployed: false,
  },
  {
    name: "Rakibul",
    age: 8,
    isEmployed: true,
  },
];

const jsonString = JSON.stringify(people);
console.log(jsonString);
*/

//! JSON.parse()
/*
const jsonName = `["Rakibul", "Apon", "Antor", "jubayer"]`;
const jsonPerson = `{"name": "Rakibul", "age": 21, "isEmployed": true, "hobbies": ["riding", "gaming", "playing"]}`;

const jsonPeople = `[{  "name": "Rakibul",  "age": 21,  "isEmployed": true},{  "name": "Apon",  "age": 18,  "isEmployed": false},{  "name": "Antor",  "age": 4,  "isEmployed": false},{  "name": "Rakibul",  "age": 8,  "isEmployed": true}
  ]
  `;

  const parseData = JSON.parse(jsonPeople);
  console.log(parseData);
*/

//! fetch
fetch("people.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)))
  .catch((error) => console.error(error));

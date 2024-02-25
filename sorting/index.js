// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();
console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

// numbers.sort((a, b) => a - b);  // serial sort 1-10
numbers.sort((a, b) => b - a); // reverse sort 10-1
console.log(numbers);

const people = [
  { name: "Rakibul", age: 21, gpa: 4.58 },
  { name: "Apon", age: 18, gpa: 4.7 },
  { name: "Antor", age: 4, gpa: 0.0 },
  { name: "Kotha", age: 16, gpa: 4.06 },
];

// people.sort((a, b) => a.age - b.age); // serial sort
// people.sort((a, b) => a.gpa - b.gpa); // serial sort
// people.sort((a, b) => a.name.localeCompare(b.name)); // serial sort
people.sort((a, b) => b.name.localeCompare(a.name)); // reverse sort
console.log(people);

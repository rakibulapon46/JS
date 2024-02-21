// filter() = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
console.log(evenNums);

let oddNums = numbers.filter(isOdd);
console.log(oddNums);

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}

let ages = [16, 17, 18, 18, 20, 60];
let adultPersons = ages.filter(isAdults);
console.log(adultPersons);

let children = ages.filter(isChilds);
console.log(children);

function isAdults(element) {
  return element >= 18;
}

function isChilds(element) {
  return element < 18;
}

let words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];

let shortWords = words.filter(getShortWords);
console.log(shortWords);

let longWords = words.filter(getLongWords);
console.log(longWords);

function getShortWords(element) {
  return element.length <= 6;
}

function getLongWords(element) {
  return element.length > 6;
}

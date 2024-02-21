// reduce() = reduce the elements of an array to a single value

let prices = [5, 30, 10, 25, 15, 20];
let total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element) {
  return accumulator + element;
}

//! how reduce should work
// function sum (firstElement, lastElement) {
//     return firstElement + lastElement;
// }
// function sum (previous, next) {
//     return previous + next;   // 5 + 30, 35 + 10...   how its work
// }


let grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(maxGrade);
console.log( maximum);

const minimum = grades.reduce(minGrade);
console.log( minimum);



function maxGrade(accumulator, element){
    return Math.max(accumulator, element);
}

function minGrade(accumulator, element){
    return Math.min(accumulator, element);
}
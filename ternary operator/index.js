/* //! Ternary Operator
//ternary operator = a shortcut to if{} and else{} statements helps to assign a variable
//                   based on a condition 
//                   condition ? codeIfTrue : codeIfFalse;
*/


// let age = 15;
// let message = age >= 18 ? "You'er an adult" : "You're a minor";
// console.log(message);


// let time = 9;
// let greeting = time < 12 ? "Good morning" : "Good afternoon";
// console.log(greeting);


// let isStudent = true;
// let showMessage = isStudent ? "You are a student" : "You are not a student";
// console.log(showMessage);

let purchaseAmount = 125;
let discountAmount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total amount is $${purchaseAmount - purchaseAmount * (discountAmount / 100)}`);
//                                      125         -       125      *  (  10        /  100);

console.log(`Your total amount is $${purchaseAmount - discountAmount * (purchaseAmount / 100)}`);
//                                      125         -       10      *  (  125        /  100);

let bikePrice = 650000;
let discount = 10;
console.log(`${bikePrice - bikePrice * (discount / 100 ) }`)
// console.log(`${bikePrice - discount * (bikePrice / 100 ) }`)
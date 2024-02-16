// function = A section of reusable code.
//           Declare code once, use it whenever you want.
//           Call the function to execute that code.

function happyBirthday(name, age) {
  console.log("Happy Birth Day to you");
  console.log("Happy Birth Day Dear");
  console.log(`Happy Birth Day ${name}`);
  console.log(`Happy Birth Day ${age}`);
}

happyBirthday("apon", 18);
happyBirthday("rakibul", 22);

//! add =>
function add(x, y) {
  let result = x + y;
  return result;
}
console.log(add(2, 3));

//! subtract =>
function subtract(x, y) {
  return x - y;
}
console.log(subtract(22, 12));

//! multiply =>
function multiply(x, y) {
  return x * y;
}
console.log(multiply(2, 12));

//! division =>
function division(x, y) {
  return x / y;
}
console.log(division(20, 10));


//! true , false 
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

//! shorter version
function isEven(number) {
    return (number % 2 === 0) ? true : false;
}
console.log(isEven(16));

//! email valid check
// function isValidEmail(email) {
//     if (email.includes("@")) {
//         return true;
//     } else {
//         return false;
//     }
// }

//! shorter version
function isValidEmail(email) {
    return (email.includes("@")) ? true : false;
}

console.log(isValidEmail("brofake.com"));
console.log(isValidEmail("aponrakibul79@gmail.com"));
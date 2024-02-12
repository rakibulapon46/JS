// string slicing = creating a substring from a portion of another string
//!                   string.slicing = (start, end)

const fullName = "Rakibul Apon";

// let firstName = fullName.slice(0, 7); // (start => 0, end => current index number + 1)
// let lastName = fullName.slice(8, 12); // (start => 0, end => current index number + 1)
// console.log(firstName);
// console.log(lastName);

// let firstCharacter = fullName.slice(0); // (start form => first)
// let lastCharacter = fullName.slice(-4); // (start form => last)
// console.log(firstCharacter);
// console.log(lastCharacter);

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(firstName);
// console.log(lastName);

const email = "aponrakibul79@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);

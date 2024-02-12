// Method Chaining = Calling one method after another in one continuous line of code.


let userName = window.prompt();

//! ----- NO METHOD CHAINING -----

// userName = userName.trim();

// let letter = userName.charAt(0);
// letter = letter.toUpperCase();

// let extraChar = userName.slice(1);
// extraChar = extraChar.toLowerCase();

// userName = letter + extraChar;
// console.log(userName);


//! ----- METHOD CHAINING -----

userName = userName.trim().charAt(0).toLocaleUpperCase() + userName.trim().slice(1).toLowerCase();
console.log(userName);
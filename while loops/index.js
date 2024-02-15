// while loops = repeat some code WHILE some condition is true

// let username;

// do{
//     username = window.prompt("Enter your username");
// }while (username === "" || username === null)

// while (username === "" || username === null) {
//   username = window.prompt("Enter your username");
// }
// console.log(`Hello ${username}`);

let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");
  password = Number(password);
  loggedIn = true;

  if (username === "apon" && password === 123) {
    console.log("You'er logged in successfully");
  } else {
    console.log("invalid credentials! Please try again");
  }
}

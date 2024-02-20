// callback = a function that is passed as an argument to another function.

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with databases

//            “Hey, when you're done, call this next."

/*
hello(wait, leave);
// goodbye();
function hello(callback) {
  setTimeout(() => {
    console.log("hello");
  }, 2000);
  callback();
}

function leave() {
  console.log("leave");
}

function wait() {
  console.log("wait");
}

function goodbye() {
  console.log("goodbye");
}
*/

sum(displayDOM, 2, 3);
function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayDOM(result) {
  document.getElementById("myH1").textContent = result;
}

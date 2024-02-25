// setTimeout() = function in Javascript that allows you to schedule
//                the execution of a function after an amount of tine (milliseconds)
//                Ties are approximate (varies based on the workload of the Javascript runtime environment)
//!                setTimeout (callback, delay)
//!                clearTimeout (timeoutId) = can cancel a timeout before it triggers

// function hello(){
//     window.alert("Hello");
// }
// setTimeout(hello, 2000);

//! setTimeout (callback, delay)
// setTimeout(() => {
//     window.alert("Hello!");
// }, 2000);

//! clearTimeout (timeoutId)
// const timeout = setTimeout(() => window.alert("Hello!"), 2000);
// clearTimeout(timeout);

// buttons function

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => {
    window.alert("Hello");
    console.log("STARTED");
  }, 2000);
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}

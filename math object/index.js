//! Math = built-in object that provides a collection of properties and methods


// console.log(Math.PI);
// console.log(Math.E);

let x = 3;
let y = 2;
let z = 1;

// z = Math.round(x);     // x = 3.49 => 3, x = 3.50 => 4
// z = Math.floor(x);    //x = 3.99 => 3
// z = Math.ceil(x);    //x = 3.01 => 4
// z = Math.trunc(x);  //x = 3.49 => 3
// z = Math.trunc(x);  // x = 3.33 => 3
// z = Math.pow(y, x);  // y^x = 2^3 => 8
// z = Math.sqrt(x);  // x = 81 => 9
// z = Math.log(x);  // x = 10 => 2.302
// z = Math.sin(x);  // x = 45 => 0.85
// z = Math.cos(x);  // x = 45 => 0.52
// z = Math.tan(x);  // x = 45 => 1.619
// z = Math.abs(x);  // x = -3.21 => 3.21
// z = Math.sign(x);  // x = -3.2 => -1, x = 0 => 0, x = 3.2 => 1;

let max = Math.max(x,y,z);  // max => 3;
let min = Math.min(x,y,z);  // min => 1;

console.log(min);

// variable scope = where a variable is recognized 
//                  and accessible (local vs global)


//! Local variable scope
function function1(){
    let x = 2;  // inside function local scope
    console.log(x);
}
function1();


//! Global variable scope
let x = 10;  // outside function global scope
function function2(){
    console.log(x);
}
function2();
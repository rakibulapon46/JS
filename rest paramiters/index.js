// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements.
//                   rest = bundles separate elements into an array.

/*
const food1 = "pizza";
const food2 = "burger";
const food3 = "sandwich";
const food4 = "hotdogs";
const food5 = "ramen";

function openFridge(...foods) {
  console.log(...foods); // ...rest
  console.log(foods); // spread array
}
// openFridge(food1, food2, food3, food4, food5);

function getFood(...foods) {
    return foods;
}

let foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
*/

/*
function sum (...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

// const total = sum(1,2,3,4,5);
// console.log(`Your total is $${total}`);


function getAverage (...numbers){
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total = getAverage(75, 100, 85, 90, 50);
console.log(`The average is $${total}`);
*/

function combineStrings(...strings){
    return strings.join(' ');
}

const fullName = combineStrings("Web.dev", "Rakibul", "Apon");
console.log(fullName);

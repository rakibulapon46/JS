// Logical operators = used to combine or manipulate boolean values (true or false)
//                     AND = &&  // when 2 conditions are true. (temp >= 0 && temp <=30)
//                     OR = ||  // any 1 condition are true. (temp <= 0 || temp >= 30)
//                     NOT = !  // NOT convert true to false & false to true. when (!temp) NOT is true => show else condition. And (!temp) NOT is false => show if condition.



const temp = 34;


//! AND =>
// if (temp >= 0 && temp <=30) {
//     console.log("The weather is good")
// } else {
//     console.log("The weather is bad")
// }


//! OR =>
// if (temp <= 0 || temp >= 30) {
//     console.log("The weather is bad")
// } else {
//     console.log("The weather is good")
// }


//! NOT =>
const isSunny =  true;

if (!isSunny) {
    console.log("It is Cloudy")
} else {
    console.log("It is Sunny")
}


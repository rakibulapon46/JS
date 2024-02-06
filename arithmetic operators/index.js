//! arithmetic operators = operands (values, variables, etc.)
//!                        operators(+ - * /)
//                         ex. 11 = x + 5;
//! augmented assignments operators => (+= , -=, *=, /=);

let students = 31;

// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 3;
// let extraStudents = students % 3;

//!  augmented assignments operators => (+= , -=, *=, /=);

// students += 1;
// students -= 1;
// students *= 2;
// students /= 2;
// students %= 4;

//! increment operators
// students++;
// ++students; // work on run time. useful for live tests

//! decrement operators
// students--;
// --students;  // work on run time. useful for live tests

/* //! operator precedence => 
    1. parenthesis [3rd {2nd (1st)}]
    2. exponents(**)
    3. multiplication (*) & division (/) & module (%)
    4. addition (+) & subtraction (-)
    ** operator precedence value => (https://www.w3schools.com/js/js_precedence.asp)
*/

// let result = 1 + 2 * 3 + 4 ** 2;
// let result = (12 % 5) + 8 / 2;
// let result = 6 * 2 ** (2 + 5);


console.log(students);

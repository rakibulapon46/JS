//! SWITCH = can be an efficient replacement to many else if statements

/*
let day = 7;

switch (day) {
  case 1:
    console.log("monday");
    break;

  case 2:
    console.log("tuesday");
    break;

  case 3:
    console.log("wednesday");
    break;

  case 4:
    console.log("thursday");
    break;

  case 5:
    console.log("friday");
    break;

  case 6:
    console.log("saturday");
    break;

  case 7:
    console.log("sunday");
    break;

  default:
    console.log(`${day} is not a day`);
    break;
}
*/

let testScore = 100;
let letterGrade;

switch (true) {
  case testScore >= 80:
    letterGrade = testScore > 100 ? "undefined" : "A+";
    break;

  case testScore >= 70:
    letterGrade = "A";
    break;

  case testScore >= 60:
    letterGrade = "A-";
    break;

  case testScore >= 50:
    letterGrade = "B";
    break;

  case testScore >= 40:
    letterGrade = "C";
    break;

  case testScore >= 33:
    letterGrade = "D";
    break;

  default:
    letterGrade = testScore < 0 ? "undefined" : "F";
    break;
}

console.log(letterGrade);
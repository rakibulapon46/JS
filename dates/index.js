// Date objects = Objects that contain values that represent dates and times
//                These date objects can be changed and formatted

//! Date(year, month, day, hour, minute, second, millisecond)
// const date = new Date(2024, 3, 29, 12, 23, 2, 325);
// const date = new Date("2024-04-29T12:23:32");
// const date = new Date(0);
// const date = new Date(1700000000000);

// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(3);
// date.setMinutes(49);
// date.setSeconds(19);
// console.log(date);

/*
const year = date.getFullYear();
console.log(year);

const month = date.getMonth();
console.log(month);

const day = date.getDate();
console.log(day);

const hour = date.getHours();
console.log(hour);

const minute = date.getMinutes();
console.log(minute);

const second = date.getSeconds();
console.log(second);

const milisecond = date.getMilliseconds();
console.log(milisecond);

const dayOfWeek = date.getDay();
console.log(dayOfWeek);
*/

const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if (date2 < date1) {
  console.log("HAPPY NEW YEAR!");
} else {
  console.log("New year is coming");
}

// constructor = special method for defining the properties and methods of objects

//!  Also this is work
// function cars(a, b, c, d) {
//   this.make = a,
//   this.model = b,
//   this.year = c,
//   this.color = d
// }

function car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function () {
    console.log(`You drive the ${this.model}`);
  }
}

const car1 = new car("Ford", "Mustang", 2024, "red");
const car2 = new car("Chevrolet", "Camaro", 2025, "blue");
const car3 = new car("Dodge", "Charger", 2026, "Black");

console.log(car1);
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2);
console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();

console.log(car3);
console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
car3.drive();

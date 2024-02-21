// object =  A collection of related properties and/or methods
//           Can represent real world objects (people, products, places)
//           object = {key: value,
//                     function()}

const person1 = {
  firstName: "Rakibul",
  lastName: "Apon",
  age: 21,
  isEmployed: false,
  sayHello: function () {
    console.log("Hi! I am Apon!");
  },
  eat: () => console.log("I am eating pizza, chicken and roast beef"),
};

const person2 = {
  firstName: "Jubayer",
  lastName: "Antor",
  age: 4,
  isEmployed: true,
  sayHello: () => {
    console.log("Hey! I am Antor!");
  },
  eat: () => console.log("I am eating an egg"),
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
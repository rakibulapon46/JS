// nested objects = Objects inside of other Objects
//                  Allows you to represent more complex data structures
//                  Child Object is enclosed by a Parent Object

//                  Person(Address{}, ContactInfo{});
//                  ShoppingCart(Keyboard{}, Mouse{}, Monitor{});

/*
const person = {
  fullName: "Rakibul Apon",
  age: 21,
  isStudent: true,
  hobbies: ["riding", "gaming", "playing"],
  address: {
    street: "123 RA St.",
    city: "Kushtia",
    country: "Bangladesh",
  },
};

// console.log(person.fullName);
// console.log(person.age);
// console.log(person.isStudent);
// console.log(person.hobbies);
// console.log(person.hobbies[1]);
// console.log(person.address);
// console.log(person.address.street);
// console.log(person.address.city);
// console.log(person.address.country);

// //! Only for address
for(const property in person.address) {
    console.log(property)
}
*/

class Person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person(
  "Rakibul",
  21,
  "123 RA St.",
  "Kushtia",
  "Bangladesh"
);

const person2 = new Person("Apon", 18, "124 RA St.", "Kushtia", "Bangladesh");

const person3 = new Person("Antor", 4, "1T PA St.", "Poradoh", "Bangladesh");

console.log(person1);
console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2);
console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.street);
console.log(person2.address.city);
console.log(person2.address.country);

console.log(person3);
console.log(person3.name);
console.log(person3.age);
console.log(person3.address);
console.log(person3.address.street);
console.log(person3.address.city);
console.log(person3.address.country);

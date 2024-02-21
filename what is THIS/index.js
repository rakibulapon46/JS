// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//! this keyword / this.name...  doesn't work with arrow function

//!         person.name = this.name

const person1 = {
  name: "Rakibul",
  favFood: "roasted beef",
  sayHello: function(){
    console.log(`Hi! I am ${this.name}`);  //!  ${this.name} / ${person2.name}
  },
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`);}
};

const person2 = {
  name: "Antor",
  favFood: "egg",
  sayHello: function(){
    console.log(`Hi! I am ${person2.name}`);  //! ${person2.name} / ${this.name}
  },
  eat: function(){console.log(`${this.name} is eating ${this.favFood}`);}
};

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

console.log(this)
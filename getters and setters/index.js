// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property

/*
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  //! set => writeable
  set width(newWidth) {
    if (newWidth > 0) {
      this._width = newWidth; //! this._width => (_width) is a private property
    } else {
      console.error(`Width must be a positive number`);
    }
  }

  set height(newHeight) {
    if (newHeight > 0) {
      this._height = newHeight; //! this.height => (_height) is a private property
    } else {
      console.error(`Height must be a positive number`);
    }
  }

  //! get => readable
  get width() {
    return `${this._width.toFixed(1)}cm`;
  }

  get height() {
    return `${this._height.toFixed(1)}cm`;
  }

  get area(){
    return `${(this._width * this._height).toFixed(1)}cm^2`;
  }
}

// const rectangle = new Rectangle(-1000000, "pizza");
const rectangle = new Rectangle(10, 20);

// rectangle.width = 5;
// rectangle.height = 10;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //! set =>
  set firstName(newFirstName) {
    if (typeof newFirstName === "string" && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error(`First name must be a non-empty string`);
    }
  }

  set lastName(newLastName) {
    if (typeof newLastName === "string" && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error(`Last name must be a non-empty string`);
    }
  }
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error(`Age name must be a non-negative number`);
    }
  }

  //! get=>
  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  get age() {
    return this._age;
  }
}

// const person = new Person(420, 69, "pizza");
const person = new Person("Rakibul", "Apon", 21);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);

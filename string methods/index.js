//! string methods = allow you to manipulate and work with text (strings)

let username = "BroCode";

// .charAt() //  (1,2,3....) => ("a,b,c,d,e,f...")  index number er letter show korbe
console.log(username.charAt(3));

// .indexOf() //  ("a,b,c,d,e,f...") => (1,2,3....)  letter er index number show korbe
console.log(username.indexOf("r"));

// .lastIndexOf()   ("a,b,c,d,e,f...")
console.log(username.lastIndexOf("o"));

// .length
console.log(username.length);

// .trim()    (whitespace trimmer)
let lastName = "    Apon";
console.log(lastName.trim()); // with trim
console.log(lastName); // without trim

// .toUpperCase()
username = username.toUpperCase();
console.log(username);

// .toLowerCase()
username = username.toLowerCase();
console.log(username);

// .repeat()
username = username.repeat(3);
console.log(username);

// .startsWith()
// let firstName = "Rakibul";
let firstName = " Rakibul";
let result1 = firstName.startsWith(" ");
console.log("🚀 ~ file: index.js:39 ~ result1:", result1);

if (result1) {
  console.log(`Your username can't begin with ' '`);
} else {
  console.log(firstName);
}

// .endsWith()
// let randomName = "Antor ";
let randomName = "Antor";
let result2 = randomName.endsWith(" ");
console.log("🚀 ~ file: index.js:50 ~ result2:", result2);

if (result2) {
  console.log(`Your username can't ends with ' '`);
} else {
  console.log(randomName);
}

// .includes()
// let anotherName = "BroCode";
let anotherName = "Bro Code";
let result3 = anotherName.includes(" ");
console.log("🚀 ~ file: index.js:63 ~ result3:", result3);

if (result3) {
  console.log(`Your username can't include ' '`);
} else {
  console.log(anotherName);
}

// replaceAll()
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "/"); // replaceAll("remove", "add");
console.log(phoneNumber);

// padStart()
phoneNumber = phoneNumber.padStart("20", "0"); // padStart("how much long", "start with "value");
console.log(phoneNumber);

// padEnd()
let anyNumber = "45-67-890";
anyNumber = anyNumber.padEnd("15", "$"); // padEnd("how much long", "end with "value");
console.log(anyNumber);

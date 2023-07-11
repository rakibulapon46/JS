var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter second number : ");

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);

var addition, subtraction, multiplication, division, remainder;

addition = num1 + num2;
document.write("Addition = " + num1 + " + " + num2 + " = " + addition + "<br>");

subtraction = num1 - num2;
document.write("Subtraction = " + num1 + " - " + num2 + " = " + subtraction + "<br>");

multiplication = num1 * num2;
document.write("Multiplication = " + num1 + " * " + num2 + " = " + multiplication + "<br>");

division = num1 / num2;
document.write("Division = " + num1 + " / " + num2 + " = " + division + "<br>");

remainder = num1 % num2;
document.write("Remainder = " + num1 + " % " + num2 + " = " + remainder + "<br>");

/*
var firstName = prompt("Enter your first name : ");
var lastName = prompt("enter your last name : ");
var fullName = firstName + lastName;
// document.write(fullName + "<br>");
document.write("First Name : " + firstName + "<br>");
document.write("Last Name : " + lastName + "<br>");
document.write("Full Name : " + firstName + " " + lastName + "<br>");
document.write("Total length of full name: " + fullName.length + "<br>");
document.write(fullName.toUpperCase() + "<br>");
document.write("2nd position of full name :" + fullName.charAt(1));
*/
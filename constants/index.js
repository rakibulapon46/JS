// const = a variable that can't be changed

const PI = 3.1416;
let radius;
let circumference;

// radius = Number(10);
// circumference = 2 * PI * radius;
// console.log(circumference);


document.getElementById('btn').onclick = () => {
    radius = document.getElementById('myInput').value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById('myH3').textContent = `The circumference of circle is ${circumference} cm`;
}
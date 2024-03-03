const myImg = document.getElementById("myImg");
const myButton = document.getElementById("myButton");

/*
myButton.addEventListener("click", (event) => {
    if (myImg.style.display === "none") {
        myImg.style.display = "block";
        myButton.textContent = "Hide"
    } else {
        myImg.style.display = "none";
        myButton.textContent = "Show";
    }
});
*/

myButton.addEventListener("click", () => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "Hide";
  } else {
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";
  }
});

/* //! Simple method
const counterNumber = document.getElementById("myH2");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let count = 0;

increaseBtn.addEventListener("click", () => {
  count++;
  counterNumber.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
  count--;
  counterNumber.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counterNumber.textContent = count;
});
*/

//! foreach method
// innitialize value
let count = 0;

// select and buttons
const counterNumber = document.getElementById("myH2");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const styles = e.target.classList;
        if (styles.contains('decrease')){
            count--;
        } else if(styles.contains('increase')){
            count++;
        } 
        else {
            count = 0;
        }
        if (count > 0) {
            counterNumber.style.color = '#00a000';
        }
        if (count < 0) {
            counterNumber.style.color = 'red';
        }
        if (count === 0) {
            counterNumber.style.color = 'black';
        }
        counterNumber.textContent = count;
        console.log("🚀 ~ file: index.js:54 ~ btn.addEventListener ~ count:", count);
    })
})

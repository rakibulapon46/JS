//! .checked = property that determines the checked state of an HTML checkbox or radio button element

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subscribeResult = document.getElementById("subscribeResult");
const PaymentResult = document.getElementById("PaymentResult");

mySubmit.addEventListener("click", () => {
  if (myCheckBox.checked) {
    subscribeResult.textContent = `You are subscribed!`;
  } else {
    subscribeResult.textContent = `You are not subscribed!`;
  }

  if (visaBtn.checked) {
    PaymentResult.textContent = `You are paying with Visa`;
  } else if (masterCardBtn.checked) {
    PaymentResult.textContent = `You are paying with MasterCard`;
  }else if (payPalBtn.checked){
    PaymentResult.textContent = `You are paying with PayPal`;
  }
  else {
    PaymentResult.textContent = `You must be select a payment type`;
  }
});

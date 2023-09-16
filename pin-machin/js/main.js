//sub fnction
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    console.log("mypin is", pin);
    return getPin();
  }
}

//main function
function generatePin() {
  const pin = getPin();
  //console.log(pin);
  document.getElementById("display-input").value = pin;
  //console.log(pin);
}

//my calculatro function
document
  .getElementById("key-press")
  .addEventListener("click", function (event) {
    const number = event.target.innerText;
    const calculatNumber = document.getElementById("display-calculator");
    if (isNaN(number)) {
      if (number == "C") {
        calculatNumber.value = "";
      }
    } else {
      const previousCal = calculatNumber.value;
      const newCal = previousCal + number;
      calculatNumber.value = newCal;
    }
  });

//submit Handler
document.getElementById("submit").addEventListener("click", function () {
  const generateInput = document.getElementById("display-input").value;
  const calculatorInput = document.getElementById("display-calculator").value;
  // console.log(generateInput);
  if (generateInput == calculatorInput) {
    console.log("milse");
  } else {
    console.log("mile nai");
  }
});

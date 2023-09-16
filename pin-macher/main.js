//generate pi function
function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinSte = pin + "";
  //   console.log(pinSte.length);
  if (pinSte.length == 4) {
    console.log(pin);
    return pin;
  } else {
    console.log("my Three pin", pin);
    return generatePin();
  }
}
//display show pin this function
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
//my amzin calculation
function getNumber(event) {
  //console.log(event.target);
  mynumber = event.target;
  keyNumber = mynumber.innerText;
  //console.log(keyNumber);
  const display = document.getElementById("display-calculator");
  const prVealue = display.value;
  if (isNaN(keyNumber)) {
    if (keyNumber == "C") {
      display.value = "";
    }
  } else {
    display.value = prVealue + keyNumber;
  }
}
//my macher functio

function myMacher() {
  const macherPin = document.getElementById("display-pin").value;
  const macgerCalcu = document.getElementById("display-calculator").value;
  let wrongMessage = document.getElementById("wrong");
  let successMessage = document.getElementById("success");
  if (macherPin == macgerCalcu) {
    successMessage.style.display = "block";
    wrongMessage.style.display = "none";
  } else {
    wrongMessage.style.display = "block";
    successMessage.style.display = "none";
  }
}

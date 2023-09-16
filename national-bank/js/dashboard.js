//GET INPUT VALUE WITH FLOT TYPE
function getInputValue(myInput) {
  //get input value
  const myInputValue = document.getElementById(myInput);
  const innerText = parseFloat(myInputValue.value);
  myInputValue.value = "";
  return innerText;
  //console.log(innerText);
}
//UPDATE CONTENT WITH FUNCTION
function updateContent(depositAmount, balanceAmount, inputValue) {
  const balanceContent = document.getElementById(balanceAmount);
  const balanceInnertext = parseFloat(balanceContent.innerText);
  const sumBalance = balanceInnertext + inputValue;
  balanceContent.innerText = sumBalance;
  console.log(balanceInnertext);
  //deposite content
  const depositContent = document.getElementById(depositAmount);
  const contentInnertext = parseFloat(depositContent.innerText);
  const sumAmount = contentInnertext + inputValue;
  depositContent.innerText = sumAmount;
  //console.log(sumAmount);
}

//HERE DEPOSITE BUTTON ACTION
document.getElementById("deposit").addEventListener("click", function () {
  const inputValueFromFunction = getInputValue("deposit-input");
  //update content
  updateContent("deposit-amount", "total-balance", inputValueFromFunction);
});

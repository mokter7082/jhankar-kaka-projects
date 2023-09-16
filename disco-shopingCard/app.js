function updateCaseNumber(product, price, isIncress) {
  const caseInput = document.getElementById(product + "-input");
  let caseValue = parseInt(caseInput.value);
  if (isIncress == true) {
    caseValue = caseValue + 1;
  } else if (caseValue > 0) {
    caseValue = caseValue - 1;
  }
  caseInput.value = caseValue;
  ///total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = caseValue * price;
  //   console.log(caseTotal);
}

//phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateCaseNumber("phone", 1290, true);
  //console.log("phone clicked");
});
document.getElementById("phone-minus").addEventListener("click", function () {
  updateCaseNumber("phone", 1290, false);
  //console.log("phone clicked");
});

//phone
document.getElementById("case-plus").addEventListener("click", function () {
  updateCaseNumber("case", 50, true);
});
document.getElementById("case-minus").addEventListener("click", function () {
  updateCaseNumber("case", 50, false);
});

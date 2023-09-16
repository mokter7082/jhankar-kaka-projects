document.getElementById("diposit").addEventListener("click", function () {
  const dipositAmount = document.getElementById("diposit-amount");
  const newDiposit = dipositAmount.value;
  //console.log(myDiposit);
  const dipositTotal = document.getElementById("diposit-total");
  const previousAmount = dipositTotal.innerText;
  const totalDiposit = parseFloat(previousAmount) + parseFloat(newDiposit);
  console.log(totalDiposit);
  dipositTotal.innerText = totalDiposit;
  const balance = document.getElementById("blance");
  //   console.log(balance);
  const previousBalance = balance.innerText;
  const totalBalacne = parseFloat(previousBalance) + parseFloat(newDiposit);
  balance.innerText = totalBalacne;

  dipositAmount.value = "";
});

//widthdrow
document.getElementById("widthdrow").addEventListener("click", function () {
  //get corrent diposit
  const dipositTotal = document.getElementById("diposit-total");
  const correntDiposit = dipositTotal.innerText;
  //console.log(correntDiposit);
  //get withdrow
  const widthdrow = document.getElementById("widthdrow-amount");
  const withdrowAmount = widthdrow.value;
  var withdrowTotal = parseFloat(correntDiposit) - parseFloat(withdrowAmount);
  dipositTotal.innerText = withdrowTotal;
  //total balance
  const balance = document.getElementById("blance");
  const previousBalance = balance.innerText;
  var balanceTotal = parseFloat(previousBalance) - parseFloat(withdrowAmount);
  balance.innerText = balanceTotal;
  console.log(balance);
  const mainDiposit = document.getElementById("withdrow");
  const previousAmount = parseFloat(mainDiposit.innerText);
  //**** */
  const correntWidthrow = parseFloat(withdrowAmount);
  const totalWidthrow = previousAmount + correntWidthrow;
  mainDiposit.innerText = totalWidthrow;
  widthdrow.value = "";
  console.log(totalWidthrow);
  // alert(totalWidthrow);
});

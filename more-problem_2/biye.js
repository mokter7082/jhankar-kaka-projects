/*
fit =20 taka kore
chair ar jonno = 10 fit kat qty 3 
khat er joono = 15 
almary jonno 12      2 ta
*/

function calculation(chir, khat, almary) {
  var markePrice = 20;
  var tChirPrice = chir * markePrice;
  var tKhatPrice = khat * markePrice;
  var tAlmaryPrice = almary * markePrice;
  var tChirPrice = chir * markePrice;
  var totalAmount = tChirPrice + tKhatPrice + tAlmaryPrice;
  console.log(totalAmount);
}

var chir = 10;
var khat = 15;
var almary = 12;
var result = calculation(chir, khat, almary);
console.log("total lageb", result);

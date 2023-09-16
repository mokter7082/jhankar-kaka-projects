//product counting main function
function productQty(product, isClick, price) {
  const myInput = document.getElementById(product + "-number");
  const myValue = parseInt(myInput.value);
  if (isClick) {
    myInput.value = myValue + 1;
  } else if (myValue > 0) {
    myInput.value = myValue - 1;
  }
  document.getElementById(product + "-price").innerText = myInput.value * price;
  totalCalculation();
}
//product increment button
function phoneInrement() {
  productQty("phone", true, 1219);
}
//product decriment button
function phoneDecrement() {
  productQty("phone", false, 1219);
}
//case increment button
function caseInrement() {
  productQty("case", true, 59);
  //console.log("fsdf");
}
//case decriment button
function caseDecrement() {
  productQty("case", false, 59);
}

//getprice
function getPrice(product) {
  const phoneInput = document.getElementById(product + "-number");
  const phonePrice = parseInt(phoneInput.value);
  return phonePrice;
}
//total calculation function
function totalCalculation() {
  const phoneTotal = getPrice("phone") * 1219;
  const caseTotal = getPrice("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const text = subTotal / 10;
  const total = subTotal + text;
  document.getElementById("sub-total").innerText = subTotal;
  document.getElementById("tex").innerText = text;
  document.getElementById("total").innerText = total;
}

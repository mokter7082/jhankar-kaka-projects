//total function control form here
function totalCount() {
  //get best price from here
  const bestCost = document.getElementById("best-price");
  const bestCostInnerText = parseFloat(bestCost.innerText);
  //   console.log(bestPriceInnerText);
  //get memory price from here
  const memoryCost = document.getElementById("memory-cost");
  const memoryCostInnerText = parseFloat(memoryCost.innerText);
  //   console.log(memoryPriceInnerText);
  //get storage price from here
  const storageCost = document.getElementById("storage-cost");
  const storagCostInnerText = parseFloat(storageCost.innerText);
  //   console.log(storagPriceInnerText);
  const deliveryCost = document.getElementById("delivery-cost");
  const deliveryPriceInnerText = parseFloat(deliveryCost.innerText);
  //   console.log(deliveryCostInnerText);
  //get total and Stevekaku price from here
  const totalPrice = document.getElementById("total-price");
  const total = document.getElementById("stevTotal");
  //total price sum from here
  const totalSum =
    bestCostInnerText +
    memoryCostInnerText +
    storagCostInnerText +
    deliveryPriceInnerText;
  //   console.log(totalSum);
  totalPrice.innerText = totalSum;
  total.innerText = totalSum;
}

//Add extra Cost price from here re useable
function myCost(parseName) {
  const myCost = document.getElementById(parseName + "-cost");
  // console.log(memoryCost);
  const myCostInnerText = parseFloat(myCost.innerText);
  myCost.innerText = 180;
  //   console.log(myCostInnerText);
}

//memory price control from here
document.getElementById("memory-price").addEventListener("click", function () {
  myCost("memory");
  totalCount();
});

//One Tb Storage Cntrol cost Control from Here
const oneTbStorage = document.getElementById("oneTbStorage-price");
// console.log(oneTbStorage);
oneTbStorage.addEventListener("click", function () {
  myCost("storage");
  totalCount();
});
//512 Gb storage cost control here
function gbStorageCost() {
  const gbCost = document.getElementById("storage-cost");
  gbCost.innerText = 100;
  totalCount();
}
//Get Delivery Cost
function deliveryCost() {
  const myDeliveryCost = document.getElementById("delivery-cost");
  myDeliveryCost.innerText = 20;
  totalCount();
}
//Without Cost delivery function control from here
function withutCost(puspose) {
  const myC = document.getElementById(puspose + "-cost");
  myC.innerText = 0;
}
document
  .getElementById("withoutCost-memory")
  .addEventListener("click", function () {
    withutCost("memory");
    totalCount();
  });
document
  .getElementById("withoutCost-storage")
  .addEventListener("click", function () {
    withutCost("storage");
    totalCount();
  });
document
  .getElementById("withoutCost-delivery")
  .addEventListener("click", function () {
    withutCost("delivery");
    totalCount();
  });

//Discount with Copon And Steve kaku Control From here
function coponApply() {
  const myDiscount = document.getElementById("discount");
  const amount = document.getElementById("stevTotal");
  const totalAmount = parseFloat(amount.innerText);
  const discount = myDiscount.value;
  if (discount == "stevekaku") {
    var minisDis = totalAmount - (totalAmount * 20) / 100;
    amount.innerText = minisDis;
    myDiscount.value = "";
    // console.log(minisDis);
  } else {
    alert("you apply wrong copon");
  }
}

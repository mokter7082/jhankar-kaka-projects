const marsCost = 5000;
const moonCost = 3000;

// let marsQty = parseInt(document.getElementById("mars-qty").value);
// // console.log(marsQty);
// let moonQty = parseInt(document.getElementById("moon-qty").value);
//my funtion
function HandleQuentity(planet, operator) {
  //   console.log(operator);
  //get input value daynamicly
  let quentityInput = document.getElementById(planet + "-qty").value;
  //convart integer
  qeuentity = parseInt(quentityInput);
  //increment one by one
  if (operator === "plus") {
    qeuentity++;
  } else {
    if (qeuentity <= 0) {
      return;
    } else {
      qeuentity--;
    }
  }
  document.getElementById(planet + "-qty").value = qeuentity;
  //another function call
  claculationJurny(planet);
}

//CALCULATION FUCNTION
function claculationJurny(planet) {
  //get input value daynamicly
  let quentityInput = document.getElementById(planet + "-qty").value;
  //convart integer
  qeuentity = parseInt(quentityInput);
  if (planet === "mars") {
    const maesTotal = qeuentity * marsCost;
    updateUI(planet, maesTotal);
    //console.log(maesTotal);
  } else {
    const moonTotal = qeuentity * moonCost;
    updateUI(planet, moonTotal);
    // console.log(moonTotal);
  }
}
//UPDATE UI FUNCTION
function updateUI(planet, total) {
  console.log(total);
  const myUI = document.getElementById(planet + "-update");
  //const myUiText = myUI.innerText;
  myUI.innerText = total;
  updateTotal();
  //console.log(myUiText);
}
//UPDATE TOTAL
function updateTotal() {
  //get input value daynamicly
  let marseInput = document.getElementById("mars-qty").value;
  let moonInput = document.getElementById("moon-qty").value;
  const marseValue = parseInt(marseInput);
  const moonValue = parseInt(moonInput);
  console.log(marseValue, moonValue);
  //convart integer
  //   qeuentity = parseInt(quentityInput);
  //   totalField = marsUpdateText + moonUpdateText;
}

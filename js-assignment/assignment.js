//*=*=*number = 1 *=*=*\\
//***START SEER TO MON****//
function seerToMon(seer) {
  //check parameter type
  var type = typeof seer;
  //console.log(type);
  if (type == "number") {
    //peramiter ke variable ar moddhe rakhlam
    var getSeer = seer;
    //console.log(getSeer);
    var convertMon = getSeer / 40;
    return convertMon;
  } else {
    console.log("please give a number type value");
  }
}

const monResult = seerToMon(80);
console.log(monResult);
//***END SEER TO MON***//
//*=*=*number = 2 *=*=*\\
//***GET TOTAL SELES PRICE***//
function totalSales(tShirtPrice, pantPrice, shoesPrice) {
  if (
    typeof tShirtPrice == "number" &&
    typeof pantPrice == "number" &&
    typeof tShirtPrice == "number"
  ) {
    var tShirtSeles = 3;
    var pantSeles = 5;
    var shoesSeles = 3;
    //console.log(tShirtSeles);

    var tShirtTotalPrice = tShirtPrice * tShirtSeles;
    var pantTotalPrice = pantPrice * pantSeles;
    var shoesTotalPrice = shoesPrice * shoesSeles;
    //console.log(pantTotalPrice);
    var subTotal = tShirtTotalPrice + pantTotalPrice + shoesTotalPrice;
    return subTotal;
  } else {
    console.log("please give a number type value");
  }
}

//product price
let tShirtPrice = 100;
let pantPrice = 200;
let shoesPrice = 500;
const totalSelesResult = totalSales(tShirtPrice, pantPrice, shoesPrice);
console.log(totalSelesResult);
//***END TOTAL SELES PRICE***//

//*=*=*number = 3 *=*=*\\
//***TOTAL DELIVERY COST***//
function deliveryCost(tShirtQty) {
  //console.log(tShirtQty);
  if (typeof tShirtQty == "number") {
    if (tShirtQty <= 100) {
      var totalCost = tShirtQty * 100;
      return totalCost;
    } else if (tShirtQty <= 200) {
      const firstCoditon = 100 * 100;
      const restQty = tShirtQty - 100;
      //console.log(restQty);
      const scondTotalCost = restQty * 80;
      const fistCountSum = firstCoditon + scondTotalCost;
      return fistCountSum;
    } else {
      const firstCoditon = 100 * 100;
      const scondTotalCost = 100 * 80;
      const lastQty = tShirtQty - 200;
      //console.log(lastQty);
      const lastCountSum = lastQty * 50;
      //console.log(lastCountSum);
      const finalResult = firstCoditon + scondTotalCost + lastCountSum;
      return finalResult;
    }
  } else {
    console.log("please give a number type value");
  }
}

var totalDeliveryCost = deliveryCost(250);
console.log(totalDeliveryCost);
//END TOTAL DELIVERY COST

//*=*=*number = 4 *=*=*\\
var myFriend = ["Mokter", "kamal", "jamal", "atik", "tankira", "kisona"];
function perfectFriend(myFriend) {
  //console.log(typeof myFriend);
  if (typeof myFriend == "object") {
    for (var i = 0; i < myFriend.length; i++) {
      crLength = myFriend[i].length;
      if (crLength == 5) {
        console.log(myFriend[i]);
        break;
      }
    }
  } else {
    console.log("please give array type value");
  }
}
var bestFrient = perfectFriend(myFriend);

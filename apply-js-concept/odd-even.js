//GET EVEN NIMBER
function myEven(evenNum) {
  var myEven = evenNum % 2;
  if (myEven == 0) {
    return true;
  }
  return false;
}

var myEvernNuber = 4460;
var result = myEven(myEvernNuber);
console.log("my even(jor number) number ", result);

//get odd number

function myOdd(oddNum) {
  myOdd = oddNum % 2;
  if (myOdd != 0) {
    return true;
  }
  return false;
}

var myOddNumber = 23454;
var result = myOdd(myOddNumber);
console.log("my odd number", result);

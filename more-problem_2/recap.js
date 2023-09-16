function leargeNumber(numArr) {
  var lgNumber = 1;
  for (var i = 1; i < numArr.length; i++) {
    var element = numArr[i];
    //console.log(numArr[i]);
    if (element > lgNumber) {
      lgNumber = element;
    }
  }
  return lgNumber;
}

var arr = [23, 34, 3545, 6, 76, 7, 8, 98, 9];
var result = leargeNumber(arr);
console.log(result);

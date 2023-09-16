//FIVONNCCI CONCEPT
//0,1,1,,2,3,5,8,13,21,34,55
/*
 3rd = 2nd + 1st
 4th = 3rd + 2nd
 nth = (n-1)th + (n-2)th
 3-1 == 1
 3-2 ==1
*/
// const fivo = [0, 1];
// for (let i = 2; i <= 10; i++) {
//   fivo[i] = fivo[i - 1] + fivo[i - 2];
// }
//console.log(fivo);
//FUNCTIONAL FIVONACCHI

function getFivonacchi(fiNumber) {
  var type = typeof fiNumber;
  console.log(type);

  if (typeof fiNumber != type) {
    console.log("please enter your valid number");
  }
  let fivo = [0, 1];
  for (var i = 2; i < fiNumber; i++) {
    fivo[i] = fivo[i - 1] + fivo[i - 2];
  }
  return fivo;
}
var result = getFivonacchi('we');
console.log("my fivo number", result);

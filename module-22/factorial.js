//factoroal

// var factorial = 1;
// for (let i = 1; i < 7; i++) {
//   factorial = factorial * i;
//   //console.log(factorial);
// }
//console.log(factorial);

function factorial(i) {
  if (i == 1) {
    return 1;
  }
  return factorial(i - 1) * i;
}
console.log(factorial(6));

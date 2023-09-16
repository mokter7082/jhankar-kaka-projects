// sum = 0;
// for (var i = 1; i <= 6; i++) {
//   sum = sum + i;
//   console.log(i);
// }
// console.log(sum);

function sum(i) {
  if (i == 1) {
    return 1;
  }
  return i + sum(i - 1);
}
console.log(6);

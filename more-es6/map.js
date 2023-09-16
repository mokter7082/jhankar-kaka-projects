const numbers = [2, 3, 4, 6, 6, 3, 4, 2];

const number1 = [];
const dobleit = (number) => number * 2;
for (const number of numbers) {
  result = dobleit(number);
  number1.push(result);
}
// console.log(number1);
const outPut = numbers.map(dobleit);
console.log(outPut);

const numbers = [32, 3, 2, 32, 32, 32, 3, 23, 2, 32, 32, 3, 2];
// console.log(numbers);
const output = [];

const doboleIlt = (number) => number * 2;

// for (const number of numbers) {
//   result = doboleIlt(number);
//   output.push(result);
// }
// console.log(output);

const outPut = numbers.map(doboleIlt);
// console.log(outPut);
const firiends = [
  "Mokter Hossain",
  "Shakib Khan",
  "Salman Khan",
  "Moushomi",
  "Shabnur",
];

const arrLength = firiends.map((length) => length.length);
console.log(arrLength);

const friends = ["mokter", "akash", "alif", "nabik", "Tamim"];
// console.log(...friends);
const numbers = [3, 43, 43, 435, 5, 656, 5, 4, 54, 34, 3, 4343, 4, 3, 43];
const bigNumber = numbers.filter((number) => number > 20);

// console.log(bigNumber);
const products = [
  { name: "iphone 11maxpro", price: "80000", color: "black" },
  { name: "iphone7", price: "50000", color: "golden" },
  { name: "symphony", price: "12000", color: "red" },
];
const smallNumber = numbers.filter((smn) => smn < 10);
const product = products.filter((myProduct) => myProduct.color == "red");
// console.log(product);
const findProduct = product.find((fProduct) => fProduct.name == "iphone7");
console.log(findProduct);

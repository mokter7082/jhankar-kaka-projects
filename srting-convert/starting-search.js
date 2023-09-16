const products = [
  "Asus honda laptop",
  "asus mini Laptop",
  "dell latitute E5410 fire laptop",
  "Apple 11 Pro max ",
  "LG komdami phone",
];

const searching = "laptop";
const output = [];
for (const product of products) {
  if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
    output.push(product);
  }
}
console.log(output);

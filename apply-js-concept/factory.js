// let factories = 1;

// for (var i = 1; i < 10; i++) {
//   //console.log(i);
//   factories = factories * i;
// }
// console.log(factories);

function myFactoey(fNumber) {
  let storFactoey = 1;
  for (var i = 1; i < fNumber; i++) {
    storFactoey = storFactoey * i;
  }
  var factoryResult = storFactoey;
  return factoryResult;
}

var result = myFactoey(8);
console.log("our factory result", result);

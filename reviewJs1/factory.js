// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// 5! = 5 * 4 * 3 * 2 * 1

// GET FACTORIAL

var factory = 1;
for (let i = 1; i <= 7; i++) {
  //console.log(i);
  factory = factory * i;
}
console.log(factory);

//FUNCTIONAL FACTORIAL

function funFactory(fnumber) {
  var factory = 1;
  for (let i = 1; i <= fnumber; i++) {
    console.log(i);
    factory = factory * i;
  }
  return factory;
}

var result = funFactory(10);
console.log("functional factory is", result);

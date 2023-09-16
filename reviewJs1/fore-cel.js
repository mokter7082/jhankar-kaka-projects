//FAHRENHEIT TO CELSIUS

function forCelcus(ForNumber) {
  var forResult = (ForNumber - 32) * (5 / 9);
  console.log(forResult);
}

var result = forCelcus(80);
console.log(result);

//CELSIUS TO FAHRENHEIT
function celsiusFahr(selNumber) {
  var selResult = (selNumber * 9) / 5 + 32;
  console.log(selResult);
}

var result = celsiusFahr(12);
console.log(result);

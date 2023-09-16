var time = "10:15pm";
var bookPrice = 500;
var isWriteColor = false;

//ARRAY

var partnar = ["mokter", "jakir", "naim", "arif"];
//get array length
var partnarLength = partnar.length;
//value insert in array
partnar.push("kalo");
//delete last data from array
partnar.pop();
//condition
if (bookPrice < 200) {
  console.log("iam buy this book");
} else {
  console.log("amar kase ato taka nai");
}
//while loop
var i = 0;
while (i < 10) {
  i++;
}
//for loop
for (var i = 0; i < 10; i++) {}
//function
function inMoon(time) {
  if (time >= 19 && time <= 5) {
    return true;
  }
  return false;
}

var result = inMoon(21);
console.log(result);
//varibale diclar
//let variable could change
let price = 12;
prict = 12;

//const variable not naver change
const myName = "mokter";

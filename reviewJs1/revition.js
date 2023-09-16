//array
var studentName = ["Mokter", "Alok", "Shakib", "Rakib", "Tamim"];
console.log(studentName);
//get index of array
var getIndex = studentName.indexOf("Shakib");
console.log(getIndex);
//while loop
let c = 0;
while (c < 10) {
  console.log(i);
  c++;
}
//for loop
for (let i = 0; i < 20; i++) {
  var count = i;
  console.log("my number is", count);
}

//looping in array

//var i = 0
for (var i = 0; i < studentName.length; i++) {
  console.log(studentName[i]);
}

function inchTofeet(feNumbrt) {
  var getFeet = feNumbrt / 12;
  return getFeet;
}

var result = inchTofeet(120);
console.log(result);

//Odd Even

function oddEven(oddNumber) {
  var oddResult = oddNumber % 2;
  if (oddResult == 0) {
    return true;
  }
  return false;
}

var result = oddEven(156);
console.log("my odd number is", result);

//lear year

function leapYear(leapNumber) {
  var leapResult = leapNumber % 2;
  if (leapResult == 0) {
    return true;
  }
  return false;
}

var result = leapYear(1999);
console.log("my leap number is", result);

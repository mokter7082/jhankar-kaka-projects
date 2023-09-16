function makeRed() {
  document.body.style.backgroundColor = "red";
}
const mkBl = document.getElementById("make-blue");
mkBl.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//anunimus funtion
const makegreen = document.getElementById("make-green");
makegreen.onclick = function () {
  document.body.style.backgroundColor = "green";
};

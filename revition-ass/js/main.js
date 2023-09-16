const topPlayers = document.getElementsByClassName("section-title");
for (const topPlayer of topPlayers) {
  // console.log(topPlayer);
  topPlayer.style.color = "rgb(200, 0, 0)";
}
const playerNames = document.getElementsByTagName("h3");
// console.log(playerNames);
for (const playername of playerNames) {
  // console.log(playername);
  playername.style.backgroundColor = "rgb(100, 120, 120)";
  playername.style.padding = "15px";
  playername.style.borderRadius = "15px";
}

//create element and add
const li = document.createElement("li");
li.innerText = "Blog-5";
const ul = document.getElementById("blog-list");
ul.appendChild(li);
//increment value
function valueIncrement() {
  const myButton = document.getElementById("btn");
  myInout = document.getElementById("increment-number");
  var myValue = parseInt(myInout.value);
  myInout.value = myValue + 1;
  if (myValue == 5) {
    myButton.style.display = "none";
  }
}

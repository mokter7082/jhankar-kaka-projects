const loadBuddy = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddy(data));
};
loadBuddy();

const displayBuddy = (buddys) => {
  const div = document.getElementById("buddy");
  const myBuddy = buddys.results;
  for (const budy of myBuddy) {
    console.log(budy);
    const p = document.createElement("p");
    p.innerText = `name: ${budy.name.first} ${budy.name.last}`;
    div.appendChild(p);
  }
};

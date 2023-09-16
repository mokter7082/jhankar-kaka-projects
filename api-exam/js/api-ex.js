// function loadKanye() {
//   fetch("https://api.kanye.rest/")
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// }
const loadKanye = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayKanye(data));
};

const displayKanye = (quote) => {
  const bk = document.getElementById("quote");
  const p = document.createElement("p");
  p.innerText = quote.quote;
  bk.appendChild(p);
};

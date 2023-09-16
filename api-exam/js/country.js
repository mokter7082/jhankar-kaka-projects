const loadCountries = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (countries) => {
  const mainDiv = document.getElementById("contrys");
  //   for (const country of countries) {
  //     console.log(country);
  //   }(
  countries.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("list");
    // const h3 = document.createElement("h3");
    // const p = document.createElement("p");
    // h3.innerText = country.name;
    // p.innerText = country.capital;
    // div.appendChild(h3);
    // div.appendChild(p);
    // mainDiv.appendChild(div);
    // console.log(country);
    div.innerHTML = `
      <h3>${country.name}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountryName('${country.name}')">Details</button
      `;
    mainDiv.appendChild(div);
  });
};

const loadCountryName = (name) => {
  const url = `https://restcountries.eu/rest/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data[0]));
};

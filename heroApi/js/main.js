const getPlayer = () => {
  const searchInput = document.getElementById("search-input");
  searchText = searchInput.value;
  const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data));
};

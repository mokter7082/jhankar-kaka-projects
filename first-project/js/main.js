// const user = {
//   id: 1,
//   name: "Mokter Hossain",
//   email: "mokter7082@gmail.com",
//   address: "dhaka-banani",
// };
// const stringUser = JSON.stringify(user);
// const jsonParse = JSON.parse(stringUser);
// console.log(jsonParse);
// console.log(stringUser);

function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => displayUsers(data));
}
function displayUsers(data) {
  const ul = document.getElementById("list");
  //   const li = document.getElementById("li");
  for (const user of data) {
    const li = document.createElement("li");
    li.innerText = `Name: ${user.name} and Email: ${user.email}`;
    ul.appendChild(li);
    console.log(user.name);
  }
}

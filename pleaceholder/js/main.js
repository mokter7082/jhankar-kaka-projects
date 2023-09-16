const loadUsers = () => {
  const url = `https://jsonplaceholder.typicode.com/users`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayUser(data));
  //   const res = await fetch(url);
  //   const data = await res.json();
  //   console.log(data);
};
//display all users function
const displayUser = (users) => {
  console.log(users);
  const ul = document.getElementById("myUsers");
  ul.innerText = "";
  for (user of users) {
    console.log(user);
    const li = document.createElement("li");
    li.innerText = `Name is ${user.name} and my username id ${user.username} and email ${user.email}`;
    ul.appendChild(li);
  }
};

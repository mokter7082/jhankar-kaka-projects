// console.log("mokter Hossain");
function myPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}
myPost();
function displayPost(posts) {
  const mySection = document.getElementById("myPost");
  for (const post of posts) {
    const div = document.createElement("div");
    div.classList.add("post");
    div.innerHTML = `
    <h3>${post.title}</h3>
    <p>${post.body}</p>
      `;
    mySection.appendChild(div);
  }
}

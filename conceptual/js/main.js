//get images div with id
const firstImage = document.getElementById("first");
const scondImage = document.getElementById("second");
const thirdImage = document.getElementById("third");
const free = document.getElementById("free");
const express = document.getElementById("express");
const shiping = document.getElementById("shiping");
firstImage.addEventListener("click", function () {
  const repImage = document.getElementById("art");
  const description = document.getElementById("desc");
  const price = document.getElementById("price");
  const total = document.getElementById("total");

  description.innerText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos aut accusamus, ipsam iusto illum error nisi! Deserunt facilis ratione nobis!";
  price.innerText = "750";
  //   console.log(repImage);
  repImage.src = "images/1.jpg";
  total.innerText = price.innerText;
});
scondImage.addEventListener("click", function () {
  const repImage = document.getElementById("art");
  const description = document.getElementById("desc");
  const photoPrice = document.getElementById("price");
  const total = document.getElementById("total");
  description.innerText =
    "Scond lore ipsum jotum Scond lore ipsum jotum Scond lore ipsum jotumv Scond lore ipsum jotum Scond lore ipsum jotum Scond lore ipsum jotumv ";
  photoPrice.innerText = "500";
  repImage.src = "images/2.jpg";
  total.innerText = price.innerText;
});
thirdImage.addEventListener("click", function () {
  const repImage = document.getElementById("art");
  const description = document.getElementById("desc");
  const price = document.getElementById("price");
  const total = document.getElementById("total");
  description.innerText =
    "Third lore ipsum jotum Scond lore ipsum jotum Scond lore ipsum jotumv Scond lore ipsum jotum Scond lore ipsum jotum Scond lore ipsum jotumv ";
  price.innerText = "550";
  //   console.log(repImage);
  repImage.src = "images/3.jpg";
  total.innerText = price.innerText;
});
//free button control here
free.addEventListener("click", function () {
  shiping.innerText = "5";
});
express.addEventListener("click", function () {
  shiping.innerText = "30";
});

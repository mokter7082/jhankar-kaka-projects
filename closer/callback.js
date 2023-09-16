function morming(name) {
  console.log(name);
  name();
}
function greedMorning() {
  console.log("Good Morning");
}
morming(greedMorning);

let personList = [
  "mokter",
  "naim",
  "amin",
  "akask",
  "mokter",
  "naim",
  "hasan",
  "kalo",
];
function removeDublicate(person) {
  const unique = [];
  //   for (var i = 0; i < person.length; i++) {
  //     //console.log(person[i]);
  //     var element = person[i];
  //   }

  for (const element of person) {
    if (unique.indexOf(element) == -1) {
      unique.push(element);
    }
  }
  return unique;
}
let result = removeDublicate(personList);
console.log(result);

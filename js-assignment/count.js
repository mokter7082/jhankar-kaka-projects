const friends = ["Rafi", "Shofiq", "Jabbar", "Azgar", "asdfg", "Bakkar"];
function perfectFriend(friend) {
  for (let i = 0; i <= friends.length; i++) {
    const element = friends[i];
    if (element.length == 5) {
      return element;
    }
  }
  return "There is no five-charecter name.";
}
const myBestFriend = perfectFriend(friends);
console.log(myBestFriend);

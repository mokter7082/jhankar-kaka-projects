function myFriends(friends) {
  let mega = friends[0];

  for (const friend of friends) {
    if (friend.length > mega.length) {
      mega = friend;
    }
  }
  console.log(mega);
}

var friend = ["mok", "shamim", "tarek", "shorif"];
var result = myFriends(friend);

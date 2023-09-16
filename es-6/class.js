class Support {
  name;
  address;
  designation = "Suport Web dev";
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
  startSession() {
    console.log("Start a session");
  }
}
const amir = new Support("Mokter", "banani");
console.log(amir);

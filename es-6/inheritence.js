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
// const amir = new Support("Mokter", "banani");
// console.log(amir);
class StudentCare {
  name;
  address;
  designation = "we are aring Student";
  constructor(name) {
    this.name = name;
  }
  buildRouting() {
    console.log(this.name, "biuld a routin");
  }
}

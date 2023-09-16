const Student = {
    name:"Mokter Hossain",
    email:"mokter7082@gmail.com",
    phone:"01610687014",
    isMarred: function () {
        console.log(this.name," is unmarred");
    }
}
console.log(Student.isMarred());
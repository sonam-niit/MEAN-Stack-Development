//function constructor

function Employee(name, designation, yearOfBirth){
    this.name=name;
    this.designation=designation;
    this.yearOfBirth=yearOfBirth;

}

Employee.prototype.caculateAge = function(){
    console.log("The current age of employee is "+(2021-this.yearOfBirth))
}

//create employees object

let emp1= new Employee("Avisek","Developer",2001);

let emp2= new Employee("Vivekanand","Tester",2003);

let emp3= new Employee("Pooja","Intern",2006);

//display employees object

console.log(emp1);
console.log(emp2);
console.log(emp3);

emp1.caculateAge();
emp2.caculateAge();
emp3.caculateAge();
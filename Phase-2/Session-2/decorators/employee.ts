export class Employee{
    private empCode:number;
    private empName:string;

    constructor(code:number,name:string){
        this.empCode=code;
        this.empName=name;
    }

    displayEmployee(){
        console.log("Employee Code: "+this.empCode
        +" "+"Employee Name: "+this.empName);
    }
}

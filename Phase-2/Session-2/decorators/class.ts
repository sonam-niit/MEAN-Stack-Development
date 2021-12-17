class User{
    private userId:number;
    private userName:string;

    constructor(id:number,name:string){
        this.userId=id;
        this.userName=name;
    }

    display():void{
        console.log("Id: "+this.userId);
        console.log("Nmae: "+this.userName);
    }
}

//object creation
let user1:User= new User(101,'Sonam Soni');
user1.display();

let user2:User= new User(102,'Akshita');
user2.display();
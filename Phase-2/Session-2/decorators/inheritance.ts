let array=[1,2,3,4,2,5,6,2,7,8];

class count{
    x=25;
    count(){
        console.log(array.filter(x=>x===2).length)
    }
}

class Sum extends count
{
    Sum(){
        let sum=0;
        for(let i=0;i<array.length;i++){
            sum=sum+array[i];
        }

        console.log("sum is "+sum);
    }
}

let obj=new Sum(); //object of sum class //child class 

obj.Sum(); // calling method of same class
obj.count(); // calling method of parent class
console.log("property of parent class "+obj.x);
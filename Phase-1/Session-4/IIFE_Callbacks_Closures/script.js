//IIFE
const empId = (function(){
    let count=0;
    return function(){
        count++;
        //return `emp${count}`;
        return 'emp'+count;
    }
})();

//call IIFEs
console.log("New Employee Ids ");
console.log("Vivekanand "+empId());
console.log("Mrunalini "+empId())
console.log("Preeti "+empId())

//callbacks
function fullname(firstname,lastname,callback){
    console.log("My name is "+firstname+" "+lastname);
    callback(firstname);
}

function welcome(name){
    console.log("Welcome "+name);
}

fullname("sonam","soni",welcome);
fullname('alex','wilson',welcome);

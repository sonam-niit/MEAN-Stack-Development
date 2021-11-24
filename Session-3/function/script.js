
//parameterized function
function myFunction(num1,num2){
    var a=num1+num2;
    var b=num1*num2;

    return a+b;
}

//calling function
result =myFunction(2,3);
console.log("result " +result)

//calling function in console directly
console.log("Result "+ myFunction(3,4));

function toCelcious(f){
    return (5/9) * (f-32);
}

console.log("The tempreture is "+toCelcious(60));

function display(value){
    console.log(value);
}

function add(num1,num2,callback){
    result = num1+num2;
    callback(result);
}
//pass display function as argument
add(45,45,display);

//function return function

function test(fname,lname){
    return function(){ console.log( "Welcome "+fname+" "+lname)}
}
//test function returning function as a result
result=test("sonam","soni");
//to use it call the result again
result();

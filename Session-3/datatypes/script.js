//primitive datatypes
var number=10 //number datatype
var name1 = "Sonam Soni" //string

var condition = false; //boolean
var data=null; // null

//display data
console.log("number "+number);
console.log("name "+name1);
console.log("condition "+condition);
console.log("data "+data);

//get data type
console.log(number,typeof number);
console.log(name1 , typeof name1);
console.log(condition, typeof condition);
console.log(data,typeof data);
//non primitive datatypes
var cars= ["BMW", "Merc", "Volvo"];//Array
var user={firstName:"Sonam",lastName:"Soni",email:"sonam@gmail.com"};//object

console.log(cars,typeof cars);
console.log(user,typeof user);

console.log("2nd element of array "+ cars[1]);
console.log("Email Id "+user.email);
console.log("User FirstName "+user.firstName)

//null and undefined
console.log(null, typeof null);
console.log(undefined, typeof undefined)
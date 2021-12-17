var readline=require('readline-sync');

console.log('Taking inputs from user');

var name= readline.question("What is your name? ");
var age= readline.question("What is your age? ");
var email= readline.question("What is your email address? ");
var message= readline.question("Provide your feedback message ");

console.log('After Taking inputs from user lets display')
console.log('----------------------------------------------------------');
console.log('Hi '+name+', You have logged in successfully.');
console.log('We will use '+age+' for furture verification');
console.log('Your registered Email Id: '+email);
console.log('Your feedback message '+message);
console.log('We will send your message to our team. Are you sure?');
var input= readline.question('Select YES(y) or NO(n):')

if(input=='y')
console.log('Message sent successfully')
else if(input=='n')
console.log('Process terminated')
else
console.log('Please try again....!!!')
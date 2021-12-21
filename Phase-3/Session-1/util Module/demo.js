var util= require('util');

var txt='Welcome %s , Your Id is %d';

var result=util.format(txt,'Sonam','32518');

console.log(result);
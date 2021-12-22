
const path=require('path');
const fs= require('fs');

console.log('Using __dirname');
console.log(path.join(__dirname,'testDir'));
var data=fs.readFileSync(path.join(__dirname,'data.txt'));

console.log(data.toString());
//require resolve

console.log('Using require.resolve(): ')
console.log(require.resolve('./data.txt'));

var data1= fs.readFileSync(require.resolve('./data.txt'));
console.log(data1.toString());
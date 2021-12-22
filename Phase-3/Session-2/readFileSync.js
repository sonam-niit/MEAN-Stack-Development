const fs= require('fs');
console.log('File reading..')

const data= fs.readFileSync('demo.txt');

console.log(data.toString())

console.log('file reading completed');

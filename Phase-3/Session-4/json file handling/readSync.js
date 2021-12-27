const fs= require('fs');

const data= fs.readFileSync('users.json');

console.log(JSON.parse(data));
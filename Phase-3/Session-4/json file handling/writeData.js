const fs= require('fs');

let user= {
    "id":"1015",
    "fname":"darshan",
    "lname":"d",
    "email":"d@gmail.com"
}

fs.writeFileSync('data.json',JSON.stringify(user));

console.log("data written to your file");
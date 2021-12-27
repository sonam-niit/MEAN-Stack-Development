const fs= require('fs');

fs.readFile('users.json','utf-8',(err,data)=>{

    if(err)
    console.log("error "+err)

    console.log(JSON.parse(data));
});

console.log('task completed');


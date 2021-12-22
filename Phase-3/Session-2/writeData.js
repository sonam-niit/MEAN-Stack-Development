const fs= require('fs');

// fs.writeFile('demo.txt',"This is my test data",'utf-8',
// (err,fd)=>{
//     if(err)
//     {
//         console.log(err);
//     }
//     console.log("Data written to the file successfully");
// })

//write data in sync

fs.writeFileSync('data.txt',"this is newly added info using sync method");

console.log('data written successfully');
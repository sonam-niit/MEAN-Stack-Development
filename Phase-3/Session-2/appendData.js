const fs= require('fs');

// fs.appendFile('data.txt','new data appended',(err)=>{
//     if(err)
//         console.log('error '+err)
//     else
//         console.log('data appended successfully');
// })

fs.appendFileSync('data.txt',"appending with sync.\n");

console.log('data appended successfully');
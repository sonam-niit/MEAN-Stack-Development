const fs= require('fs');
console.log('File reading..')
fs.readFile('demo.txt','utf-8',(err,data)=>{
    
    if(err)
    {
        console.log('Error '+err);
    }

    console.log(data.toString());
})

console.log('file reading completed');

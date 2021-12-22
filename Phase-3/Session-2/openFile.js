const fs= require('fs');

fs.open('demo.txt','w',(err,fd)=>{
    if(err)
    {
        console.log('Error ocured while opening a file '+err)
    }

    console.log('File Opened');
    
    console.log(fd);

    fs.close(fd,(err)=>{
        if(err)
         console.log("Error "+err);
        console.log('file closed');
    })
})
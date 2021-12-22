const fs=require('fs');

// fs.unlink('demo.txt',function(err){
//     if(err)
//      console.log(err);

//      console.log('File deleted successfully..!');
// })

fs.unlinkSync('data.txt');

console.log('file deleted successfully.')
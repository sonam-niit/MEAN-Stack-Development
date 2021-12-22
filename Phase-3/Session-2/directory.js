const fs= require('fs');

const dirName="testDir";

try{
    if(!fs.existsSync(dirName))
    {
       fs.mkdirSync(dirName)
    }
    else{
        throw new Error('Directory Already exist...!!')
    }
}
catch(err)
{
    console.log("Error "+err)
}
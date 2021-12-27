const express= require('express');
const path = require('path');

const app= express();

app.use(express.static(path.join(__dirname,'common')))

app.get('/',(req,res)=>{
    res.send("<a href='home.html'>Home</a>");
})

app.listen(3000,()=>{
    console.log('App started on port number 3000');
})
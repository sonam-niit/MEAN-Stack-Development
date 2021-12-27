const express= require('express');

const app= express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/login',(req,res)=>{
    res.send('This is my login page');
})

app.listen(3000,()=>{
    console.log('App started on port number 3000');
})
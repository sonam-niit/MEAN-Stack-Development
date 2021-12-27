var express= require('express');
var app= express();

app.set('view engine','jade')

app.get('/',(req,res)=>{
    res.render('sample');
})

app.listen(3000,()=>{
    console.log('server is running on port number 3000')
})
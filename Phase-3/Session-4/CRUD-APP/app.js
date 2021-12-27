const express= require('express');
const productController= require('./controller')
const server= express();

server.get("",(req,res)=>{
    res.end('Hello from express');
})

server.use("/api/product",productController);

server.listen(3000,()=>{
    console.log('server listening on port no 3000');
})
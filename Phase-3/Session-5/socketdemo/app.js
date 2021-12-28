var express= require('express');
var app= express();

var http = require('http');
var server= http.Server(app);

var socket= require('socket.io');
var io= socket(server);

server.listen(3000,()=>{console.log('Server Started')});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
})

io.on('connection', (socket)=>{
    console.log('client connected');
    //sent message from server to client
    socket.emit('news',{hello:'Hello World'});
    //receive message from client to server
    // socket.on('client message',(data)=>{
    //     console.log(data);
    // })
})
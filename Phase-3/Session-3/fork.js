var {fork}= require('child_process');

var child= fork(__dirname+'/test.js');

child.on('message',function(m){
    console.log('Parent:message from child '+m.hello)
})

child.send({hello:' from parent'});

child.on('close',(code)=>{
    console.log('process exited with code '+code)
})
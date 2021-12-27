process.on('message',(m)=>{
    console.log('Child: message from Parent: ',m.hello);
})

process.send({hello:'from child Process'});
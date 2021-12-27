const {spawn}= require('child_process');

const child= spawn('dir',['F:\ZeOmega'],{shell:true});

child.stdout.on('data',(data)=>{
    console.log('Standard Output '+data);
});

child.stderr.on('data',(data)=>{
    console.log('Standard Error '+data);
});

child.on('close',(code)=>{
    console.log(`Child Process exited with code ${code}`);
});
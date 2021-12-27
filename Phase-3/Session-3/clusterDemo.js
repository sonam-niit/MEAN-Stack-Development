const cluster= require('cluster');
const http= require('http');
const os= require('os');

const noOfCpus= os.cpus().length;
//console.log(noOfCpus);

if(cluster.isMaster)
{
    masterProcess();
}
else{
    childProcess();
}

function masterProcess()
{
    console.log('Master '+process.pid+" is running");

    for(let i=0;i<noOfCpus;i++)
    {
            console.log('Forking process '+i);
            cluster.fork();
    }
    process.exit();
}

function childProcess()
{
    console.log('Worker started '+process.pid+' and finished');

    process.exit();
}
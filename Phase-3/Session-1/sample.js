function test1()
{
    console.log('Function 1 started');
    setTimeout(()=>{
        console.log('Function 1 completed')
    },2000)
}

function test2()
{
    console.log('Function 2 started');
    setTimeout(()=>{
        console.log('Function 2 completed')
    },1000)
}

function test3()
{
    console.log('Function 3 started');
    setTimeout(()=>{
        console.log('Function 3 completed')
    },1500)
}

test1()
test2()
test3()

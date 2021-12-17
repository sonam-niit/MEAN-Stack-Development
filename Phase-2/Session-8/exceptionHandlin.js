function divide(x,y)
{
    if(y==0)
        throw new Error('can not divide by Zero');
    else   
        console.log("Division is "+x/y);
}
//handle the code which throws exception
try {
    divide(10,0); 
} catch (error) {
    console.log("Error Occured "+error)
}

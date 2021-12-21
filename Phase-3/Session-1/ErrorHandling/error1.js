//throw error using Error class
function check(age)
{
    if(age<18)
    {
        try{
            throw new Error('Not Valid Age');
        }
        catch(err)
        {
            console.log('Error Occured '+err)
        }
    }
    else
        console.log("Valid");
}

check(17);
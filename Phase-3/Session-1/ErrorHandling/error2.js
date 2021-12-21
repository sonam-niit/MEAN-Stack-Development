class NotValidAge extends Error
{
    constructor(arg)
    {
        super(arg);
    }
}

//throw error using custom Error class
function check(age)
{
    if(age<18)
        throw new NotValidAge('You can not vote..!!');
    else
        console.log("Valid");
}

check(17);


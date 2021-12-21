const superagent= require('superagent');
superagent.get('https://jsonplaceholder.typicode.com/users')
.query({'email':'Sincere@april.biz'})
.end((err,res)=>{
    if(err){
        return console.log(err);
    }
    
    console.log(res.body);
    
})
const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/Simplilearn',{useNewUrlParser:true},(error)=>{
    if(!error)
    {
        console.log("connected....")
    }
    else{
        console.log('Error while connecting to database '+error)
    }
})

const course= require('./people.model');
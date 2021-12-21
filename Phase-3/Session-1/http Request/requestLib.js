var request=require('request');

request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',{json:true},(err,res,body)=>{

    if(err){
        console.log("Error "+err)
    }

    console.log(body.url);
    console.log(body.copyright);
    console.log(body.explanation);
})
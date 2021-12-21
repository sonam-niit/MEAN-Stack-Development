const axios=require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(resp=>{
    console.log(resp.data.url);
    console.log(resp.data.explanation);
})
.catch(error=>{
    console.log("Error Ocuured "+error);
})
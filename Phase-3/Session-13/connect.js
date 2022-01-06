var mongo= require('mongodb');

var mongoclient= mongo.MongoClient;

var url= "mongodb://localhost:27017/";

mongoclient.connect(url,(err,conn)=>{
    if(err)
    console.log("error");
    else{
        console.log("Connected");
        var db=conn.db('sonam');
        db.collection('items').find({item:"pen"}).toArray(function(err,result){
            if(err) throw err;

            console.log(result);
            conn.close();
        })

    }
})
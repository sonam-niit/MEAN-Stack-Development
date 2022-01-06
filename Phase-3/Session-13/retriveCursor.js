

var mongoClient= require('mongodb').MongoClient;

var url='mongodb://localhost:27017/Simplilearn';

mongoClient.connect(url,(err,client)=>{
    if(err) throw err;

    const db= client.db('Simplilearn');
    var cursor= db.collection('peoples').find();

    cursor.forEach((doc)=>{
        console.log(doc);
    })
})
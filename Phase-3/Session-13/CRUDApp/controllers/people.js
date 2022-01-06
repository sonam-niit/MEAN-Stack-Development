const express= require('express');
const mongoose = require('mongoose');

const router= express.Router();

const PeopleModel = mongoose.model("People");

router.get("/add",(req,res)=>{
    res.render('add');
});

router.get("/list",(req,res)=>{
    PeopleModel.find((err,docs)=>{
        if(!err)
        {
            // console.log(docs);
            // res.status(200).send(docs);
            res.render("list",{data:docs})
        }
    });
});

router.post("/add",(req,res)=>{
    console.log(req.body)
    var people = new PeopleModel();
    people.fname= req.body.fname;
    people.salary= req.body.salary;
    people.mno= req.body.mno;
    
    people.save((err,doc)=>{
        if(!err){
            //console.log("Document Inserted "+doc)
           //res.status(200).send(doc);
           res.redirect("/people/list");
        }
        else
        {
            console.log("Error while inserting a doc "+err)
        }
    })
});

module.exports= router;
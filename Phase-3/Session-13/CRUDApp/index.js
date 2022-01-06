const connection= require('./models');
const express= require('express');
const bodyparser= require('body-parser');
const expresshandlebars= require("express-handlebars")
const application= express();
const Handlebars= require('handlebars');
const {allowInsecurePrototypeAccess}= require('@handlebars/allow-prototype-access');

const path= require('path');

const PeopleController= require('./controllers/people');

application.set('views',path.join(__dirname+"/views/"));

application.engine("hbs",expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutDir:__dirname+"/views/layouts",
    handlebars:allowInsecurePrototypeAccess(Handlebars)
}))

application.set("view engine","hbs");

application.use(bodyparser.json());
application.use(bodyparser.urlencoded({extended:true}))

application.get("/",(req,res)=>{
    res.render("<h1>Welcome to Simplilearn</h1>");
})

application.use("/people",PeopleController);

application.listen('3000',()=>{
    console.log('server started');
})
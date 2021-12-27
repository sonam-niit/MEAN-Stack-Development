const express= require('express');
const Product = require('./product');

const router= express.Router();

//products: Product[10]=[];
router.get("",(req,res)=>{
    res.status(200).send("Welcome user");
});

router.post("");

router.put("");

router.delete("");

module.exports= router;
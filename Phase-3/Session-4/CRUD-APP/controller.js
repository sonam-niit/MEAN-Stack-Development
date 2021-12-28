const express= require('express');
const Product = require('./product');

const router= express.Router();

products: Product[10]=[];
router.get("",(req,res)=>{
    res.status(200).send(this.products);
});

router.post("", (req,res)=>{
    if(!this.products)
    {
        this.products=[];
    }
    const newProduct= new Product(req.body.name,req.body.price);
    this.products.push(newProduct);
    res.status(200).send(this.products);
});

//update data
router.put("",(req,res)=>{
    for(let i=0;i<this.products.length;i++)
    {
        if(req.body.name== this.products[i].name)
        {
            this.products[i].price= req.body.price;
            break;
        }
    }
    res.status(200).send(this.products);
});

router.delete("",(req,res)=>{
    var productIndex= this.products.indexOf(p=>p.name==req.body.name);
    this.products.splice(productIndex,1);

    res.status(200).send(this.products);
});

module.exports= router;
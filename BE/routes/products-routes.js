const { Router } = require('express');
const express=require('express');
const router=express.Router();
const UserModel= require('../models/ProductModel.js');

router.post('/add',
    function(req, res) {
        let newDocument ={
            "name": req.body.brand,
            "price": req.body.price,
            "picture":req.body.color
        };

        ProductModel
        .create(newDocument)
        // If MongoDB creates document succesfully, then...
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/registration error', error);

                res.send('An error occured');
            }
        )
}
);

router.post( '/find',
    function(req, res) {
        ProductModel
        .find(
            {"name":req.body.firstName}
        )
        .then(
            function(dbDocument){
                res.json(dbDocument)
            }
        )
        .catch(
            function(error){

                console.log('/findproduct error',error);
                res.send('An error occured');

            }
        )
}

);

module.exports=router;
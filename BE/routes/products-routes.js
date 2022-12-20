const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary').v2;
const ProductModel = require('../models/ProductModel.js');

router.post('/add',
    function(req, res) {
        let newDocument ={
            "name": req.body.name,
            "price": req.body.price,
            "picture":req.body.picture
        };
       
        ProductModel
        .findOne( { name: newDocument['name']} )
        // If MongoDB creates document succesfully, then...
        .then(
            async function (dbDocument) {
                // If avatar file is included...
                if( Object.values(req.files).length > 0 ) {

                    const files = Object.values(req.files);
                    
                    
                    await cloudinary.uploader.upload(
                        files[0].path,
                        (cloudinaryErr, cloudinaryResult) => {
                            if(cloudinaryErr) {
                                console.log(cloudinaryErr);
                                res.json(
                                    {
                                        status: "not ok",
                                        message: "Error occured during image upload"
                                    }
                                )
                            } else {
                                // Include the image url in newDocument
                                newDocument.picture = cloudinaryResult.url;
                                console.log('newDocument.picture', newDocument.picture)
                            }
                        }
                    )
                };

                ProductModel
                .create(newDocument)
                // If successful...
                .then(
                    function(createdDocument) {
                        // Express sends this...
                       res.json({
                           status: "ok",
                           createdDocument
                        });
                    }
                )
                // If problem occurs, the catch the problem...
                .catch(
                    function(dbError) {
                        // For the developer
                        console.log('An error occured during .create()', dbError);

                        // For the client (frontend app)
                        res.status(503).json(
                            {
                                "status": "not ok",
                                "message": "Something went wrong with db"
                            }
                        )
                    }
                )

                
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
            req.product
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
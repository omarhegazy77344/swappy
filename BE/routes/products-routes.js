const express = require('express');
const router = express.Router();

const cloudinary = require('cloudinary').v2;
const ProductModel = require('../models/ProductModel.js');

router.post('/add',
    function(req, res) {
        let newDocument ={
            "name": req.body.name,
            "price": req.body.price,
            "picture":req.body.picture,
            "type":req.body.type,
            "room":req.body.room,
            "location":req.body.location,
            "conditon":req.body.conditon,
            "usage":req.body.usage,
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


router.put('/update',
    async   function(req, res) {

        let updates = {}

        if (req.body.name){ 
            updates['name'] = req.body.name 
        };
        if (req.body.price) {
            updates['price'] = req.body.price;
        };
        if (req.body.type){ 
            updates['type'] = req.body.type 
        };
        if (req.body.room) {
            updates['room'] = req.body.room;
        };  
        if (req.body.location){ 
            updates['location'] = req.body.location 
        };
        if (req.body.conditon) {
            updates['conditon'] = req.body.conditon;
        };
        if (req.body.usage) {
            updates['usage'] = req.body.usage;
        };
        if( Object.values(req.files).length > 0 ) {

            const files = Object.values(req.files);
            
            
            // upload to Cloudinary
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
                        // Include the image url in formData
                        updates['picture'] = cloudinaryResult.url;
                    }
                }
            )
        };
    
       

        

        ProductModel
        .findOneAndUpdate(
            {
                "_id": req.body._id
            },
            {
                $set: updates
            },
            {
                new: true
            }
        )
        .then(
           
            function(dbDocument) {
            
                res.json(dbDocument)

            }
        )
        .catch(
            function(error) {
                console.log('/users/update error', error);
                res.send('An error occured');
            }
        )

    }
);

router.post('/findone',
    //passport.authenticate('jwt', {session: false}),
    function(req, res) {
        ProductModel
       .findById(req.body._id)
      // .find(req.user)
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {

                console.log('/find error', error);

                res.send('An error occured');

            }
        )
    }
);
module.exports=router;
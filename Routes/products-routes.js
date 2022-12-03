const express = require('express');
const router = express.Router();

const ProductModel = require('../models/ProductModel.js');


router.get('/listing',
    function(req,res){
        ProductModel
        .find({})
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        .catch(
            function(error) {
                console.log('/findproduct error', error);

                res.send('An error occured');
            }
        );
    }
)


// http://localhost:3001/products/add
router.post('/add',
    function(req, res) {

        // Receive data for MongoDB
        let newDocument = {
            "type": req.body.type,
            "model": req.body.model,
            "price": req.body.price,
            "color": req.body.color
        }

        // Create the document in MongoDB
        ProductModel
        .create(newDocument)
        .then(
            function(dbDocument) {
                // Send the document to client
                res.json(dbDocument)
            }
        )
        // Otherwise, if error occurs catch it...
        .catch(
            function(error) {
                console.log('/addproduct error', error);

                res.send('An error occured');
            }
        );
    }
);


// http://localhost:3001/products/update
router.put(
    '/update',
    function(req, res) {

        let updates = {}

        if (req.body.model){ 
            updates['model'] = req.body.model 
        };
        if (req.body.type) {
            updates['type'] = req.body.type;
        };
        if (req.body.price) {
            updates['price'] = req.body.price;
        };
        if (req.body.color) {
            updates['color'] = req.body.color;
        };
        ProductModel
        .findOneAndUpdate(
            {
                "ID": req.body.ID
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



module.exports = router;
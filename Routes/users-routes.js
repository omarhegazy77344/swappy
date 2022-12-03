const express = require('express');
const router = express.Router();

const UserModel = require('../models/UserModel.js');




// http://localhost:3001/users/registration
router.post('/registration',
    function(req, res) {
        
        let newDocument = {
            "firstName": req.body.firstName,
            "lastName": req.body.lastName,
            "email": req.body.email,
            "password": req.body.password
        };

        UserModel
        .create(newDocument)
        // If MongoDB creates document succesfully, then...
        .then(
            function(dbDocument) {
                res.json(dbDocument)
            }
        )
        // Otherwise, if error occurs catch it...
        .catch(
            function(error) {
                console.log('/registration error', error);

                res.send('An error occured');
            }
        );
    }
);




// http://localhost:3001/users/update
router.put(
    '/update',
    function(req, res) {

        let updates = {}

        if (req.body.firstName){ 
            updates['firstName'] = req.body.firstName 
        };
        if (req.body.lastName) {
            updates['lastName'] = req.body.lastName;
        };
        if (req.body.password) {
            updates['password'] = req.body.password;
        };

        UserModel
        .findOneAndUpdate(
            {
                "email": req.body.email
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

router.post("/login", async (req, res) => 
{
        try
        {
            console.log(req.body.email)
            const user = await UserModel.findOne({email: req.body.email, password: req.body.password})
            if(user)
            {
                    console.log("you are logged in");
                    return res.redirect("/");
                    
                    res.status(200).send(user);
                    
                   
            }
            else{ console.log("wrong info");
            res.status(200).send(user);

        }
          
        }
        catch(e)
        {
            res.status(400).send(e)
        }
});

module.exports = router;
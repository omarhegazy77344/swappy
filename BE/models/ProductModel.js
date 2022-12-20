const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: false
    }
    }
);

const ProductModel = mongoose.model('products',ProductSchema);


module.exports =ProductModel;

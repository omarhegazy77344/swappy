const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
    {
    
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    picture: {
        type: String,
        required: false
    },
    type: {
        type:String,
        required:false
    },
    room:{
        type:String,
        required:false
    },
    condition:{
        type:String,
        required:false
    },
    usage:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:false
    }
    }
);

const ProductModel = mongoose.model('products',ProductSchema);


module.exports =ProductModel;

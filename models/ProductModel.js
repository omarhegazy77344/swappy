// Import mongoose
const mongoose = require('mongoose');
 
// Schema
const ProductSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
        },
        model: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        color: {
            type: String,
            required: true,
        },
        ID: {
            type: Number,
            required: true,
            default: Math.random()

        }
    }
)

// Model
const ProductModel = mongoose.model('products', ProductSchema)

// Export the model
module.exports = ProductModel;

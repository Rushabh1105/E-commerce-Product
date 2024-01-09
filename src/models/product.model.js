// Importing the dependencies
import mongoose from "mongoose";

// Creating product schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    quantity: {
        type: String,
        required: true,
        default: 1
    }
}, {timestamps: true});

// Creating the product model
const ProductModel = mongoose.model('Product', productSchema);
// Exporting the product model
export default ProductModel;
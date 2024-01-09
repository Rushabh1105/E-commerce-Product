import mongoose from "mongoose";


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

const ProductModel = mongoose.model('Product', productSchema);
export default ProductModel;
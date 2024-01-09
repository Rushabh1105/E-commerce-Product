// Importing the required modules
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../repository/product.repository.js";


// TO add product to database
export const addProduct = async (req, res) => {
    try {
        const {name, quantity} = req.body;
        const product = await createProduct(name, quantity);
        return res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// Fetch all products
export const getAll = async (req, res) => {
    try {
        const products = await getAllProducts();
        return res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// Get a single product
export const getAProduct = async(req, res) => {
    try {
        const id = req.params.id;
        const product = await getProductById(id);
        return res.status(200).json({
            success: true,
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// Delete a product
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        await deleteProductById(id);
        return res.status(200).json({
            success: true,
            message: 'Product deleted Successfully'
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

// Update a product
export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const number = req.query.number;
        console.log(req.query)
        console.log(typeof number)
        const product = await updateProductById(id, number);
        return res.status(200).json({
            success: true,
            message: 'Product deleted Successfully',
            data: product
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        })
    }
}
// Importing required modules and dependencies
import express from 'express';
import { addProduct, deleteProduct, getAProduct, getAll, updateProduct } from '../controller/product.controller.js';

// Create an express router
const productRoutes = express.Router();

// Route to get all products
productRoutes.get('/', getAll);
// Route to create a product
productRoutes.post('/create', addProduct);
// Route to get product by its id
productRoutes.get('/:id', getAProduct);
// Route to delete a product by its id
productRoutes.delete('/:id', deleteProduct);
//route to update a product by its id
productRoutes.put('/:id/update_quantity/', updateProduct)

// Exporting router
export default productRoutes;
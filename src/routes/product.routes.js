// Importing required modules and dependencies
import express from 'express';
import { addProduct, deleteProduct, getAProduct, getAll, updateProduct } from '../controller/product.controller.js';

const productRoutes = express.Router();

productRoutes.get('/', getAll)
productRoutes.post('/create', addProduct);
productRoutes.get('/:id', getAProduct);
productRoutes.delete('/:id', deleteProduct);
productRoutes.put('/:id/update_quantity/', updateProduct)

export default productRoutes;
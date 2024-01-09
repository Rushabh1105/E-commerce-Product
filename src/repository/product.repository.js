import ProductModel from "../models/product.model.js"



export const createProduct = async (name, quantity) => {
    try {
        const product = await ProductModel.create({
            name: name,
            quantity: quantity,
        });
        return product;
    } catch (error) {
        throw error
    }
}


export const getAllProducts = async () => {
    try {
        const products = await ProductModel.find({});
        return products;
    } catch (error) {
        throw error
    }
}


export const getProductById = async(id) => {
    try {
        const product = await ProductModel.findById(id);
        return product;
    } catch (error) {
        throw error
    }
}

export const deleteProductById = async(id) => {
    try {
        const product = await ProductModel.findById(id);
        if(product){
            await ProductModel.findByIdAndDelete(id);
            return
        }else{
            throw new Error('Product not found');
        }
    } catch (error) {
        throw error
    }
}

export const updateProductById = async(id, num) =>{
    try {
        const product = await ProductModel.findById(id);
        if(parseInt(product.quantity) + parseInt(num) > 0 ){
            product.quantity = parseInt(product.quantity)+parseInt(num);
            await product.save();
        }else{
            throw new Error('Connot update product')
        }
        return product;
    } catch (error) {
        throw error
    }
}
// Importing the required modules
import express from 'express';

// Importing the required dependencies
import { PORT } from './src/config/server.config.js';
import { connectToDB } from './src/config/mongoose.db.js';
import productRoutes from './src/routes/product.routes.js';
import bodyParser from 'body-parser';

// Making the express app
const app = express();

// For parsing the JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// Product routes
app.use('/api/products', productRoutes);


// Listening on port
app.listen(PORT, async() => {
    await connectToDB();
    console.log(`Server started on port ${PORT}`);
})
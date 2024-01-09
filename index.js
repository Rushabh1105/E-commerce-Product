import express from 'express';

import { PORT } from './src/config/server.config.js';
import { connectToDB } from './src/config/mongoose.db.js';
import productRoutes from './src/routes/product.routes.js';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/products', productRoutes);



app.listen(PORT, async() => {
    await connectToDB();
    console.log(`Server started on port ${PORT}`);
})
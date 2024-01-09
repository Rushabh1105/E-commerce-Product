// Importing the required modules and dependencies
import mongoose from "mongoose";
import {DB_URL} from './server.config.js'

// Connecting to mongoDB using mongoose
export const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Successfully connected to mongo db')
    } catch (error) {
        console.log(error)
    }
}
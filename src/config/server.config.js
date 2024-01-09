// Importing required modules
import dotenv from 'dotenv'

// Configuring the env file
dotenv.config();

// Exporting required variables
export const PORT = process.env.PORT;
export const DB_URL = process.env.DB_URL;
import dotenv from "dotenv";
dotenv.config();  // Load environment variables first

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const mongoURI = `${process.env.MONGO_URI}/${DB_NAME}?retryWrites=true&w=majority`;
        console.log(`Connecting to: ${mongoURI}`);

        const connectionInstance = await mongoose.connect(mongoURI);


        console.log(`MongoDB connected successfully: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectDB;

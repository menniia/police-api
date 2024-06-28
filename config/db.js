import mongoose from "mongoose";
import "dotenv/config";

const connectionString = process.env.mongo_url

export const dbConnection = () => {
    mongoose.connect(connectionString).then(() => {
        console.log("Connected!");
    });
}
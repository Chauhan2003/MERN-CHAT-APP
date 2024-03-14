import mongoose from "mongoose";

const databaseConnection = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB connected successfully`);
    }
    catch (err) {
        console.log(`MongoDB not connected: ${err.message}`);
    }
}

export default databaseConnection;
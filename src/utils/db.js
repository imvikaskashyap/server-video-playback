import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbUrl = process.env.DB_URI || " ";

 const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data) => {
            console.log(`Connected to ===>>> ${data.connection.name} DB😉😉😉. Host name is ===>>> ${data.connection.host}`);
        });
    } catch (err) {
        console.log(err.message);
        setTimeout(connectDB, 5000);
    }
};


export default connectDB
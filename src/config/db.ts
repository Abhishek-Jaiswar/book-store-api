import mongoose from "mongoose";

const connectToDb = async () => {
    try {
        
        mongoose.connection.on("connected", () => {
            console.log("Database connected successfully");
        })

        mongoose.connection.on('error', (error) => {
            console.log("Error while connecting to database", error);
            
        })

        await mongoose.connect(`${process.env.MONGODB_URI!}bookstore`)

        
    } catch (error) {
        console.log("Database connected failed", error);
        process.exit(1)
    }
}

export default connectToDb;
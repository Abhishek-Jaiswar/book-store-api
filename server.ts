import app from "./src/app";
import dotenv from 'dotenv'
import connectToDb from "./src/config/db";

dotenv.config()

const Port = process.env.PORT || 3000

const startServer = async () => {
    try {

        await connectToDb()
        .then(() => {
            console.log("Database is running with server");
        })
        .catch((err) => {
            console.log("Database is not running with server", err);
            
        })

        app.listen(Port, () => {
            console.log(`Server is listening on http://localhost:${Port}`);
        })
    } catch (error: any) {
        console.log("Failed to start server");
        throw new Error(error)
    }
}

startServer()
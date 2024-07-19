import app from "./src/app";
import dotenv from 'dotenv'

dotenv.config()

const Port = process.env.PORT || 3000

const startServer = async () => {
    try {
        app.listen(Port, () => {
            console.log(`Server is listening on http://localhost:${Port}`);
        })
    } catch (error: any) {
        console.log("Failed to start server");
        throw new Error(error)
    }
}

startServer()
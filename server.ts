import app from "./app";

const PORT = 3000

const startServer = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is listening on http://localhost:${PORT}`);
        })
    } catch (error: any) {
        console.log("Failed to start server");
        throw new Error(error)
    }
}

startServer()
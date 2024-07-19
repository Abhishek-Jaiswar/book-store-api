import express from "express"

const app = express()

// routes

app.get("/", (req, res) => {
    res.send("Hello")
})


export default app;


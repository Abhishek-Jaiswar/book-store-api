import express from "express"
import { globleErrorHandler } from "./middlewares/globalErrorHandlers"
import userRouter from './user/user.routes'

const app = express()

app.use(express.json())

// routes

app.use("/api/v1/users", userRouter)


app.use(globleErrorHandler)

export default app;


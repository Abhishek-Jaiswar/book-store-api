import { NextFunction, Request, Response } from "express";
import createHttpError from "http-errors";
import User from "./user.model";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    //validation
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        const error = createHttpError(400, "All feilds are required")
        return next(error)
    }

    // Database
    try {
        const existingUser = await User.findOne({ email })

        if (existingUser) {
            const error = createHttpError(400, "User already exists")
            return next(error)
        }
    } catch (error) {
        const errorStatus = createHttpError(400, "All feilds are required")
        return next(errorStatus)
    }

    //hashing password
    const hashedPasswrod = await bcrypt.hash(password, 10)

    //process

    const newUser = await User.create({
        name,
        email,
        password: hashedPasswrod
    })


    //token

    const token = jwt.sign({
        sub: newUser._id
    },
        process.env.JWT_SECRET as string,
        { expiresIn: '7d' }
    );

    //response

    res.json({
        accessToken: token
    })
}

export { createUser }
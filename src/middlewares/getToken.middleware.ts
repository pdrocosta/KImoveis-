import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'



const token = (
    req: Request,
    resp: Response,
    next: NextFunction
) => {
    let token: string | undefined = req.headers.authorization

    if (!token) {
        throw new AppError('Token is missing', 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error: any, decoded: any) => {
        if (error) throw new AppError(error.message, 401)

        resp.locals.id = decoded.sub
        resp.locals.admin = decoded.admin

        return next()
    })
}

export default {
    body,
    token
}
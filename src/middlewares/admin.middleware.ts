import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'

const adminMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const admin = res.locals.admin
    if (!admin) {
        throw new AppError('Insufficient permission', 403)
    }

    return next()
}

export default adminMiddleware

import { NextFunction, Request, Response } from 'express'
import { AppError } from '../error'

const ownerMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const userID: number = parseInt(req.params.id)
    const loggedId = res.locals.id
    const admin = res.locals.admin
    console.log(admin)
    if (!admin) {
        if (userID !== loggedId) {
            throw new AppError('Insufficient permission', 403)
        }
    }

    return next()
}

export default ownerMiddleware

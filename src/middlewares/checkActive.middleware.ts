import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'
import { TRealEstate, TUser } from '../interfaces/interfaces'
import { RealEstate, User } from '../entities'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'


export const checkActive = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const id: number = parseInt(req.params.id);
    console.log(id)
    console.log(req.body.email)

    const userRepo: Repository<User> =
        AppDataSource.getRepository(User);
    if (id) {
        const user = await userRepo.findOneBy({ id: Number(id) })
        resp.locals.user = user
        if (user!.deletedAt) {
            throw new AppError("User not found", 404);
        }

        return next()
    }

    if (id!) {
        const user = await userRepo.findOneBy({ email: req.body.email })
        console.log(user)
        if (user?.deletedAt) {
            throw new AppError("User not found", 404)
        }

        resp.locals.user = user
        console.log(resp.locals)

        return next()
    }
    return next()
}
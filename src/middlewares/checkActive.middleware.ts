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

    const userRepo: Repository<User> =
        AppDataSource.getRepository(User);
 
        const user = await userRepo.findOneBy({ id: Number(id) })
        resp.locals.user = user
    if (user?.deletedAt) {
        throw new AppError("User not found", 404);
    }
    if (id!) {
        const user = await userRepo.findOneBy({ email: req.body.email })
        resp.locals.user = user
        if (user?.deletedAt) {
            throw new AppError("User not found", 404)
        }

        resp.locals.user = user


    }
    return next()
}
import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'
import { TUser } from '../interfaces/interfaces'
import { User } from '../entities'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'


export const checkEmail = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const userRepo: Repository<User> =
        AppDataSource.getRepository(User);

    console.log(req.body.email)
    const findUserByEmail: User | null = await userRepo.findOneBy({ email: req.body.email })
    console.log(findUserByEmail)

    if (findUserByEmail) {
        throw new AppError("Email already exists", 409)
    }

    return next()
}
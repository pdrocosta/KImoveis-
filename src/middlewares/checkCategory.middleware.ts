import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'
import { TCategory, TUser } from '../interfaces/interfaces'
import Category from '../entities/categories.entity'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'


export const checkCategory = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const name = req.body.name
    const categoryRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const findCategory: boolean = await categoryRepo.exist({ where: { name: name } })

    if (findCategory) {
        throw new AppError("Category already exists", 409)
    }

    return next()
}
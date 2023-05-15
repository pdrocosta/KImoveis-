import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import { AppError } from '../error'
import Category from '../entities/categories.entity'
import { AppDataSource } from '../data-source'
import { Repository } from 'typeorm'


export const checkCategoryName = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const name = req.body.name
    const categoryRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const findCategory: Category | null = await categoryRepo.findOneBy({ name: name })

    if (findCategory) {
        throw new AppError("Category already exists", 409)
    }

    return next()
}
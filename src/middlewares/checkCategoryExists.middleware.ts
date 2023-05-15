import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { AppError } from "../error";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";

export const checkCategoryExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<Response | void> => {
    const categoryId: number = parseInt(req.params.id);

    const categoriesRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const category: boolean = await categoriesRepo.exist({
        where: { id: categoryId },
    });

    if (!category) {
        throw new AppError("Category not found", 404);
    }

    return next();
};


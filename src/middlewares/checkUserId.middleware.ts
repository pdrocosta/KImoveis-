import { Repository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { AppError } from "../error";
import { User } from "../entities";
import { AppDataSource } from "../data-source";

export const checkUserId = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const id: number = parseInt(req.params.id);

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user = await userRepo.findOneBy({ id: id });

    if (user) {
        next();
    } else {
        throw new AppError("User not found", 404);
    }
};

import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import Address from "../entities/addresses.entity";
import { Repository, getRepository } from "typeorm";
import { AppDataSource } from "../data-source";

export const checkAddress = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { city, state, street, zipCode, number } = req.body.address;
    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);


    const existingAddress = await addressRepo.findOne({
        where: {
            city,
            state,
            street,
            zipCode,
            number: number || "",
        },
    });

    if (existingAddress) {
        throw new AppError("Address already exists", 409);
    }

    return next();
};

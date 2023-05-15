import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkRealEstateExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const realEstateId: number = Number(req.body.realEstateId);
    const realEstateRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const realEstateExists: RealEstate | null = await realEstateRepo.findOneBy({

        id: realEstateId
    });

    if (realEstateExists == null) {
        throw new AppError("RealEstate not found", 404);
    }

    return next();
};

export default checkRealEstateExists;
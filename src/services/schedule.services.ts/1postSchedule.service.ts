
import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TReqSchedule } from "../../interfaces/interfaces";
import { Response } from "express";

const postScheduleService = async (
    res: Response,
    scheduleData: TReqSchedule,
): Promise<Schedule> => {
    const { realEstate, ...newScheduleData } = scheduleData;
    const userId = res.locals.id
    const usersRepo: Repository<User> = AppDataSource.getRepository(User);

    const realEstateRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);


    const realEstateData: RealEstate | null = await realEstateRepo.findOneBy({
        id: realEstate,
    });

    const schedulesRepo: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);


    const userData: User | null = await usersRepo.findOneBy({
        id: userId,
    });


    const newSchedule: Schedule = schedulesRepo.create({
        ...newScheduleData,
        user: userData!,
        realEstate: realEstateData!,
    });

    await schedulesRepo.save(newSchedule);

    return newSchedule;
};

export default postScheduleService;

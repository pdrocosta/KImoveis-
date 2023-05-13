
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

    console.log(userId, realEstate, newScheduleData)

    const realEstatesRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);


    const realEstateData: RealEstate | null = await realEstatesRepo.findOne({
        where: { id: realEstate },
    });
    console.log(realEstateData)
    const schedulesRepo: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);


    const userData: User | null = await usersRepo.findOne({
        where: { id: userId },
    });
    console.log(userData)

    if (!realEstateData || !userData) {
        throw new Error("User or real estate not found");
    }
    console.log(userData)

    const newSchedule: Schedule = schedulesRepo.create({
        ...newScheduleData,
        user: userData,
        realEstate: realEstateData,
    });
    await schedulesRepo.save(newSchedule);
    console.log(newSchedule)

    return newSchedule;
};

export default postScheduleService;

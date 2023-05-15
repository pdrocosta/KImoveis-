
import { Repository } from "typeorm";
import { RealEstate, Schedule, User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { TReqSchedule } from "../../interfaces/interfaces";
import { Response } from "express";

const postScheduleService = async (
    res: Response,
    scheduleData: TReqSchedule,
): Promise<any> => {
    const { realEstateId, ...newScheduleData } = scheduleData;
    const userId = res.locals.id
    const usersRepo: Repository<User> = AppDataSource.getRepository(User);

    const userData: User | null = await usersRepo.findOneBy({
        id: Number(userId),
    });

    const realEstatesRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const realEstateData: RealEstate | null = await realEstatesRepo.findOne({
        where: { id: Number(realEstateId) },
    });

    const schedulesRepo: Repository<Schedule> =
        AppDataSource.getRepository(Schedule);


    const newSchedule: Schedule = schedulesRepo.create({
        ...newScheduleData,
        user: userData!,
        realEstate: realEstateData!,
    });


    await schedulesRepo.save(newSchedule);

    return { message: "Schedule created" };
};

export default postScheduleService;

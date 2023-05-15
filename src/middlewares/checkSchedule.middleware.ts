import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Schedule } from "../entities";
import { AppError } from "../error";

const checkSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const { date, hour, realEstateId } = req.body;
  const newDate: Date = new Date(date);
  const day: number = newDate.getDay();
  const checkHour: number = parseInt(hour);
  const userId: number = res.locals.id;

  const schedulesRepo: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  if (checkHour < 8 || checkHour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }

  if (day > 4) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const schedule: Schedule | null = await schedulesRepo
    .createQueryBuilder("schedule")
    .innerJoinAndSelect("schedule.user", "user")
    .innerJoinAndSelect("schedule.realEstate", "realEstate")
    .andWhere("schedule.date = :date", { date: date })
    .andWhere("schedule.hour = :hour", { hour: hour })
    .andWhere("schedule.realEstate.id = realEstateId", {
      realEstateId:
        Number(realEstateId),
    })
    .getOne();

  if (schedule && schedule.user.id == userId) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }
  if (schedule) {
    throw new AppError("Schedule to this real estate at this date and time already exists", 409)
  }


  return next();
};

export default checkSchedule;
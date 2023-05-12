
import { Repository } from "typeorm";
import {  RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const
getAllSchedulesService = async (
        id: number
    ): Promise<any> => {
        const realEstateRepo: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const existsRealEstate: boolean = await realEstateRepo.exist({
    where: { id: id },
  });

  if (!existsRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  const realEstateData: RealEstate | null = await realEstateRepo
    .createQueryBuilder("realEstate")
    .innerJoinAndSelect("realEstate.address", "addresss")
    .innerJoinAndSelect("realEstate.schedules", "schedules")
    .where("realEstate.id = :realEstateId", {
      realEstateId: id,
    })
    .getOne();

  return realEstateData;
    };

export default
getAllSchedulesService;
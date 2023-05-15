
import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";

const
  getAllSchedulesService = async (
    id: number
  ): Promise<RealEstate | null> => {

    const realEstateRepo: Repository<RealEstate> =
      AppDataSource.getRepository(RealEstate);

    const existsRealEstate: RealEstate | null = await realEstateRepo.findOneBy({
      id: id,
    });
    if (existsRealEstate == null) {
      throw new AppError("RealEstate not found", 404);
    }

    const realEstateData: RealEstate | null = await realEstateRepo
      .createQueryBuilder("realEstate")
      .innerJoinAndSelect("realEstate.address", "addresss")
      .innerJoinAndSelect("realEstate.category", "category")
      .innerJoinAndSelect("realEstate.schedules", "schedules")
      .innerJoinAndSelect("schedules.user", "user")
      .where("realEstate.id = :realEstateId", {
        realEstateId: Number(id),
      })
      .getOne();

    return realEstateData;

  };

export default
  getAllSchedulesService;

import { Repository } from "typeorm";
import { RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../error";
import { realEstatesResponseSchemas } from "../../schemas/realEstate.schema";

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
      .innerJoinAndSelect("realEstate.category", "category")
      .innerJoinAndSelect("realEstate.schedules", "schedules")
      .innerJoinAndSelect("schedules.user", "user")
      .where("realEstate.id = :realEstateId", {
        realEstateId: id,
      })
      .getOne();

    const verifiedRealEstates = realEstatesResponseSchemas.parse(realEstateData)

    return verifiedRealEstates;


  };

export default
  getAllSchedulesService;
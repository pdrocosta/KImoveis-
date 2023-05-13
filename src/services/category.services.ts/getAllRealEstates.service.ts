import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { realEstatesResponseSchemas } from "../../schemas/realEstate.schema";

const
    getAllRealEstatesService = async (
        id: number
    ): Promise<any> => {
        const realEstatesRepo: Repository<RealEstate> =
            AppDataSource.getRepository(RealEstate);

        const allRealEstates: RealEstate | null = await realEstatesRepo.findOne({
            where: {
                id: id,
            },
            relations: { address: true },
        });

        const returnRealEstates =
            realEstatesResponseSchemas.parse(allRealEstates);

        return returnRealEstates;
    };

export default
    getAllRealEstatesService;
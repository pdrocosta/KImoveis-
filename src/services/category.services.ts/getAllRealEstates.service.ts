import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { realEstatesResponseSchemas } from "../../schemas/realEstate.schema";

const
    getAllRealEstatesFromCategoryService = async (
        id: number
    ): Promise<any> => {
        const categoriesRepo: Repository<Category> =
            AppDataSource.getRepository(Category);
        console.log(id, "service getallrealestates")
        const allRealEstates: Category | null = await categoriesRepo.findOne({
            where: {
                id: id,
            },
            relations: { realEstate: true },
        });
        console.log(allRealEstates, " all real estates")
        const returnRealEstates =
            realEstatesResponseSchemas.parse(allRealEstates);
        console.log(returnRealEstates, " return all real estates")
        return returnRealEstates;
    };

export default
    getAllRealEstatesFromCategoryService;
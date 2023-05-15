import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppDataSource } from "../../data-source";
import { realEstatesResponseSchemas } from "../../schemas/realEstate.schema";

const
    getAllRealEstatesFromCategoryService = async (
        id: number
    ): Promise<any> => {
        const categoriesRepo: Repository<Category> =
            AppDataSource.getRepository(Category);
        const allRealEstates: Category | null = await categoriesRepo.findOne({
            where: {
                id: id,
            },
            relations: { realEstate: true },
        });
        const returnRealEstates =
            realEstatesResponseSchemas.parse(allRealEstates);
        return returnRealEstates;
    };

export default
    getAllRealEstatesFromCategoryService;

import { Repository } from "typeorm";
import { Category } from "../../entities";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { TReqPostCategory } from "../../interfaces/interfaces";

const postCategoryService = async (
    categoryData: TReqPostCategory
): Promise<Category> => {
    const categoriesRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const newCategory: Category = await categoriesRepo.save(categoryData);

    return newCategory;
};

export default postCategoryService;
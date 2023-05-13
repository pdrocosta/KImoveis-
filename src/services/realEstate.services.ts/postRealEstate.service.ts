
import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { TReqRealEstate } from "../../interfaces/interfaces";
import Address from "../../entities/addresses.entity";

const postRealEstateService = async (
    realEstateData: TReqRealEstate
): Promise<RealEstate> => {
    const { adress, category, ...newInfos } = realEstateData;
    console.log( adress, category, newInfos)
    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

    const categoriesRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const realEstatesRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const categoryId: Category | null = await categoriesRepo.findOneBy({
       id: category,
    });

    console.log( categoryId)

    const newAddress: Address = addressRepo.create(adress);
    await addressRepo.save(newAddress);
    console.log( newAddress)

    if (!categoryId) {
        throw new AppError("Category not found", 404);
    }

    const createRealEstate: RealEstate = realEstatesRepo.create({
        ...newInfos,
        address: newAddress,
        category: categoryId,
    });
    console.log( createRealEstate)

    const newRealEstate: RealEstate = await realEstatesRepo.save(createRealEstate);
    console.log( newRealEstate)

    return newRealEstate;
};

export default postRealEstateService;
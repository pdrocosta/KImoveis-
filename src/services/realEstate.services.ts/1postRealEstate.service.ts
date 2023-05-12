
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

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

    const categoriesRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const realEstateRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const categoryId: Category | null = await categoriesRepo.findOneBy({
        id: category,
    });


    const newAddress: Address = addressRepo.create(adress);
    await addressRepo.save(newAddress);

    const createRealEstate: RealEstate = realEstateRepo.create({
        ...newInfos,
        address: newAddress,
        category: categoryId!,
    });

    const newRealEstate: RealEstate = await realEstateRepo.save(createRealEstate);

    return newRealEstate;
};

export default postRealEstateService;

import { Repository } from "typeorm";
import { Category, RealEstate } from "../../entities";
import { AppError } from "../../error";
import { AppDataSource } from "../../data-source";
import { TReqRealEstate } from "../../interfaces/interfaces";
import Address from "../../entities/addresses.entity";
import { addressSchemaRequest } from "../../schemas/realEstate.schema";

const postRealEstateService = async (
    realEstateData: TReqRealEstate
): Promise<RealEstate> => {
    const { address, categoryId, ...newInfos } = realEstateData;

    const addressRepo: Repository<Address> = AppDataSource.getRepository(Address);

    const categoriesRepo: Repository<Category> =
        AppDataSource.getRepository(Category);

    const realEstatesRepo: Repository<RealEstate> =
        AppDataSource.getRepository(RealEstate);

    const categoryData: Category | null = await categoriesRepo.findOneBy({
        id: categoryId!,
    });

    const verifiedAddress = addressSchemaRequest.parse(address)


    if (!categoryId) {
        throw new AppError("Category not found", 404);
    }

    const createRealEstate: RealEstate = realEstatesRepo.create({
        ...newInfos,
        address: verifiedAddress,
        category: categoryData!,
    });

    await realEstatesRepo.save(createRealEstate);

    const newAddress: Address = addressRepo.create(verifiedAddress);
    await addressRepo.save(newAddress);
    return createRealEstate;
};

export default postRealEstateService;
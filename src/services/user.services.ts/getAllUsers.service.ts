import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { TRespAllUsers } from '../../interfaces/interfaces';
import { User } from '../../entities';
import { usersSchemaResponse } from '../../schemas/users.schemas';

const getAllUsersService = async (): Promise<TRespAllUsers> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const usersData: User[] = await userRepo.find();

    const returnUsers: TRespAllUsers =
        usersSchemaResponse.parse(usersData);

    return returnUsers;
};

export default getAllUsersService;

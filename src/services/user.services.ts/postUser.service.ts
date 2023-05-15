import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TReqPostUser, TUserRes } from '../../interfaces/interfaces';
import { User } from '../../entities';
import { userSchemaResponse } from '../../schemas/users.schemas';

const postUserService = async (
  userData: TReqPostUser
): Promise<TUserRes> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const newUser: User = userRepo.create(userData);
  await userRepo.save(newUser);

  const user = userSchemaResponse.parse(newUser);

  return user;
};


export default postUserService

import {  Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TReqPatchUser, TUserRes } from '../../interfaces/interfaces'
import { User } from '../../entities'
import { userSchemaResponse, usersSchemaResponse } from '../../schemas/users.schemas'

export const patchUserService = async (
  userData: TReqPatchUser,
  userID: number,
): Promise<TUserRes> => {

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepo.findOneBy({
    id: userID,
  });
  const newUserInfos = ({ ...oldUserData });

  if (userData.name) {
    newUserInfos.name = userData.name
  }
  if (userData.email) {
    newUserInfos.email = userData.email
  }
  if (userData.password) {
    newUserInfos.password = userData.password
  }

  const saveNewUser = userRepo.create(newUserInfos)

  await userRepo.save(saveNewUser);

  const returnUser = userSchemaResponse.parse(newUserInfos);
  return returnUser;
};
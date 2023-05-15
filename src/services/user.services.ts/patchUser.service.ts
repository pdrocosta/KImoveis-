import { DeepPartial, Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TReqPatchUser, TUserRes } from '../../interfaces/interfaces'
import { User } from '../../entities'
import { userSchemaResponse, usersSchemaResponse } from '../../schemas/users.schemas'
import { AppError } from '../../error'

export const patchUserService = async (
  userData: TReqPatchUser,
  userID: number,
  loggedId: number,
): Promise<TUserRes> => {

  const userRepo: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData: User | null = await userRepo.findOneBy({
    id: userID,
  });
console.log(oldUserData)
  const newUserInfos = ({ ...oldUserData });
  console.log(newUserInfos)

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
  console.log(saveNewUser)

  await userRepo.save(saveNewUser);

  const returnUser = userSchemaResponse.parse(newUserInfos);
  console.log(returnUser)
  return returnUser;
};
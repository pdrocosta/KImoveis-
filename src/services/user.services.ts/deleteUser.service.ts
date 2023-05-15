import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities';

const deleteUserService = async (id: number): Promise<void> => {
  const userRepo: Repository<User> = AppDataSource.getRepository(User);
  const user: User | null = await userRepo.findOneBy({
    id: Number(id),
  });
  if (user) {
    await userRepo.softRemove(user);
  }
  return;
};

export default deleteUserService;
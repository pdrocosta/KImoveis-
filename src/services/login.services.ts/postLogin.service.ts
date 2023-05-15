import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { TReqLogin } from '../../interfaces/interfaces';
import { User } from '../../entities';
import { AppError } from '../../error';
import { compareSync } from 'bcryptjs';
import jwt from "jsonwebtoken";
import { Response } from 'express';

const loginService =async (res: Response, userData: TReqLogin): Promise<string> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);
  
    const user: User | null = await userRepo.findOneBy({
      email: userData.email,
    });
    if (!user) {
      throw new AppError("Invalid credentials", 401);
  }
  
  if (user.deletedAt) {
    throw new AppError("User not active", 401);
  }
  
    const verifyPassword = compareSync(userData.password, user.password);

    if (!verifyPassword) {
      throw new AppError("Invalid credentials", 401);
    }
  
    const token: string = jwt.sign(
      {
        admin: user.admin,
        id: user.id,
      },
      process.env.SECRET_KEY!,
      {
        expiresIn: "24h",
        subject: String(user.id),
      }
  );
  console.log(token)


  
    return token;
  };


export default loginService

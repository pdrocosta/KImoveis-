import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'



const email = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {

    const findUserByEmail:TUser | null = await userRepo.findOneBy({email: req.body.email}) 
   
    if(findUserByEmail){
        throw new AppError("Email already exists", 409)
    }

    return next()
}
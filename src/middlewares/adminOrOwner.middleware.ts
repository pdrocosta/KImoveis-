import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'


const isAdminOrOwner = (req: Request, resp: Response, next: NextFunction): void => {
    const { admin, id } = resp.locals
    const idParams = req.params.id
 
    if(!admin && Number(id) !== Number(idParams)){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

const isUserExist = async (req: Request, resp: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params

    const foundUser: TUser | null = await userRepo.findOneBy({id: Number(id)}) 

    if(!foundUser){
        throw new AppError("User not found", 404)
    }

    resp.locals.foundUser = foundUser

    return next()
}
import { Request, Response } from 'express'
import { TReqLogin, TReqPostUser, TUserRes } from '../interfaces/interfaces'

const loginController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TReqLogin = req.body
    const login: TUserRes = await loginService(userData)
    return res.status(201).json(login)
}


export { loginController}
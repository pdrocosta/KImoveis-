import { Request, Response } from 'express'
import { TReqLogin } from '../interfaces/interfaces'
import loginService from '../services/login.services.ts/postLogin.service'

const loginController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TReqLogin = req.body
    const login = await loginService(res, userData)
    return res.status(201).json(login)
}


export { loginController }
import { Request, Response } from 'express'
import { TReqPatchUser, TReqPostUser, TRespAllUsers, TUserRes } from '../interfaces/interfaces'
import postUserService from '../services/user.services.ts/postUser.service'
import { patchUserService } from '../services/user.services.ts/patchUser.service'
import deleteUserService from '../services/user.services.ts/deleteUser.service'
import getAllUsersService from '../services/user.services.ts/getAllUsers.service'

const postUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TReqPostUser = req.body
    const newUser: TUserRes = await postUserService(userData)
    return res.status(201).json(newUser)
}

const getUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const usersData: TRespAllUsers
        = await getAllUsersService()
    return res.status(200).json(usersData)
}

const patchUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userID: number = parseInt(req.params.id)
    const newData: TReqPatchUser = req.body
    const loggedId = res.locals.id
    console.log(userID,newData, loggedId)
    const user = await patchUserService(newData, userID, loggedId)
    return res.status(200).json(user)
}

const deleteUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userID: number = parseInt(req.params.id)
    console.log(userID)
    await deleteUserService(userID)
    return res.status(204).json()
}

export { deleteUserController, getUsersController, patchUserController, postUserController }
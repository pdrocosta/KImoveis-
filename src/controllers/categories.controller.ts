import { Request, Response } from 'express'
import { TReqPostUser, TUserRes } from '../interfaces/interfaces'

const postCategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryData: TReqPostUser = req.body
    const newUser: TUserRes = await postUserService(userData)
    return res.status(201).json(newUser)
}

const getUsersController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userData: TUserRes
        = await getAllUsersService()
    return res.status(200).json(userData)
}

const patchUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userID: number = parseInt(req.params.id)
    const newData = req.body
    const user = await patchUserService(newData, userID:)
    return res.status(200).json(user)
}

const deleteUserController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const userID: number = parseInt(req.params.id)
    await deleteUserService(userID)
    return res.status(204).json()
}

export { deleteUserController, getUsersController, patchUserController, postUserController}
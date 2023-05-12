import { Router } from 'express'
import { checkEmail } from '../middlewares/checkEmail.middleware'
import { checkActive } from '../middlewares/checkActive.middleware'
import { deleteUserController, getUsersController, patchUserController, postUserController } from '../controllers/user.controller'
import adminMiddleware from '../middlewares/admin.middleware'
import { body } from '../middlewares/checkBody.middleware'
import { userSchemaRequest, userSchemaUpdateRequest } from '../schemas/users.schemas'
import getTokenMiddleware from '../middlewares/getToken.middleware'

const userRouter: Router = Router()

userRouter.post("", body(userSchemaRequest), checkEmail, postUserController)


userRouter.get("",
    adminMiddleware, getUsersController
)

userRouter.patch("/user/:id", body(userSchemaUpdateRequest), getTokenMiddleware,
    adminMiddleware
    , patchUserController
)

userRouter.delete("/user/:id",
    adminMiddleware, checkActive, deleteUserController
)


export default userRouter
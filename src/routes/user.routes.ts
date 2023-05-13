import { Router } from 'express'
import { checkEmail } from '../middlewares/checkEmail.middleware'
import { checkActive } from '../middlewares/checkActive.middleware'
import { deleteUserController, getUsersController, patchUserController, postUserController } from '../controllers/user.controller'
import adminMiddleware from '../middlewares/admin.middleware'
import { body } from '../middlewares/checkBody.middleware'
import { userSchemaRequest, userSchemaUpdateRequest } from '../schemas/users.schemas'
import getTokenMiddleware from '../middlewares/getToken.middleware'
import ownerMiddleware from '../middlewares/owner.middleware'

const userRouter: Router = Router()

userRouter.post("", body(userSchemaRequest), checkEmail, postUserController)


userRouter.get("", getTokenMiddleware,
    adminMiddleware, getUsersController
)

userRouter.patch("/:id", body(userSchemaUpdateRequest), getTokenMiddleware,
    adminMiddleware, ownerMiddleware,checkActive
    , patchUserController
)

userRouter.delete("/:id", getTokenMiddleware, checkActive,
    adminMiddleware, deleteUserController
)


export default userRouter
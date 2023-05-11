import { Router } from 'express'

const userRouter: Router = Router()

userRouter.post("",checkEmail, 
createUserController
)


userRouter.get("",
adminMiddleware, getUsersController
)

userRouter.patch("/user/:id",
adminOrOwnerMiddleware, patchUserController
)

userRouter.delete("/user/:id",
adminMiddleware, checkActive, deleteUserController
)


export default userRouter
import { Router } from 'express'
import { body } from '../middlewares/checkBody.middleware'
import { loginSchema } from '../schemas/login.schemas'
import { loginController } from '../controllers/login.controller'

const loginRouter: Router = Router()

loginRouter.post("", body(loginSchema),
    loginController
)


export default loginRouter
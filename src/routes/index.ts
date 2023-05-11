import 'reflect-metadata'
import { Router } from 'express'
import userRouter from './user.routes'
import loginRouter from './login.routes'
import realEstateRouter from './realEstate.routes'
import schedulesRouter from './schedules.routes'
import categoriesRouter from './categories.routes'


const mainRoutes: Router = Router()

mainRoutes.use("/users", userRouter)
mainRoutes.use("/login", loginRouter)
mainRoutes.use("/realEstate", realEstateRouter)
mainRoutes.use("/schedules", schedulesRouter)
mainRoutes.use("/categories", categoriesRouter)

export default mainRoutes
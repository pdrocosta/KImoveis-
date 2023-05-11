import { Router } from 'express'

const schedulesRouter: Router = Router()

schedulesRouter.post("",
getTokenMiddleware, checkSchedule,  postScheduleController
)

schedulesRouter.get("/realEstate/:id",
adminMiddleware, getSchedulesController
)

export default schedulesRouter
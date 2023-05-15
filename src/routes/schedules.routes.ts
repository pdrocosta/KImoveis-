import { Router } from 'express'
import getTokenMiddleware from '../middlewares/getToken.middleware'
import { body } from '../middlewares/checkBody.middleware'
import checkSchedule from '../middlewares/1checkSchedule.middleware'
import { getAllSchedulesController, postSchedulesController } from '../controllers/schedules.controller'
import adminMiddleware from '../middlewares/admin.middleware'
import { postReqScheduleSchema } from '../schemas/schedules.schemas'
import checkRealEstateExists from '../middlewares/checkRealEstate.middleware'


const schedulesRouter: Router = Router()

schedulesRouter.post("",
    getTokenMiddleware, body(postReqScheduleSchema), checkRealEstateExists, checkSchedule, postSchedulesController
)

schedulesRouter.get("/realEstate/:id", getTokenMiddleware,
    adminMiddleware, getAllSchedulesController
)

export default schedulesRouter
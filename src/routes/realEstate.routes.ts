import { Router } from 'express'
import { createRealEstateController, getAllRealEstatesController } from '../controllers/realEstate.controller'
import adminMiddleware from '../middlewares/admin.middleware'
import { checkAddress } from '../middlewares/checkAddress.middleware'
import { body } from '../middlewares/checkBody.middleware'
import { postRealEstateSchemaRequest } from '../schemas/realEstate.schema'
import getTokenMiddleware from '../middlewares/getToken.middleware'

const realEstateRouter: Router = Router()

realEstateRouter.post("", body(postRealEstateSchemaRequest), getTokenMiddleware, adminMiddleware, checkAddress,
    createRealEstateController
)

realEstateRouter.get("", adminMiddleware,
    getAllRealEstatesController
)


export default realEstateRouter
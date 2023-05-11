import { Router } from 'express'

const realEstateRouter: Router = Router()

realEstateRouter.post("", checkAdress, adminMiddleware,
createRealEstateController
)

realEstateRouter.get("",
getAllRealEstatesController
)


export default realEstateRouter
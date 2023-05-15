import { Router } from 'express'
import adminMiddleware from '../middlewares/admin.middleware'
import { getCategoriesController, getRealEstatesFromCategoryController, postCategoryController } from '../controllers/categories.controller'
import { checkCategoryName } from '../middlewares/checkCategory.middleware'
import { body } from '../middlewares/checkBody.middleware'
import { categorySchemaRequest } from '../schemas/categories.schemas'
import getTokenMiddleware from '../middlewares/getToken.middleware'
import { checkCategoryExists } from '../middlewares/checkCategoryExists.middleware'

const categoriesRouter: Router = Router()

categoriesRouter.post("", body(categorySchemaRequest), getTokenMiddleware,
    adminMiddleware, checkCategoryName, postCategoryController
)

categoriesRouter.get("",
    getCategoriesController
)

categoriesRouter.get("/:id/realEstate", checkCategoryExists,
    getRealEstatesFromCategoryController
)

export default categoriesRouter
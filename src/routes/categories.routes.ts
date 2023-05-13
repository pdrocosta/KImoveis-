import { Router } from 'express'
import adminMiddleware from '../middlewares/admin.middleware'
import { getCategoriesController, getRealEstatesFromCategoryController, postCategoryController } from '../controllers/categories.controller'
import { checkCategory } from '../middlewares/checkCategory.middleware'
import { body } from '../middlewares/checkBody.middleware'
import { categorySchemaRequest } from '../schemas/categories.schemas'
import getTokenMiddleware from '../middlewares/getToken.middleware'

const categoriesRouter: Router = Router()

categoriesRouter.post("", body(categorySchemaRequest), getTokenMiddleware,
    adminMiddleware, checkCategory, postCategoryController
)

categoriesRouter.get("",
    getCategoriesController
)

categoriesRouter.get("/:id/realEstate", checkCategory,
    getRealEstatesFromCategoryController
)

export default categoriesRouter
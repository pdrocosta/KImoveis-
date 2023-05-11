import { Router } from 'express'

const categoriesRouter: Router = Router()

categoriesRouter.post("",
adminMiddleware, checkCategory, postCategoryController
)

categoriesRouter.get("",
getCategoriesController
)

categoriesRouter.get("/:id/realEstate",
getCategortyRealEstatesController
)

export default categoriesRouter
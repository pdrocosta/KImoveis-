import { Request, Response } from 'express'
import { TCategory, TRealEstatesByCategory, TReqPostCategory, TReqPostUser, TResAllCategories, TUserRes } from '../interfaces/interfaces'
import postCategoryService from '../services/category.services.ts/postCategory.service'
import getCategoriesService from '../services/category.services.ts/getCategories.service'
import { Category } from '../entities'
import getRealEstatesFromCategoryService from '../services/category.services.ts/getAllRealEstates.service'
import getAllRealEstatesFromCategoryService from '../services/category.services.ts/getAllRealEstates.service'

const postCategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categoryData: TReqPostCategory = req.body
    const newCategory: TCategory = await postCategoryService(categoryData)
    return res.status(201).json(newCategory)
}

const getCategoriesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const categories: Category[]
        = await getCategoriesService()
    return res.status(200).json(categories)
}

const getRealEstatesFromCategoryController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const id = req.params.id
    console.log(id)

    const realEstatesByCategory
        = await getAllRealEstatesFromCategoryService(Number(id))
    return res.status(200).json(realEstatesByCategory)
}


export { getCategoriesController, getRealEstatesFromCategoryController, postCategoryController }
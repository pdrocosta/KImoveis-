import { Request, Response } from 'express'
import postRealEstateService from '../services/realEstate.services.ts/1postRealEstate.service'
import getAllRealEstatesService from '../services/realEstate.services.ts/getRealEstate.service'
import { TReqRealEstate } from '../interfaces/interfaces'

const createRealEstateController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const realEstateData: TReqRealEstate = req.body
    const newRealEstate = await postRealEstateService(realEstateData)
    return res.status(201).json(newRealEstate)
}

const getAllRealEstatesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const allRealEstates = await getAllRealEstatesService()
    return res.status(201).json(allRealEstates)
}




export { getAllRealEstatesController, createRealEstateController }
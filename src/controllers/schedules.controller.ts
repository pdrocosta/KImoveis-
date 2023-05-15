import { Request, Response } from 'express'
import { TReqSchedule } from '../interfaces/interfaces'
import postScheduleService from '../services/schedule.services.ts/postSchedule.service'
import getAllSchedulesService from '../services/schedule.services.ts/1getAllSchedules.service'
import { RealEstate } from '../entities'

const postSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const scheduleData: TReqSchedule
        = req.body
    const newSchedule = await postScheduleService(res, scheduleData)
    return res.status(201).json(newSchedule)
}

const getAllSchedulesController = async (
    req: Request,
    res: Response
): Promise<Response<RealEstate | null>> => {
    const id = req.params.id
    console.log(id)
    const realEstatesByCategory
        = await getAllSchedulesService(Number(id))

    return res.status(200).json(realEstatesByCategory)
}


export { getAllSchedulesController, postSchedulesController }
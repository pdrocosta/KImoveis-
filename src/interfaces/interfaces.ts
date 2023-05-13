import { z } from 'zod'
import { userSchema, userSchemaRequest, userSchemaResponse, userSchemaUpdateRequest, usersSchemaResponse } from '../schemas/users.schemas'
import { loginSchema } from '../schemas/login.schemas'
import { categoriesResponseSchema, categorySchema, categorySchemaRequest } from '../schemas/categories.schemas'
import { postReqScheduleSchema, scheduleSchema } from '../schemas/schedules.schemas'
import { postRealEstateSchemaRequest, realEstateSchema, realEstatesResponseSchemas } from '../schemas/realEstate.schema'

type TUser = z.infer<typeof userSchema>
type TReqPostUser = z.infer<typeof userSchemaRequest>
type TUserRes = z.infer<typeof userSchemaResponse>
type TRespAllUsers = z.infer<typeof usersSchemaResponse>
type TReqPatchUser = z.infer<typeof userSchemaUpdateRequest>
type TLoginUser = z.infer

type TReqLogin = z.infer<typeof loginSchema>

type TReqPostCategory = z.infer<typeof categorySchemaRequest>
type TResAllCategories = z.infer<typeof categoriesResponseSchema>
type TCategory = z.infer<typeof categorySchema>

type TSchedule = z.infer<typeof scheduleSchema>
type TReqSchedule = z.infer<typeof postReqScheduleSchema>

type TRealEstate = z.infer<typeof realEstateSchema>
type TReqRealEstate = z.infer<typeof postRealEstateSchemaRequest>
type TRealEstatesByCategory = z.infer<typeof realEstatesResponseSchemas>

export { TReqPatchUser, TRealEstatesByCategory, TReqSchedule, TReqPostUser, TRespAllUsers, TUserRes, TReqLogin, TReqPostCategory, TCategory, TRealEstate, TReqRealEstate, TResAllCategories, TSchedule, TUser }
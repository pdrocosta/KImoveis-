import { z } from 'zod'
import { userSchemaRequest, userSchemaResponse, userSchemaUpdateRequest, usersSchemaResponse } from '../schemas/users.schemas'
import { loginSchema } from '../schemas/login.schemas'
import { postRealEstateSchemaRequest } from '../schemas/realEstate.schema'
import { categoriesResponseSchema, categorySchemaRequest } from '../schemas/categories.schemas'

type TReqPostUser = z.infer<typeof userSchemaRequest>
type TUserRes = z.infer<typeof userSchemaResponse>
type TRespAllUsers = z.infer<typeof usersSchemaResponse>
type TReqPatchUser = z.infer<typeof userSchemaUpdateRequest>


type TReqLogin = z.infer<typeof loginSchema>

type TReqPostCategory = z.infer<typeof categorySchemaRequest >

type TResAllCategories = z.infer<typeof categoriesResponseSchema>
export { TReqPatchUser,TReqPostUser, TRespAllUsers,TUserRes, TReqLogin }
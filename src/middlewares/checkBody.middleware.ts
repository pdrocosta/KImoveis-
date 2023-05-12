import { NextFunction, Request, Response } from 'express'
import 'dotenv/config'
import jwt from 'jsonwebtoken'
import { ZodTypeAny } from 'zod'
import { AppError } from '../error'

export const body =
    (schema: ZodTypeAny) =>
        (req: Request, resp: Response, next: NextFunction) => {
            const validatedData = schema.parse(req.body)

            req.body = validatedData

            return next()
        }

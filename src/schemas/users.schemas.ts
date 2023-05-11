import { z } from "zod";

export const userSchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    email: z.string().optional(),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string().nullable(),
    updatedAt: z.string().nullish(),
    deletedAt: z.string().nullish(),
});

export const userSchemaRequest = userSchema
    .omit({
        deletedAt: true,
        createdAt: true,
        id: true,
    })


export const userSchemaUpdateRequest = userSchemaRequest
    .omit({ admin: true, id: true })
    .partial()

export const userSchemaResponse = userSchema.omit({
    password: true,
})

export const usersSchemaResponse = z.array(userSchemaResponse)
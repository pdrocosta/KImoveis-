import { z } from "zod";

export const categorySchema = z.object({
    name: z.string().max(45),
    id: z.number(),
});


export const categorySchemaRequest = categorySchema
    .omit({
        id: true,
    })

export const categoriesResponseSchema = z.array(categorySchema)
import { z } from "zod";

export const categoryScehma = z.object({
    name: z.string().max(45),
    id: z.number(),
    categoryId: z.number()
});


export const categorySchemaRequest = categoryScehma
    .omit({
        id: true,
        categoryId: true, 
    })

    export const categoriesResponseSchema = z.array(categoryScehma)
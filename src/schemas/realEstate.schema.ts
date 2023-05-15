import { z } from "zod";
import { categorySchema } from "./categories.schemas";


export const addressSchema = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(7).optional().nullable(),
    city: z.string().max(20),
    state: z.string().max(2),
});

export const addressSchemaRequest = addressSchema.omit({ id: true });

export const realEstateSchema = z.object({
    id: z.number(),
    value:  z.union([z.string(), z.number()]),
    size: z.number().positive(),
    sold: z.boolean().default(false),
    createdAt: z.string(),
    updatedAt: z.string(),
    address: addressSchemaRequest,
});

export const postRealEstateSchemaRequest = z.object({
    value:z.union([z.string(), z.number()]).default(0),
    size: z.number().positive(),
    address: addressSchemaRequest
}).extend({
    categoryId: z.number().optional(),
});

export const realEstatesResponseSchemas = z.array(realEstateSchema)







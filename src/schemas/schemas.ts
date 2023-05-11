import { z } from "zod";

export const addressSchema = z.object({
    id: z.number(),
    street: z.date(),
    hour: z.string(),
    realStateID: z.number(),
    addressId: z.number().optional(),
    categoryId: z.number(),
});

export const categorySchema = z.object({
    id: z.number(),
    name: z.string().max(45),
    categoryId: z.number(),
});

export const realEstateSchema = z.object({
    id: z.number(),
    sold: z.number(),
    size: z.number(),
    createdAt: z.date().nullable(),
    updatedAt: z.string().max(120),
    realEstateId: z.array(z.number()),
    categoryId: z.array(z.number()),
});





export const addressRequestSchema = addressSchema.omit({ id: true });

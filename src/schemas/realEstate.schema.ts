import { z } from "zod";
export const realEstateSchema = z.object({
    id: z.number(),
    value: z.number().default(0),
    size: z.number(),
    sold: z.boolean().default(false),
    createdAt: z.date(),
    updatedAt: z.string().nullish(),
    deletedAt: z.string().max(120).nullish(),
    realEstate: z.number(),
    category: z.number(),

});

export const postRealEstateSchemaRequest = z.object({
    value: z.number().default(0),
    size: z.number(),
    category: z.number(),
    adress: z.object({
        street: z.string().max(45),
        zipCode: z.string().max(8),
        number: z.string().max(7).nullish(),
        city: z.string().max(20),
        state: z.string().max(2)
    }),
});

export const realEstatesResponseSchemas = z.array(realEstateSchema)

/*  createdAt: Não deve ser passado, mas gerado pelo typeORM.
updatedAt: Não deve ser passado, mas gerado pelo typeORM. 
sold: Não deve ser passado, mas gerado no momento da validação dos dados no formato boolean com default = false.  */ 
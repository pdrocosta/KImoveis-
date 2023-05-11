import { z } from "zod";

export const scheduleSchema = z.object({
    id: z.number(),
    date: z.string().max(45),
    hour: z.string(),
    userId: z.number(),
    realEstateId: z.number(),
});

export const schedulesResponseSchema = z.array(scheduleSchema)
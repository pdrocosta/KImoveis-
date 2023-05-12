import { z } from "zod";

export const scheduleSchema = z.object({
    id: z.number(),
    date: z.date(),
    hour: z.string(),
    user: z.number(),
    realEstate: z.number(),
});

export const postReqScheduleSchema = scheduleSchema.omit({id:true})

export const schedulesResponseSchema = z.array(scheduleSchema)
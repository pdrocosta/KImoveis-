import { z } from "zod";
import { userSchema } from "./users.schemas";
import { realEstateSchema } from "./realEstate.schema";

export const scheduleSchema = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstate: realEstateSchema,
    user: userSchema,
    realEstateId: z.number()
});

export const postReqScheduleSchema = scheduleSchema.omit({ id: true, user: true, realEstate: true })


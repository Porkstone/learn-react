import { router, publicProcedure, protectedProcedure } from "../trpc";
import { z } from "zod";

export const exampleRouter = router({
  example: publicProcedure
    .input(z.object({ text: z.string().nullish}).nullish())
    .query(({ input: any }) => {
        return {
            text: `Hello ${input?.text ?? "world"}`,
        };
        }),
    });
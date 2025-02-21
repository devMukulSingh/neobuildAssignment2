import { z } from "zod"

export const loginSchema = z.object({
    userName: z.string({ message: "Username is required." }).trim().min(1,{
        message:"Username is required."
    }).max(100,{
        message:"Max 100 characters allowed"
    }),
    password: z.string({ message: "Password is required." }).trim().min(1, {
        message: "Password is required."
    }).max(50, {
        message: "Max 100 characters allowed"
    }),

})
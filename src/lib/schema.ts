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


export const ticketBookSchema = z.object({
    ticketCount : z.coerce.number({
        required_error:"Ticket count is required",
        invalid_type_error:"Invalid ticket count"
    }),
    showTime : z.enum(["9:00","12:00","18:00"],{ required_error:"Show time is required" }),
    date : z.date({required_error:"Date is required"})
})
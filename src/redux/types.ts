import { ticketBookSchema } from "@/lib/schema"
import { z } from "zod"


export type TinitialState = {
    movies: Tmovie[] 
    bookedTickets:TTicket[]
}


export type Tmovie = {
    title:string,
    id: string,
    poster:string,
    ticketPrice:number,

}

export type TTicket = z.infer<typeof ticketBookSchema> & {
    ticketPrice:number
    movie: string
    id:string
}
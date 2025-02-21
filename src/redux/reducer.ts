import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TinitialState, Tmovie, TTicket } from "./types";
import { movies } from "@/lib/constants";


const initialState: TinitialState = {
    movies: movies,
    bookedTickets: []
}

const rootSlice = createSlice({
    initialState,
    name: 'rootSlice',
    reducers: {
        setBookedTicket: (state, action: PayloadAction<TTicket>) => {
            state.bookedTickets.push(action.payload)
        }
    }
})

export default rootSlice.reducer;

export const { setBookedTicket } = rootSlice.actions
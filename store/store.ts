import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "./weatherSlice"
import timeSlice from "./timeSlice"
import degreeSlice from "./degreeSlice"
import placeSlice from "./placeSlice"
import searchSlice from "./searchSlice"

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        time: timeSlice,
        degree: degreeSlice,
        place: placeSlice,
        search: searchSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

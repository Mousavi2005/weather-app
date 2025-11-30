import { configureStore } from "@reduxjs/toolkit"
import weatherSlice from "./weatherSlice"
import timeSlice from "./timeSlice"
import degreeSlice from "./degreeSlice"
import placeSlice from "./placeSlice"

export const store = configureStore({
    reducer: {
        weather: weatherSlice,
        time: timeSlice,
        degree: degreeSlice,
        place: placeSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;

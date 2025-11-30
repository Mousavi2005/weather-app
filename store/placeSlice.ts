import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentCity: 'Tehran' as string
}

const placeSlice = createSlice({
    name: "place slice",
    initialState,
    reducers: {
        setCurrentCity: (state, action) => { state.currentCity = action.payload }
    }
})

export const { setCurrentCity } = placeSlice.actions
export default placeSlice.reducer

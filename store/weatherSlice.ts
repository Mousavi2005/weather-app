import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    weather : null
}

const weatherSlice = createSlice({
    name: "weather slice",
    initialState,
    reducers: {
        setWeather: (state, action) => {state.weather = action.payload}
    }
})

export const {setWeather} = weatherSlice.actions
export default weatherSlice.reducer

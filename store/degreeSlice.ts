import { createSlice } from "@reduxjs/toolkit";

type Degree = 'F' | 'C'

const initialState = {
    degree: 'C' as Degree
}

const degreeSlice = createSlice({
    name: "degree slice",
    initialState,
    reducers: {
        setActiveDegree: (state, action) => { state.degree = action.payload }
    }
})

export const { setActiveDegree } = degreeSlice.actions
export default degreeSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

type Time = 'Today' | 'Week'

const initialState = {
    activeTime: 'Today' as Time
}

const timeSlice = createSlice({
    name: "time slice",
    initialState,
    reducers: {
        setActiveTime: (state, action) => { state.activeTime = action.payload }
    }
})

export const { setActiveTime } = timeSlice.actions
export default timeSlice.reducer

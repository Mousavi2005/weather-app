import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    isSearching: false,
    error: null
}

const searchSlice = createSlice({
    name: "search slice",
    initialState,
    reducers: {
        setIsSearching: (state, action) => {state.isSearching = action.payload},
        setError: (state, action) => {state.error = action.payload}
    }
})

export const {setIsSearching, setError} = searchSlice.actions
export default searchSlice.reducer

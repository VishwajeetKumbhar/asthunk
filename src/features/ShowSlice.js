import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 25 }

export const showSlice = createSlice({
    name: "show",
    initialState,
    reducers: {
        showData: (state, action) => {
            state.value = state.value
        },
        add :(state , action)=>{
            state.value = state.value 
        }
    }
})

export const { showData, add } = showSlice.actions;

export default showSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';


const initialState = {
    loading: false,
    error: "",
    categories: [],
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        addCategory: (state, { payload }) => {
            payload.uuid = uuidv4();
            state.categories.push(payload);
        },
        removeCategory: (state, action) => {
            state.categories = state.categories.filter(u => u.uuid !== action.payload)
        },
    },
});

export const { addCategory, removeCategory } = categorySlice.actions;

export default categorySlice.reducer;
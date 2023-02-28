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

        updateItem: (state, action) => {
            let index = state.categories.findIndex(u => u.uuid == action.payload.uuid);
            state.categories[index] = action.payload;
        },
    },
});

export const { addCategory, removeCategory,updateItem } = categorySlice.actions;

export default categorySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    loading: false,
    error: "",
    categories: [],
}

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {

        addCategory: (state, action ) => {
            // payload.uuid = uuidv4();
            state.categories.push(action.payload);
        },

        removeCategory: (state, action) => {
            state.categories = state.categories.filter(u => u.uuid !== action.payload)
        },

        updateItem: (state, action) => {
            let index = state.categories.findIndex(u => u.uuid === action.payload.uuid);
            state.categories[index] = action.payload;
            // let index = state.categories.findIndex(u.name == action.payload);
            // console.log('hello',index)
        },
    },
});

export const { addCategory, removeCategory,updateItem } = categorySlice.actions;

export default categorySlice.reducer;

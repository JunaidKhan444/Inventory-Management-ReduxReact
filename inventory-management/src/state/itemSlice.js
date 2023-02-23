import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
    loading: false,
    error: "",
    items: [],
}

const itemSlice = createSlice({
    name: "item",
    initialState,
    reducers: {
        addItem: (state, { payload }) => {
            payload.uuid = uuidv4();
            state.items.push(payload);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(u => u.uuid !== action.payload)
        },
        updateItem: (state, action) => {
            let index = state.items.findIndex(u => u.uuid == action.payload.uuid);
            state.items[index] = action.payload; 
            
        },
    },
});

export const { addItem, removeItem,updateItem } = itemSlice.actions;

export default itemSlice.reducer;
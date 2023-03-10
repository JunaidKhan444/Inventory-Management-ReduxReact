import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import categoryReducer from "./categorySlice";
import itemReducer from "./itemSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
        item: itemReducer,
    }
});

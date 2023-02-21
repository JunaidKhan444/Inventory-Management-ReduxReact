import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../api/userApi";

const initialState = {
    loading: false,
    error: "",
    users: [],
    length: 0,
    
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload)
        },
        removeUser: (state, action) => {
            state.users = state.users.filter(u => u !== action.payload)
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => { state.loading = true });
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(getUsers.rejected, (state, action) => { state.error = action.error });

    }
});

export const { addUser, removeUser, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
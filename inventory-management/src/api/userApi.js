import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    "user_api",
    async(id, thunkAPI) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users)
        return users;
    }
)
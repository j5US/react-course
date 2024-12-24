import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const fetchUsers = createAsyncThunk("users/fetch",async ()=>{
    const response = await axios.get("http://localhost:3005/users");

    // DEV ONLY!!!
    await pause(2000);

    return response.data;
});

// DEV ONLY!!!
// eslint-disable-next-line 
const pause = (duration) =>{
    return new Promise((resolve)=>{
        setTimeout(resolve,duration);
    });
}
// action types ---
// fetchUsers.pending === "users/fetch/pending"
// fetchUsers.fulfilled === "users/fetch/fulfilled"
// fetchUsers.rejected=== "users/fetch/rejected"

export {fetchUsers};
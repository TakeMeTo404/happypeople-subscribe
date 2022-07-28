/*
import { v4 as uuidv4 } from 'uuid';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Step} from "./stepSlice";

type User = {}

type AuthState = {
    device_global_id: string,
    user: User | null,
    token: string | null
}

const initialState: AuthState = {
    device_global_id: uuidv4(),
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<Omit<AuthState, 'device_global_id'>>) {
            state.user = action.payload.user
            state.token = action.payload.token
        }
    }
})

export default authSlice.reducer;
*/
export const Afds = 1;

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type User = {
    id: number,
    full_name: string,
    phone_number: string,
    uuid: string,
    avatars: {
        medium: string
    }
}

export type AuthState = {
    user: User | null,
    token: string | null
}

const initialState: AuthState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials(state, action: PayloadAction<AuthState>) {
            state.token = action.payload.token
            state.user = action.payload.user
        },
        resetAuth(state) {
            state.token = null;
            state.user = null;
        }
    }
})

export default authSlice.reducer;

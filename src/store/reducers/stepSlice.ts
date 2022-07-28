import {createSlice} from "@reduxjs/toolkit";

export enum Step {
    PHONE,
    SMS,
    NAME,
    PAY,
    SUCCESS
}

type StepState = {
    current: Step
    previous: Step
}

const initialState: StepState = {
    current: Step.PHONE,
    previous: Step.PHONE
}

export const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        next(state) {
            if (state.current === Step.SUCCESS) throw new Error();
            state.previous = state.current;
            state.current = state.current + 1;
        },
        back(state) {
            if (state.current === Step.PHONE) throw new Error();
            state.previous = state.current;
            state.current = state.current - 1;
        }
    },
    extraReducers: {

    }
})

export default stepSlice.reducer;

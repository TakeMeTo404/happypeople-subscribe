import {createSlice, PayloadAction} from "@reduxjs/toolkit";

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
        goStep(state, {payload}: PayloadAction<Step>) {
            state.previous = state.current
            state.current = payload
        }
    }
})

export default stepSlice.reducer;

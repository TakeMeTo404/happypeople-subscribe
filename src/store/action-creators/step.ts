import {Dispatch} from "redux";
import {StepAction} from "../reducers/stepReducer";

export const goBack = () => {
    return async (dispatch: Dispatch<StepAction>) => {
        dispatch({type: "go_back"})
    }
}

export const goNext = () => {
    console.log("called go next")
    return async (dispatch: Dispatch<StepAction>) => {
        console.log("dispatch")
        dispatch({type: "go_next"})
    }
}

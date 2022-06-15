export enum Step {
    PHONE,
    SMS,
    NAME,
    PAY,
    SUCCESS
}

export type StepAction =
    | {type: "go_back"}
    | {type: "go_next"};

type StepState = {
    current: Step
    previous: Step
}

const defaultState: StepState = {
    current: Step.PHONE,
    previous: Step.PHONE
}

export default function (state = defaultState, action: StepAction): StepState {
    switch (action.type) {
        case "go_back": {
            if (state.current === Step.PHONE) throw new Error();
            return {
                current: state.current - 1,
                previous: state.current
            }
        }
        case "go_next": {
            if (state.current === Step.SUCCESS) throw new Error();
            return {
                current: state.current + 1,
                previous: state.current
            }
        }
        default: return state;
    }
}

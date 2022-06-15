import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as StepActionCreators from "../store/action-creators/step";

export default function () {
    const dispatch = useDispatch();
    return bindActionCreators(
        {
            ...StepActionCreators
        },
        dispatch
    )
}

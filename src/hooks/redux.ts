import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {stepSlice} from "../store/reducers/stepSlice";
import {happyApi} from "../services/HappyService";

const allActions = {
    ...stepSlice.actions
}
export const useActions = () => allActions;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const usea = happyApi.endpoints.verify

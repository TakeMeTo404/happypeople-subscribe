import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";
import {stepSlice} from "../store/reducers/stepSlice";
import {happyApi} from "../services/HappyService";
import {authSlice} from "../store/reducers/authSlice";

const allActions = {
    ...stepSlice.actions,
    ...authSlice.actions
}
export const useActions = () => allActions;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

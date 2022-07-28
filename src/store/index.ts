import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import stepReducer from "./reducers/stepSlice";
import {configureStore} from "@reduxjs/toolkit";
import {happyApi} from "../services/HappyService";

const rootReducer = combineReducers({
    step: stepReducer,
    [happyApi.reducerPath]: happyApi.reducer,
})

const setupStore = () => configureStore({
    devTools: true,
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(happyApi.middleware)
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

export const store = setupStore();

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import stepReducer from "./reducers/stepReducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    step: stepReducer
})

export type RootState = ReturnType<typeof rootReducer>;

// const r = compose(rootReducer, applyMiddleware(thunk), composeWithDevTools());

export default createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);


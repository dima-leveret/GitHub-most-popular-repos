import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reposReducer from "./reposReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReucer = combineReducers({
    repos: reposReducer,
})

export const store = createStore(rootReucer, composeWithDevTools(applyMiddleware(thunk)))
import { combineReducers } from "redux"
import todoReducer from "./reducer"
import { createStore } from "redux"

const allReducers = combineReducers({ todoReducer })

export const store = createStore(allReducers)
import { createStore,combineReducers,applyMiddleware } from "redux";
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {Events} from './events'
export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            events:Events
        }),
        applyMiddleware(thunk,logger)
    )
    return store
}
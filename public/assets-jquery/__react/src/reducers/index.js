import { combineReducers } from "redux";
import hello from './Hello'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    router: routerReducer,
    hello,
})
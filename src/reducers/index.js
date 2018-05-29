import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'

import hello from './Hello'
import { produtos } from './Produtos'
import { produtoEmAlteracao } from './Produtos'


export default combineReducers({
    router: routerReducer,
    hello,
    produtos,
    produtoEmAlteracao,
})
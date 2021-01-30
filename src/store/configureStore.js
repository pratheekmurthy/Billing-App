import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logReducer from '../reducers/logReducer'
import customersReducer from '../reducers/customerReducer'
import productsReducer from '../reducers/productsReducer'

const root = {
    log : logReducer,
    customers: customersReducer,
    products: productsReducer
}

const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore
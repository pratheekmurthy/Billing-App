import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {logReducer,accountReducer} from '../reducers/logReducer'
import customersReducer from '../reducers/customerReducer'
import {productsReducer} from '../reducers/productsReducer'
import {currentBillReducer,allBillReducer,lineItems} from '../reducers/billReducer'


const root = {
    log : logReducer,
    customers: customersReducer,
    products: productsReducer,
    customer: customersReducer,
    lineItem: lineItems,
    allBill: allBillReducer,
    currentBill: currentBillReducer,
    profile :accountReducer
}

const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore
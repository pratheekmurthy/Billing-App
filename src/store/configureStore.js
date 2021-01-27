import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logReducer from '../reducers/logReducer'

const root = {
    log : logReducer,
}

const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore
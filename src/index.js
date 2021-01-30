import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './components/App'
import {Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startGetAllCust } from './actions/customerActions'
import { startGetAllProd } from './actions/products-actions'

const store = configureStore()

// const dispatch = useDispatch()


    if(localStorage.getItem('token')){
      store.dispatch(startGetAllCust())
      store.dispatch(startGetAllProd())
    }


const ele =(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
)


ReactDOM.render(ele,document.getElementById("root"));
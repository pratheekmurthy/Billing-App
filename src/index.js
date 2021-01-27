import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter,Link} from 'react-router-dom'

import App from './components/App'
import {Provider } from 'react-redux'
import configureStore from './store/configureStore'
const store = configureStore()

console.log(store.getState())

const ele =(
    <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
    </BrowserRouter>
)


ReactDOM.render(ele,document.getElementById("root"));
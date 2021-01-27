import React from 'react'
import {Link,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {toggleStatus} from '../actions/loginAction'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Customers from './Customers'
import Products from './Products'
import swal from 'sweetalert'

const Navbar=(props)=>{
    const loggedIn = useSelector(state => state.log)
    const dispatch = useDispatch()


    return (<div>
       <div>
       <Link to="/">Home</Link>|

        {loggedIn ? (
        <div><Link to="/account">Account</Link>|
            <Link to="/customers">Customers</Link>|
            <Link to="/products">Products</Link>|
            <Link to="/" onClick={()=>{
                 localStorage.removeItem('token')
                 dispatch(toggleStatus())
                 swal("Cool!", "You have logged out successfully!", "success")
            }}>logout</Link>
        </div>)
        :
        (
        <div>
            <Link to="register">Register</Link>|
            <Link to="/login">LogIn</Link></div>)}
        
       </div>
        <div>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/register" component={Register} exact={true}/>
            <Route path="/login"  component={Login} exact={true}/>
            <Route path="/Account"  component={Account} exact={true}/>
            <Route path="/customers"  component={Customers} exact={true}/>
            <Route path="/products"  component={Products} exact={true}/>
            
        </div>
    </div>
    )
}

export default Navbar
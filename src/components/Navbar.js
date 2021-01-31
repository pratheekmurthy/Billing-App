import React from 'react'
import {Link,Route} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {StyledLink} from '../styling/app-styled'
import {toggleStatus} from '../actions/loginAction'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Customers from '../components/customers/Customers'
import swal from 'sweetalert'
import ProductsContainer from './products/ProductsContainer'
import Billgenerator from './Billoperations/Billgenerator'

const Navbar=(props)=>{
    const loggedIn = useSelector(state => state.log)
    const dispatch = useDispatch()


    return (<div>
       <div>
       {loggedIn ? (
        <div>
            <StyledLink to="/">Home</StyledLink>|
            <StyledLink to="/account">Account</StyledLink>|
            <StyledLink to="/customers">Customers</StyledLink>|
            <StyledLink to="/products">Products</StyledLink>|
            <StyledLink to="/billing">Billing</StyledLink>|
            <StyledLink to="/" onClick={()=>{
                 localStorage.removeItem('token')
                 dispatch(toggleStatus())
                 swal("Cool!", "You have logged out successfully!", "success")
            }}>logout</StyledLink>
        </div>)
        :
        (
        <div>
             <StyledLink to="/">Home</StyledLink>|
            
            <StyledLink to="register">Register</StyledLink>|
            <StyledLink to="/login">LogIn</StyledLink></div>)}
            
        
       </div>
        <div>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/register" component={Register} exact={true}/>
            <Route path="/login"  component={Login} exact={true}/>
            <Route path="/Account"  component={Account} exact={true}/>
            <Route path="/customers"  component={Customers} exact={true}/>
            <Route path="/products"  component={ProductsContainer} exact={true}/>
            <Route path="/billing" component={Billgenerator} exact={true} />
            
        </div>
    </div>
    )
}

export default Navbar
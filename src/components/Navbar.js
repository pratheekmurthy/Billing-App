import React from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
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
            
            <StyledLink to="/">Home</StyledLink>&nbsp;
            <StyledLink to="/account">Profile</StyledLink>&nbsp;
            <StyledLink to="/customers">Customers</StyledLink>&nbsp;
            <StyledLink to="/products">Products</StyledLink>&nbsp;
            <StyledLink to="/billing">Billing</StyledLink>&nbsp;
            <StyledLink to="/" onClick={()=>{
                 localStorage.removeItem('token')
                 dispatch(toggleStatus())
                 swal("Cool!", "You have logged out successfully!", "success")
            }}>logout</StyledLink>
        </div>)
        :
        (
        <div>
             <StyledLink to="/">Home</StyledLink>&nbsp;
            <StyledLink to="register">Register</StyledLink>&nbsp;
            <StyledLink to="/login">LogIn</StyledLink></div>)}
            
        
       </div>
        <div>
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/register" component={Register} exact={true}/>
            <Route path="/login"  component={Login} exact={true}/>
            <PrivateRoute path="/Account"  component={Account} exact={true}/>
            <PrivateRoute path="/customers"  component={Customers} exact={true}/>
            <PrivateRoute path="/products"  component={ProductsContainer} exact={true}/>
            <PrivateRoute path="/billing" component={Billgenerator} exact={true} />
        </Switch>   
        </div>
    </div>
    )
}

export default Navbar
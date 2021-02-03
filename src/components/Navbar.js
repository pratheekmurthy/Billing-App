import React from 'react'
import {Route,Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import {useSelector,useDispatch} from 'react-redux'
import {StyledLink} from '../styling/app-styled'
import {toggleStatus} from '../actions/loginAction'
import {Paper} from '@material-ui/core'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Account from './Account'
import Customers from '../components/customers/Customers'
import swal from 'sweetalert'
import ProductsContainer from './products/ProductsContainer'
import Billgenerator from './Billoperations/Billgenerator'
import AllBill from './Billoperations/AllBill'
import Dashboard from './Dashboard'
import Showbills  from '../Showbills'

const Navbar=(props)=>{
    const loggedIn = useSelector(state => state.log)
    const dispatch = useDispatch()


    return (<div >
        
       <div className="navbarpaper">
           <Paper elevation={2}>
      <div>
       {loggedIn ? (
        <div>
            
            <StyledLink to="/">Home</StyledLink>&nbsp;
            <StyledLink to="/dashboard">Dashboard</StyledLink>&nbsp;
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
      </Paper>
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
            <PrivateRoute path="/Allbills" component={AllBill} exact={true}/>
            <PrivateRoute path="/dashboard" component={Dashboard} exact={true}/>
            <PrivateRoute path="/bills/:id" component={Showbills} exact={true} />
        </Switch>   
        </div>
    </div>
    )
}

export default Navbar
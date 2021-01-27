import React from 'react'
import {Link,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'

const Navbar=(props)=>{
    return (<div>
       <div>
       <Link to="/">Home</Link>|
        <Link to="register">Register</Link>|
        <Link to="/login">LogIn</Link>
       </div>
        <div>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/register" component={Register} exact={true}/>
            <Route path="/login"  component={Login} exact={true}/>
        </div>
    </div>
    )
}

export default Navbar
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginformSubmit} from '../actions/loginAction'
import {Button,Grid,TextField,Paper} from '@material-ui/core'

const Login =(props)=>{
    const [email,setEmail] = useState("")
    const [password,setPassword]= useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleEmail =(e)=> setEmail(e.target.value)
    const handlePassword =(e)=>setPassword(e.target.value)
    const handleReset =(e)=>{
        setEmail("")
        setPassword("")
    }

    const handleRedirect =()=>{
        props.history.push("/")
    }

    const runValidations =()=>{
        if(email.trim().length === 0){
            errors.email= "Email cannot be blank"
        }
        if(password.trim().length === 0){
            errors.password = "Password cannot be blank"
        }
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        runValidations()
        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
            email :email,
            password :password
        }
        dispatch(loginformSubmit(formData,handleRedirect))
        
    }else {
        console.log('form errors', errors)
        setFormErrors(errors)
    }
}

    return(<div className="loginPaper">
        <Paper elevation={3}>
            <h3>Login</h3>
        <Grid align="center">
        <form onSubmit={handleSubmit}>
            <TextField  id="outlined-basic" label="Enter your email" variant="outlined" type="email" value={email} onChange={handleEmail} />{formErrors.email && <span> { formErrors.email } </span>}<br/><br/>
            <TextField id="outlined-basic" label="Enter your Password" variant="outlined" type="password" value={password} onChange={handlePassword} />{formErrors.password && <span> { formErrors.password } </span>}<br/><br/>
            <Button variant="contained" color="secondary" onClick={handleReset}>Reset</Button><Button variant="contained" color="primary" onClick={handleSubmit}>Log in</Button>
        </form>
        </Grid>
        </Paper>
    </div>)
}

export default Login
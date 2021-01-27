import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {loginformSubmit} from '../actions/loginAction'

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
        console.log("i am here")
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

    return(<div>
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={handleEmail} placeholder="Enter your email"/>{formErrors.email && <span> { formErrors.email } </span>}<br/>
            <input type="password" value={password} onChange={handlePassword} placeholder="Enter your Password"/>{formErrors.password && <span> { formErrors.password } </span>}<br/>
            <button onClick={handleReset}>Reset</button><input type="submit" value="LogIN"/>
        </form>
    </div>)
}

export default Login
import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import validator from 'validator'
import {formSubmit} from '../actions/loginAction'
import {TextField} from '@material-ui/core'

const Register=(props)=>{
    const[userName,setUsername] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [businessname,setbusinessname] = useState("")
    const [address,setAddress] = useState("")
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const dispatch = useDispatch()

    const handleUsername =(e)=>setUsername(e.target.value)
    const handleEmail =(e)=>setEmail(e.target.value)
    const handlepassword =(e)=> setPassword(e.target.value)
    const handleBusiness=(e)=> setbusinessname(e.target.value)
    const handleAddress =(e)=>setAddress(e.target.value)

    const handleBack =(e)=>props.history.push("/")
    const handleCancel =(e)=> window.location.reload()

    const handleReset =()=>{
        setUsername("")
        setEmail("")
        setPassword("")
        setbusinessname("")
        setAddress("")
    }

    const handleRedirect =()=>{
        props.history.push("/login")
    }

    const runValidatons =()=>{
        if(userName.trim().length === 0){
            errors.userName = "user name cannot be blank"
        }
        if(email.trim().length === 0){
            errors.email = "email cannot be blank"
        }else if (!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
        if(password.trim().length === 0){
            errors.password = "password cannot be blank"
        }
        if(businessname.trim().length === 0){
            errors.businessName = "Business name cannot be blank"
        }
        if(address.trim().length === 0){
            errors.address = "Address cannot be blank"
        }

    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        runValidatons()
        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
            username :userName,
            email :email,
            password :password,
            businessName :businessname,
            address :address
        }
        dispatch(formSubmit(formData,handleRedirect))
        handleReset()
    }else {
        console.log('form errors', errors)
        setFormErrors(errors)
        }
}




    return (<div>
        <button onClick={handleBack} class="btn btn-danger">Back</button>
        <div className="registerBox">
        <div class="card">
            <div class="card-body">
                <h3>Register</h3>
        <form onSubmit={handleSubmit}>
            <TextField  id="outlined-basic" label="Enter your name" variant="outlined" type="text" value={userName} placeholder="Enter your Name" onChange={handleUsername}/>{formErrors.userName && <span> { formErrors.userName } </span>}<br/>
            <TextField  id="outlined-basic" label="Enter your Email" variant="outlined" type="email" value={email} placeholder="Enter your Email" onChange={handleEmail}/>{formErrors.email && <span> { formErrors.email } </span>}<br/>
            <TextField  id="outlined-basic" label="Enter your password" variant="outlined" type="password" value={password} placeholder="Enter your password" onChange={handlepassword}/>{formErrors.password && <span> { formErrors.password } </span>}<br/>
            <TextField  id="outlined-basic" label="Enter your business name" variant="outlined" type="text" value={businessname} placeholder="Enter your business name" onChange={handleBusiness}/>{formErrors.businessName && <span> { formErrors.businessName } </span>}<br/>
            <TextField  id="outlined-basic" label="Enter your address" variant="outlined" type="text" value={address} placeholder="Enter your address" onChange={handleAddress}/>{formErrors.address && <span> { formErrors.address } </span>}<br/>
            <br/><button onClick={handleCancel} class="btn btn-danger">Cancel</button><input class="btn btn-success" type="submit" value="Register"/>
        </form>
        </div>
        </div>
        </div>
    </div>)
}

export default Register
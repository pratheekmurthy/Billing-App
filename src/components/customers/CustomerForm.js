import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Paper,Box,Button,TextField} from '@material-ui/core' 
import validator from 'validator'

import { startEditCust, startPostCust } from '../../actions/customerActions'

const CustomerForm = (props) => {
    const { handleToggle, id, name, mobile: phone, email: eMail  } = props 
    
    const dispatch = useDispatch()

    const [userName, setUserName] = useState(name ? name : '')
    const [mobile, setMobile] = useState(phone ? phone : '')
    const [email, setEmail] = useState(eMail ? eMail : '')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleInputChange = (e) => {
        const attr = e.target.name

        if(attr === 'userName') {
            setUserName(e.target.value)
        } else if(attr === 'mobile') {
            setMobile(e.target.value)
        } else if(attr === 'email') {
            setEmail(e.target.value)
        }
    }

    const runValidations = () => {
        //name
        if(userName.trim().length === 0) {
            errors.userName = 'name cannot be blank'
        } else if(userName.trim().length < 5) {
            errors.userName = 'name should have more than 5 characters'
        }

        
        //mobile
        if(mobile.trim().length === 0) {
            errors.mobile = 'mobile cannot be blank'
        } else if(mobile.length !== 10) {
            errors.mobile = 'mobile should be 10 digits'
        }

        //email
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }

    }

    const resetForm = () => {
        setUserName('')
        setMobile('')
        setEmail('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                name: userName,
                mobile: mobile,
                email: email
            }
            
            if(!(id)) {
                dispatch(startPostCust(formData))
                resetForm()
            } else {
                dispatch(startEditCust(id,formData))
                handleToggle()
            }


        } else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }

    }

    return (
        <div className="productform">
        <Paper>
            <br/>
            <h3>Add Customer</h3>
            <form onSubmit={handleSubmit}>
            <TextField  id="outlined-basic" label='enter name*' variant="outlined"
                    type='text'
                    name='userName'
                    value={userName}
                    onChange={handleInputChange}
                /><br />
                {formErrors.userName && <span style={{color:'red'}}> { formErrors.userName } </span>}<br />

                <TextField  id="outlined-basic" label='enter mobile*' variant="outlined"
                    type='text'
                    name='mobile'
                    value={mobile}
                    onChange={handleInputChange}
                /><br />
                {formErrors.mobile && <span style={{color:'red'}}> { formErrors.mobile } </span>}<br />

                <TextField  id="outlined-basic" label='enter mobile*' variant="outlined"
                    name='email'
                    value={email}
                    onChange={handleInputChange}
                    placeholder='enter email'
                /><br />
                {formErrors.email && <span style={{color:'red'}}> { formErrors.email } </span>}<br />
                
                <input 
                    type='submit'
                    value={id ? 'Save' : 'Add'} class="btn btn-primary"
                />

                <input 
                    type='button'
                    value='cancel'
                    onClick={() => {
                        resetForm()
                    }} class="btn btn-danger"
                />
            </form>
            </Paper>
        </div>
        
        
    )
}

export default CustomerForm
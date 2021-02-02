import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// import {formWrapper} from '../../styling/app-styled'
import styled from 'styled-components'
import {Paper,Box,Button,TextField} from '@material-ui/core' 
import { startEditProd, startPostProd } from '../../actions/products-actions'


const formWrapper = styled.div`
    display : flex;
    height : 50%;
    width : 50%;
    background-color : blue;
`;
const ProductForm = (props) => {
    const { id, name: prodName , price: prodPrice, handleToggle } = props 
    const dispatch = useDispatch()

    const [name, setName] = useState(prodName ? prodName : '')
    const [price, setPrice] = useState(prodPrice ? prodPrice : '')
    const [formErrors, setFormErrors] = useState({})
    const errors = {}

    const handleInputChange = (e) => {
        const attr = e.target.name

        if(attr === 'name') {
            setName(e.target.value)
        } else if(attr === 'price') {
            setPrice(e.target.value)
        } 
    }

    const runValidations = () => {
        //name
        if(name.trim().length === 0) {
            errors.name = 'product name cannot be blank'
        }

        if(price.length === 0) {
            errors.price = 'price cannot be blank'
        }

    }

    const resetForm = () => {
        setName('')
        setPrice('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0){
            setFormErrors({})

            const formData = {
                name: name,
                price: price
            }
    
            if( !(id)) {
                dispatch(startPostProd(formData))
                resetForm()
            } else {
                dispatch(startEditProd(id,formData))
                handleToggle()
            }


        } else {
            console.log('form errors', errors)
            setFormErrors(errors)
        }

    }

    return (
        <div className="productform">
            <Paper elevation={3} variant="outlined" square >
           
            <h3>Add Product</h3>
            <form onSubmit={handleSubmit}>
                    <TextField  id="outlined-basic" label="enter product name*" variant="outlined"
                    type='text'
                    name='name'
                    value={name}
                    onChange={handleInputChange}
                /><br />
                {formErrors.name && <span style={{color:'red'}}> { formErrors.name } </span>}<br />

                <TextField  id="outlined-basic" label='enter price*' variant="outlined"
                    type='text'
                    name='price'
                    value={price}
                    onChange={handleInputChange}
                /><br />
                {formErrors.price && <span style={{color:'red'}}> { formErrors.price } </span>}<br />
                
                <input 
                    type='submit'
                    value={id ? 'Save' : 'Add'} class="btn btn-primary"
                />

                <input 
                    type='button'
                    value='cancel'
                    onClick={() => {
                        resetForm()
                    }}
                    class="btn btn-danger"
                />
            </form>
           
            </Paper>
            </div>
       
    )
}

export default ProductForm
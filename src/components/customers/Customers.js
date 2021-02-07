import React from 'react'
import CustomerForm from './CustomerForm'
import CustomersList from './CustomerList'



const Customers =(props)=>{

    return (<div className="container">
            <CustomerForm />
            <CustomersList/>
    </div>)
}

export default Customers
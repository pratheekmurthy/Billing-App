import React from 'react'
import CustomerForm from './CustomerForm'
import CustomersList from './CustomerList'
import CustomerItem from './CustomerItem'

const Customers =(props)=>{
    return (<div>
            <CustomersList/>
            <CustomerForm />
    </div>)
}

export default Customers
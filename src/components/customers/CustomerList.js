import React from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'

const CustomersList = (props) => {
    const customers = useSelector(state => state.customers)
    

    return (
        <div >
            {customers.length === 0 ? (
                <p>No customers found</p>
            ) : (
                <div>
                    <br/>
                <h4>No of Customers - { customers.length } </h4>
                    <h5>Customer Name</h5>
                    <CustomerItem />
                </div>
            )}
        </div>
    )
}

export default CustomersList
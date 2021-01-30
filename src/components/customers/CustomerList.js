import React from 'react'
import { useSelector } from 'react-redux'
import CustomerItem from './CustomerItem'

const CustomersList = (props) => {
    

    const customers = useSelector(state => state.customers)
    
    

    return (
        <div>
            {customers.length === 0 ? (
                <p>No customers found</p>
            ) : (
                <div>
                <h2>No of Customers - { customers.length } </h2>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Mobile</th>
                            <th>E-mail</th>
                            <th>View</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <CustomerItem />
                    </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default CustomersList
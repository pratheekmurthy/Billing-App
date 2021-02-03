import React,{useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {startGetAllCust} from '../../actions/customerActions'
import CustomerForm from './CustomerForm'
import CustomersList from './CustomerList'
import CustomerItem from './CustomerItem'
import { startGetAllProd } from '../../actions/products-actions'

const Customers =(props)=>{
    const dispatch =useDispatch()

    



    return (<div className="container">
            <CustomerForm />
            <CustomersList/>
    </div>)
}

export default Customers
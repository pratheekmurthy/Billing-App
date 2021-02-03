import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startDeleteBill} from './actions/billAction'

const Showbills =(props)=>{
    const id = props.match.params.id;

    const bills = useSelector(state => state.allBill)
    const customers = useSelector(state =>state.customers)
    const products = useSelector(state=>state.product)

    const dispatch = useDispatch()
    
    const arr=[]
    const arr1=[]

    const pbills = bills.filter((bill)=>{
        return bill.customer === id
    })

    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id === id
        })
        return arr[0]?.name;
    }
    const displayCustomername =(id)=>{
        arr1 = customers.filter((customer)=>{
            return customer._id === id
        })
        return arr1[0]?.name
    }

    
    const removeBill=(id)=>{
        dispatch(startDeleteBill(id))
    }
    
    
    return(<div>
        {
            pbills.length >0 ? (<div>

                </div>):(<div><p>No transactions made</p></div>)
        }
    </div>)
        
}

export default Showbills
import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startDeleteBill,startGetAllBill} from '../../actions/billAction'

const AllBill =(props)=>{
    const customers = useSelector(state => state.customers)
    const products = useSelector(state=> state.products)
    const allBills = useSelector( state => state.allBill)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetAllBill())
    },[allBills])

    let arr1=[];
    let arr =[];

    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id == id
        })
        return arr[0]?.name;
    }
    const displayCustomername =(id)=>{
        arr1 = customers.filter((customer)=>{
            return customer._id == id
        })
        return arr1[0]?.name
    }

    const removeBill=(id)=>{
        dispatch(startDeleteBill(id))
    }

    return (<div>
        <h3>All Bills</h3><hr/>
        {
            allBills.map((bill)=>{
                return(<div>
                    <p>Date : {bill.date.slice(0, bill.date.indexOf("T")).split("-").join("/")}</p>
                    <h4>Customer Name : {displayCustomername(bill.customer)}</h4>
                    <p>Purchase Details</p>
                    {
                        bill.lineItems.map((item)=>{
                            return <li>{displayname(item.product)} -{item.price}rs * {item.quantity} = {item.subTotal}</li>
                        })
                    }
                    <p>Total Bill Amount - {bill.total}rs</p>
                    <button onClick={()=>{
                        removeBill(bill._id)}}>Delete Bill</button><hr/>
                </div>)
                
            })
        }

    </div>)
}

export default AllBill
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
    },[dispatch])

    let arr1=[];
    let arr =[];

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

    return (<div><br/>
        <h3>All Bills</h3>
        <div className="customercard">
        {
            allBills.map((bill)=>{
                return(<div>
                    <div className="customercard">
                        <div class="card" style={{width: "20rem"}}>
                            <img src="./billlogo.jpg" class="card-img-top" alt="..."/>
                            <div class="card-body">
                            <h5 class="card-title">Customer Name : {displayCustomername(bill.customer)}</h5>
                            <p>Date : {bill.date.slice(0, bill.date.indexOf("T")).split("-").join("/")}</p>
                            <p>Purchase Details</p>
                            {
                            bill.lineItems.map((item)=>{
                                return <li>{displayname(item.product)} -{item.price}rs * {item.quantity} = {item.subTotal}</li>
                            })
                            }
                        <p>Total Bill Amount - {bill.total}rs</p>
                        <button onClick={()=>{
                            removeBill(bill._id)}} className="btn btn-danger">Delete Bill</button>
                    </div>
                    </div>
                    </div>
                </div>)
                
            })
        }</div>

    </div>)
}

export default AllBill
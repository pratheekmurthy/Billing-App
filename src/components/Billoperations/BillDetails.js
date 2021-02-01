import React,{useEffect,useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetAllBill} from '../../actions/billAction'
import Modal from 'react-modal'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete'


const BillDetails =(props)=>{
    const {customerId,date}= props
    const [bill,setBill]= useState({})
    const lineitems = useSelector(state => state.lineItem)
    const allBill = useSelector(state => state.allBill)
    const customers = useSelector(state => state.customer)
    const currentBill = useSelector(state => state.currentBill)
    const products = useSelector(state => state.products)
    const [cart,setCart]= useState([])

    const dispatch =useDispatch()

    console.log(allBill)

    let arr =[];

    const displayname =(id)=>{
        arr = products.filter((product)=>{
            return product._id == id
        })
        return arr[0].name;
    }
    
    useEffect(()=>{
        dispatch(startGetAllBill())

    },[])
    
    
   
    

    return (<div>
            {
                currentBill.length >0 && <div>
                    <p>Invoice</p>
                    <p>Bill id -{currentBill[0]._id}</p>
                    <table border="1">
                        <thead><tr><th>Product Name</th><th>Price</th><th>Quantity</th><th>Sub Total</th></tr></thead>
                        <tbody>
                            {
                            currentBill[0].lineItems.map((ele)=>{
                                return(
                                    <tr>
                                        <td>{displayname(ele.product)}</td>
                                        <td>{ele.price}</td>
                                        <td>{ele.quantity} </td>
                                        <td>{ele.subTotal}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>

                    </table>
                    
                    <p>Total Amount -{currentBill[0].total}</p>

                </div>
            }
        <h6>All Bills</h6>
        {
            allBill.map((bill)=>{
               return (<li onClick={()=>{
                //    showBill(bill._id,bill.customer)
               }}>{bill._id} <button><VisibilityIcon/></button><button><DeleteIcon/></button></li>)
            })
        }
        
    </div>)
}

export default BillDetails
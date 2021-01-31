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
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(startGetAllBill())

    },[])
    
//    console.log(allBill);


    
   const showBill=(id)=>{
       
   }

   console.log(currentBill)
   

    return (<div>
       
         <p>Bill Details</p>
            {
                currentBill.length >0 && <div>
                    <p>Bill id -{currentBill[0]._id}</p>
                    <p>Products:</p>
                    {
                        currentBill[0].lineItems.map((ele)=>{
                            return <p>{ele.product}-{ele.price} *{ele.quantity} = {ele.subTotal} </p>
                        })
                    }
                    <p>Total -{currentBill[0].total}</p>

                </div>
            }
        <h6>All Bills</h6>
        {
            allBill.map((bill)=>{
               return (<li onClick={()=>{
                   showBill(bill._id,bill.customer)
               }}>{bill._id} <button><VisibilityIcon/></button><button><DeleteIcon/></button></li>)
            })
        }
        
    </div>)
}

export default BillDetails
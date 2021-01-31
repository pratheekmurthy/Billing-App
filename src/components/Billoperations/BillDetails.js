import React,{useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {startGetAllBill} from '../../actions/billAction'
import Modal from 'react-modal'
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete'


const BillDetails =(props)=>{
    const {customerId,date}= props
    const lineitems = useSelector(state => state.lineItem)
    const allBill = useSelector(state => state.allBill)
    const customers = useSelector(state => state.customer)
    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(startGetAllBill())

    },[])
    
   console.log(allBill);
    
   const showBill=(id,cust)=>{
       const bill = allBill.filter((bill)=>{
           return bill._id == id
       })

       const customer = customers.filter((customer)=>{
           return customer._id == cust
       })

    

   }

   

    return (<div>
       
         <p>Bill Details</p>
         
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
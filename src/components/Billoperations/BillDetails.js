import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {CreateBill} from '../../actions/billAction'

const BillDetails =(props)=>{
    const {customerId,date}= props
    const lineitems = useSelector(state => state.lineItem)
    const currentBill = useSelector(state=> state.currentBill)

    const dispatch =useDispatch()
    
   
    

    return (<div>
       
         <p>Bill Details</p>
         
        
    </div>)
}

export default BillDetails
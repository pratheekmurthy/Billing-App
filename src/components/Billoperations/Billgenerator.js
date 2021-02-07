import React,{useState} from 'react'
import Select from 'react-select'
import {StyledLink} from '../../styling/app-styled'
import {useSelector} from 'react-redux'
import Lineitems from './Lineitems'



const Billgenerator =(props)=>{
    const [date,setDate] = useState("")
    const [customerId,setCustomerId] = useState("")
    const customers = useSelector(state=>state.customers)
    
    
    const handleDate=(e)=>setDate(e.target.value)
    const handleCustomer =(e)=> setCustomerId(e.target.value)

   

    return (<div>
            <div className="link">
            <StyledLink to="/Allbills" >All Bills</StyledLink>
            </div>

            <div className="container">
         <input type="date" value={date} onChange={handleDate}/><br/><br/>
        <select value={customerId} onChange={handleCustomer}>
            <option value="">Select Customer</option>
            {
                customers.map((customer)=>{
                    return <option value={customer._id}>{customer.name}</option>
                })
            }
        </select>
       <Lineitems customerId={customerId} date={date}/>
       </div>
    </div>)
}

export default Billgenerator
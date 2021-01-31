import React,{useState} from 'react'
import {useSelector} from 'react-redux'
import moment from 'moment'

const Billing =(props)=>{
    const customers = useSelector(state => state.customers)
    const products = useSelector(state=>state.products)

    const [pcustomer,setPcustomer]= useState("")
    const [porder,setPorder]= useState("")
    const [quantity,setQuantity] = useState(0)
    const order ={}
    const data =[]

    const date = moment().format().slice(0,10)
    console.log(date);

    const handleCustomer =(e)=>{
        setPcustomer(e.target.value)
        
    }

    const handleProduct =(e)=>{
        setPorder(e.target.value)
        order.product ={porder}
    }

    const handleqinc =(e)=>{
        let val = quantity + 1;
        setQuantity(val)
    }

    const handleqdec =(e)=>{
        if(quantity > 0){
        setQuantity(quantity -1);
        }
    }

    // console.log(pcustomer)
    // console.log(porder)
    // const handleadd=(e)=>{
        

    // }



   


    return (<div><hr/>
        <label>Select Customer : </label>
        <select value={pcustomer}  onChange ={handleCustomer}>
            <option value="">Select Customer</option>
        {
            customers.map((customer)=>{
                return <option value={customer._id}>{customer.name}</option>

            })
        }</select>
            &nbsp;
            <label>Select Product : </label>
            <select value={porder} onChange={handleProduct}>
                <option value="">Select Product</option>
                {
                    products.map((product)=>{
                        return <option value={product._id}>{product.name}</option>
                    })
                }

            </select>&nbsp;
             <button onClick={handleqdec}>-</button> &nbsp; {quantity} &nbsp;<button onClick={handleqinc}>+</button>
            <button >Add product</button>
        
    </div>)
}


    

export default Billing